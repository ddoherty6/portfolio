import Cards from '../Cards';
import data from '../../data';

function DragDrop() {
    return (
        <>
            <div className="dragPool"> {data.map((datum) => {
                return <Cards cardInfo={datum}/>;
            })} </div>
            <div className="dropBoard"></div>
        </>
    );
}

export default DragDrop;