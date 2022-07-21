import dataFeed from "../../dataFeed";
import profpic from "../../assets/images/profpic.jpg"; // this is the only way I could get the image to draw
import { Row, Col, Card } from "react-bootstrap";
const aboutMeData = dataFeed[0];

function AboutMe() {
    return (
        <>
            <Card>
                <Card.Img src={profpic}/>
                    {/* <img src={profpic} alt="" /> */}
                <Card.Body>
                    {aboutMeData.text}
                </Card.Body>
            </Card>
            
        </>
    );
}

export default AboutMe;