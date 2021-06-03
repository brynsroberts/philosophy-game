const axios = require("axios");
const got = require("got");

// source: https://stackoverflow.com/questions/6640382/how-to-remove-backslash-escaping-from-a-javascript-var
const unescapeSlashes = (str) => {
  // add another escaped slash if the string ends with an odd
  // number of escaped slashes which will crash JSON.parse
  let parsedStr = str.replace(/(^|[^\\])(\\\\)*\\$/, "$&\\");

  // escape unescaped double quotes to prevent error with
  // added double quotes in json string
  parsedStr = parsedStr.replace(/(^|[^\\])((\\\\)*")/g, "$1\\$2");

  try {
    parsedStr = JSON.parse(`"${parsedStr}"`);
  } catch (e) {
    return str;
  }

  return parsedStr;
};

const getArticle = async (req, res, next) => {
  let url = "";
  if (req.query.link) {
    url = req.query.link;
  } else url = "https://en.wikipedia.org/wiki/Special:Random";
  const page_html = await got(url);
  const page_body = page_html.body;
  const article_data = await axios({
    method: "post",
    url: "https://cs361-microservice.wl.r.appspot.com/",
    headers: {
      "Content-Type": "text/html",
    },
    data: {
      page_body,
    },
  });
  try {
    let decode = JSON.stringify(article_data.data);
    decode = unescapeSlashes(decode);
    decode = JSON.parse(decode);
    for (const key in decode) {
      for (let i = 0; i < decode[key].length; i++) {
        if (typeof decode[key][i] === "string") {
          if (decode[key][i][decode[key][i].length - 1] === '"') {
            decode[key][i] = decode[key][i].substring(
              0,
              decode[key][i].length - 1
            );
          }
          if (decode[key][i][0] === '"') {
            decode[key][i] = decode[key][i].substring(1);
          }
          decode[key][i] = decode[key][i].replace('"', "");
        }
      }
    }

    res.status(200).json(decode);
  } catch {
    res.status(200).json(article_data.data);
  }
};

module.exports = {
  getArticle,
};
