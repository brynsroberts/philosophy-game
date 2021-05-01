import { Card } from 'react-bootstrap';
import ArticleSummary from "./ArticleSummary";

function DisplayArticles(props) {
    return (
        <Card className="border-0 background">
            <Card.Header className="centerText">Article Count: {props.articles.length}</Card.Header>
            <Card.Body className="background">
                <Card.Title>{props.title}</Card.Title>
                {props.articles.map((article, index) => {
                    return <ArticleSummary title={article.title} first_sentence={article.first_sentence} key={index} self={article.self} index={index} />
                })}
            </Card.Body>
        </Card>
    );
}

export default DisplayArticles;