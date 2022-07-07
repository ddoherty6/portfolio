import { useEffect, useState } from 'react'
import Cards from '../Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../../data'; // simulating object that could be drawn from a future back end
import { useDrop } from 'react-dnd';

function DragDrop() {

    const [cardState, setCardState] = useState([data, []]);

    const changeBoard = (id) => {

        var newState = cardState;

        if(newState[1].length === 0) {
            // if there is no element in newState[1] (active board), add selected element
            newState[1].push(newState[0][id]);
            newState[0].splice(id, 1);
            
        } else {
            // if there is an element in newState[1] (active board), remove it, add selected element, remove selected element from dragPool, the add removed element back to dragPool
            const pop = newState[1].pop();
            newState[1].push(newState[0][id]);
            newState[0].splice(id, 1);
            newState[0].push(pop);
        }
        setCardState(newState);
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => changeBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    return (
        <Row>
            <Col ref={drop} className="dropBoard col-3">
                <p>drag stuff here</p>
                {cardState[1].map((card, i) => {
                    return <Cards key={i} cardInfo={card} cardType={"board"}/>;
                })}
            </Col>
            <Col className="dragPool col-9">
                <Row>
                    {cardState[0].map((card, i) => {
                        return <Cards key={i} cardInfo={card} cardType={"pool"}/>; 
                    })} 
                </Row>
            </Col>
        </Row>
    );
}

export default DragDrop;