import { useEffect, useState } from 'react'
import Cards from '../Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../../data'; // simulating object that could be drawn from a future back end
import { useDrop } from 'react-dnd';

function DragDrop() {

    // useEffect(() => {
    //     // split data from backend into an array - 0 index is card pool, 1 index is active card
    //     console.log("inUseEffect");
    //     cardStateParsed = [data, {}];
    //     console.log(cardStateParsed);
    // }, []);

    

    const [cardState, setCardState] = useState(data);

    const findIndex = function(id) {
        for (var i = 0; i < data.length; i++) {
            if(id === data[i].id) {
                return i;
            }
        }
    }

    const changeBoard = (id) => {
      
        const newData = cardState;
        newData[findIndex(id)].active = true; 

        setCardState(newData);

        console.log(cardState);
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => changeBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const activeCards = function() {
        return cardState.filter(card => card.active === true);
    }

    const inactiveCards = function() {
        return cardState.filter(card => card.active === "false");
    }

    return (
        <Row>
            <Col ref={drop} className="dropBoard col-3">
                {activeCards().map((card, i) => {
                    return <Cards key={i} cardInfo={card} cardType={"board"}/>;
                })}
            </Col>
            <Col className="dragPool col-9">
                <Row>
                    {inactiveCards().map((card, i) => {
                        return <Cards key={i} cardInfo={card} cardType={"pool"}/>; 
                    })} 
                </Row>
            </Col>
        </Row>
    );
}

export default DragDrop;