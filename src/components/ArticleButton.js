import { Button } from "react-bootstrap";
import axios from "axios";

function ArticleButton(props) {
  // const article = {
  //     first_sentence: "This is the first sample sentence of a sample page",
  //     links: [
  //         'https://en.wikipedia.org/wiki/Nema_Halt_railway_station',
  //         'https://en.wikipedia.org/wiki/National_Highway_22_(India)',
  //         'https://en.wikipedia.org/wiki/India',
  //         'https://en.wikipedia.org/wiki/Buddhist_philosophy',
  //         'https://en.wikipedia.org/wiki/Philosophy'
  //     ]
  // }

  const getTitle = (link) => {
    const split_string = link.split("/");
    let title = split_string[split_string.length - 1].split("_");
    return title.join(" ");
  };

  const keepArticle = (title) => {
    var pattern = new RegExp(/[~`!$%&*+=';,/{}|":<>?]/); //unacceptable chars
    if (pattern.test(title)) {
      return false;
    }
    return true; //good user input
  };

  const handleClick = async (event) => {
    event.preventDefault();
    console.log(props.link);
    const title = getTitle(props.link);
    const res = await axios.get("/article", {
      params: {
        input: title,
      },
    });

    props.setArticles((prevState) => {
      return [...prevState, { ...res.data, self: props.link }];
    });
  };

  const chooseClass = () => {
    const curr = props.link.toLowerCase();
    if (curr.includes("philosophy")) {
      return "outline-success";
    } else {
      return "outline-primary";
    }
  };

  if (keepArticle(getTitle(props.link))) {
    return (
      <Button
        className="linkButton"
        href={props.link}
        variant={chooseClass()}
        onClick={handleClick}
      >
        {getTitle(props.link)}
      </Button>
    );
  } else {
    return <></>;
  }
}

export default ArticleButton;
