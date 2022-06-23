import dataFeed from "../../dataFeed";
import profpic from "../../assets/images/profpic.jpg"; // this is the only way I could get the image to draw
import Container from "react-bootstrap/Container";
const aboutMeData = dataFeed[0];

function AboutMe() {
    return (
        <Container className="row">
            {/* <main id="about-me" key="about-me"> */}
                
            <Container className="col-3">
                <img src={profpic} alt="" />
            </Container>
            <Container className="col-9">
                <section className="bio">
                    <p>
                        {aboutMeData.text}
                    </p>
                </section>
            </Container>
                
                
            
            {/* </main> */}
        </Container>
    );
}

export default AboutMe;