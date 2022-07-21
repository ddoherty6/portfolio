import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <Card ref={drag} className={cardType==="board" ? "p-2 justify-content-around" : "justify-content-around col-4"}>
            {cardType==="board" || cardType==="tablet" && cardInfo.img!=undefined ? <Card.Img src={cardInfo.img} alt=""/> : ""}
            <Card.Body>
                <Card.Title>{cardInfo.title}</Card.Title>
                {cardType==="board" || cardType==="tablet" ? <Card.Text>{cardInfo.text}</Card.Text> : ""}
                {/* <Card.Text>{cardInfo.text}</Card.Text> */}
                <Button href={cardInfo.url} target={"_blank"}>
                    <FontAwesomeIcon icon={faLink}/> link</Button>
                <Button href={cardInfo.repo} target={"_blank"}>
                    <FontAwesomeIcon icon={faGithub}/> repo</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;