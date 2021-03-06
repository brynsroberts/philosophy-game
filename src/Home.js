import EntryPage from "./components/EntryPage";
import PickArticle from "./components/PickArticle";
import DisplayArticles from "./components/DisplayArticles";
import GameOver from "./components/GameOver";
import { Container, Row, Col } from "react-bootstrap";

function Home(props) {
  const philosophy_url = "https://en.wikipedia.org/wiki/Philosophy";

  const articlesLength = () => {
    return props.articles.length;
  };

  const getTitle = () => {
    return props.articles[props.articles.length - 1]["title"];
  };

  const getLinks = () => {
    return props.articles[props.articles.length - 1]["article_links"];
  };

  const game_over = () => {
    return props.articles[props.articles.length - 1]["self"] === philosophy_url;
  };

  return (
    <Container fluid>
      {articlesLength() === 0 && <EntryPage setArticles={props.setArticles} />}
      <Row>
        <Col sm="12" md="6">
          {articlesLength() > 0 && game_over() && (
            <GameOver length={articlesLength} setArticles={props.setArticles} />
          )}
          {articlesLength() > 0 && !game_over() && (
            <PickArticle
              setArticles={props.setArticles}
              title={getTitle}
              links={getLinks}
              remove_last_article={props.remove_last_article}
            />
          )}
        </Col>
        <Col sm="12" md="6">
          {articlesLength() > 0 && (
            <DisplayArticles articles={props.articles} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
