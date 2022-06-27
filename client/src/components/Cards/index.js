import Card from 'react-bootstrap/Card';

import './style.css';

function Cards({cardInfo}) {
    return (
        <Card>
            {/* <Card.Img src={cardInfo.img} alt=""/> */}
            <Card.Body>
                <Card.Title>{cardInfo.title}</Card.Title>
                {/* <Card.Text>{cardInfo.text}</Card.Text> */}
                <Card.Link href={cardInfo.url}>deployment</Card.Link>
                <Card.Link href={cardInfo.repo}>repo</Card.Link>
            </Card.Body>
        </Card>
    );
}

// className={`${i===0 || i===1 ? "work-lg" : "work-sm"}`}

export default Cards;