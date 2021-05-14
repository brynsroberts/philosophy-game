import { Card } from "react-bootstrap";
import ArticleSummary from "./ArticleSummary";

function DisplayArticles(props) {
  return (
    <Card className="border-0 background">
      <h3 className="centerText">Article Count: {props.articles.length}</h3>
      <Card.Body className="background">
        <Card.Title>{props.title}</Card.Title>
        {props.articles
          .map((article, index) => {
            return (
              <ArticleSummary
                title={article.title}
                text={article.text}
                key={index}
                self={article.self}
                index={index}
              />
            );
          })
          .reverse()}
      </Card.Body>
    </Card>
  );
}

export default DisplayArticles;
