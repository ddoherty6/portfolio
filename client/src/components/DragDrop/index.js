import Cards from '../Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../../data';

function DragDrop() {
    return (
        <Row>
            <Col className="dropBoard col-3"></Col>
            <Col className="dragPool"> {data.map((datum, i) => {
                return <Cards key={i} cardInfo={datum}/>;
            })} </Col>
        </Row>
    );
}

export default DragDrop;