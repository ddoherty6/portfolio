import { useEffect, useState } from 'react';
import Cards from '../Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDrop } from 'react-dnd';
//import data from '../../data'; // simulating object that could be drawn from a future back end

function DragDrop({ data }) {
    
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
        <Row className="mt-3 vh-100">               
            <Col ref={drop} className="dropBoard col-4">
                <Row>
                    {cardState[1].length === 0 ? <p>drag stuff here</p> : ""}    
                </Row>
                <Row className="h-100">
                    {cardState[1].map((card, i) => {
                        return <Cards key={i} cardInfo={card} cardType={"board"}/>;
                    })}
                </Row>
            </Col>
            <Col className="dragPool col-8">
                <Row className="h-100">
                    {cardState[0].map((card, i) => {
                        return <Cards key={i} cardInfo={card} cardType={"pool"}/>; 
                    })} 
                </Row>
            </Col>
        </Row>
    );
}

export default DragDrop;