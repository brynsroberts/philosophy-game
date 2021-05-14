import { Button } from "react-bootstrap";
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
    return split_string[split_string.length - 1];
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(props.link);
    //   props.setArticles(prevState => {
    //       return [...prevState, { ...article, self: props.link, title: getTitle(props.link) }];
    //   })
  };

  const chooseClass = () => {
    const curr = props.link.toLowerCase();
    if (curr.includes("philosophy")) {
      return "outline-success";
    } else {
      return "outline-primary";
    }
  };

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
}

export default ArticleButton;
