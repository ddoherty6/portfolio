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
        <Card ref={drag} className={cardType==="board" ? "p-2 justify-content-around" : "p-2 justify-content-around col-3"}>
            <Card.Img src={cardInfo.img} alt=""/>
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