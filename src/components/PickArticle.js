import { Card, Button } from 'react-bootstrap';
import ArticleLink from "./ArticleLink";

function PickArticle(props) {

    const handleClick = (event) => {
        event.preventDefault();
    };

    return (
        <Card className="sectionHeader">
            <Card.Header>Current Article</Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    Please pick a link to your next article
                </Card.Text>
                {props.links.map((link, index) => <ArticleLink link={link} key={index} setArticles={props.setArticles} />)}
                <div>
                    <Button href="/" variant="outline-danger" onClick={handleClick}>Back</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default PickArticle;