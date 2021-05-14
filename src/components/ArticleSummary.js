import { Card } from "react-bootstrap";
import { useState } from "react";

function ArticleSummary(props) {
  const [border, setBorder] = useState("light");

  const onHover = () => {
    const curr = props.title.toLowerCase();
    if (curr.includes("philosophy")) {
      return "success";
    } else {
      return "primary";
    }
  };

  const getSentence = (sentences) => {
    const regex = /[a-zA-Z]/;
    for (const sen of sentences) {
      console.log(sen);
      console.log(regex.test(sen));
      if (regex.test(sen)) {
        return sen;
      }
    }
    return "";
  };

  return (
    <a
      href={props.self}
      className="custom-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card
        border={border}
        className="linkButton"
        onMouseEnter={() => setBorder(onHover)}
        onMouseLeave={() => setBorder("light")}
      >
        <Card.Header>
          {props.index + 1}: {props.title}
        </Card.Header>
        <Card.Body>
          <Card.Text>{getSentence(props.text)}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}

export default ArticleSummary;
