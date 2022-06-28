import { useState } from 'react'
import Cards from '../Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../../data';
import { useDrop } from 'react-dnd';

function DragDrop() {

    const [pool, setPool] = useState(data);

    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => addToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addToBoard = (id) => {
        const activeCard = data.filter((card) => id === card.id);
        const newPool = data.filter((card) => id != card.id);
        setBoard(activeCard);
    }

    return (
        <Row>
            <Col ref={drop} className="dropBoard col-3">
                {board.map((card, i) => {
                    return <Cards key={i} cardInfo={card} cardType={"board"}/>;
                })}
            </Col>
            <Col className="dragPool col-9">
                <Row>
                    {pool.map((card, i) => {
                        return <Cards key={i} cardInfo={card} cardType={"pool"}/>; 
                    })} 
                </Row>
            </Col>
        </Row>
    );
}

export default DragDrop;