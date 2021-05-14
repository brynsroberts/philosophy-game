import { Button } from "react-bootstrap";
import axios from "axios";

function ArticleButton(props) {
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
    props.setLoading(true);
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
    props.setLoading(false);
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
        disabled={props.loading}
      >
        {getTitle(props.link)}
      </Button>
    );
  } else {
    return <></>;
  }
}

export default ArticleButton;
