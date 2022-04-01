import dataFeed from "../../dataFeed";
import profpic from "../../assets/images/profpic.jpg"; // this is the only way I could get the image to draw
const aboutMeData = dataFeed[0];

function AboutMe() {
    return (
        <main id="about-me" key="about-me">
            <div className="indent">
                <h2>About Me</h2>
            </div>

            <section className="bio">

                <img src={profpic} alt="" />

                <p>
                {aboutMeData.text}
                </p>

            </section>
        </main>
    );
}

export default AboutMe;