import { Card } from 'react-bootstrap';
function ArticleSummary(props) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.index + 1}: {props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.self}</Card.Subtitle>
                <Card.Text>
                    {props.first_sentence}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ArticleSummary;