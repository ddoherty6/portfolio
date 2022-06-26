import data from '../../data';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './style.css';

function Cards() {
    return (
        <Row>
            {data.map((datum, i) => (
                <Card key={i}>
                    <Card.Img src={datum.img} alt=""/>
                    <Card.Body>
                        <Card.Title>{datum.title}</Card.Title>
                        <Card.Text>{datum.text}</Card.Text>
                        <Card.Link href={datum.url}>deployment</Card.Link>
                        <Card.Link href={datum.repo}>repo</Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    );
}

// className={`${i===0 || i===1 ? "work-lg" : "work-sm"}`}

export default Cards;