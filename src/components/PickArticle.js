import { Card, Button } from 'react-bootstrap';
import ArticleButton from "./ArticleButton";

function PickArticle(props) {

    const handleClick = (event) => {
        event.preventDefault();
        props.remove_last_article();
    };

    return (
        <Card className="border-0 centerText opacity-50">
            <Card.Header>Current Article</Card.Header>
            <Card.Body>
                <Card.Title>{props.title()}</Card.Title>
                <Card.Text>
                    Please pick a link to your next article
                </Card.Text>
                {props.links().map((link, index) => <ArticleButton link={link} key={index} setArticles={props.setArticles} />)}
                <div>
                    <Button className="linkButton" href="/" variant="outline-danger" onClick={handleClick}>Back</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default PickArticle;