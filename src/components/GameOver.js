import { Button, Card } from 'react-bootstrap';

function GameOver(props) {

    const handleClick = (event) => {
        event.preventDefault();
        props.setArticles([]);
    };

    return (
        <Card className="border-0 centerText">
            <Card.Header>Winner!</Card.Header>
            <Card.Body>
                <Card.Title>It took you {props.length()} articles to find the Philosophy page!</Card.Title>
                <Card.Text>
                    Please click the restart button to start over
                </Card.Text>
                <Button href="/" variant="outline-dark" onClick={handleClick}>Restart</Button>
            </Card.Body>
        </Card>
    );
}

export default GameOver;