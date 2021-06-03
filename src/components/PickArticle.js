import { Card, Button, Spinner } from "react-bootstrap";
import ArticleButton from "./ArticleButton";
import { useState, useEffect } from "react";

function PickArticle(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [loading]);
  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    props.remove_last_article();
  };

  return (
    <Card className="border-0 centerText opacity-50">
      <h3>Current Article: {props.title()}</h3>
      <Card.Body>
        <div>
          {!loading && (
            <Card.Text>Please pick a link to your next article</Card.Text>
          )}
          {loading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </div>
        {props.links().map((link, index) => (
          <ArticleButton
            link={link}
            key={index}
            setArticles={props.setArticles}
            setLoading={setLoading}
            loading={loading}
          />
        ))}
        <div>
          <Button
            className="linkButton"
            href="/"
            variant="outline-danger"
            onClick={handleClick}
          >
            Back
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PickArticle;
