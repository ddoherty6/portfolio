import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './style.css';

function Cards(cardInfo) {
    return (
        <Row>
            <Card>
                <Card.Img src={cardInfo.img} alt=""/>
                <Card.Body>
                    <Card.Title>{cardInfo.title}</Card.Title>
                    <Card.Text>{cardInfo.text}</Card.Text>
                    <Card.Link href={cardInfo.url}>deployment</Card.Link>
                    <Card.Link href={cardInfo.repo}>repo</Card.Link>
                </Card.Body>
            </Card>
        </Row>
    );
}

// className={`${i===0 || i===1 ? "work-lg" : "work-sm"}`}

export default Cards;