import Card from 'react-bootstrap/Card';
import { useDrag } from 'react-dnd';

import './style.css';

function Cards({cardInfo, cardType}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "card",
        item: {
            id: cardInfo.id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <Card ref={drag} className={cardType==="board" ? "p-2 justify-content-around" : "p-2 justify-content-around col-4"}>
            {cardType==="board" || cardType==="tablet" && cardInfo.img!=undefined ? <Card.Img src={cardInfo.img} alt=""/> : ""}
            <Card.Body>
                <Card.Title>{cardInfo.title}</Card.Title>
                {cardType==="board" || cardType==="tablet" ? <Card.Text>{cardInfo.text}</Card.Text> : ""}
                <Card.Link href={cardInfo.url}>deployment</Card.Link>
                <Card.Link href={cardInfo.repo}>repo</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Cards;