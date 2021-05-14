const axios = require("axios");

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
  const url =
    "http://flip1.engr.oregonstate.edu:7043/?query=" + req.query.input;
  const page = await axios.get(url);
  const page_data = page.data;
  const article_data = await axios({
    method: "post",
    url: "https://cs361-microservice.wl.r.appspot.com/",
    headers: {
      "Content-Type": "text/html",
    },
    data: {
      page_data,
    },
  });
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
};

module.exports = {
  getArticle,
};
