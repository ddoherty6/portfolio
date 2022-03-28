import dataFeed from "../../dataFeed";
const aboutMeData = dataFeed[0];

function AboutMe() {
    return (
        <main key="about-me">
            <div className="indent">
                <h2>About Me</h2>
            </div>

            <section className="bio">

                <img src={aboutMeData.img} alt="" />

                <p>
                {aboutMeData.text}
                </p>

            </section>
        </main>
    );
}

export default AboutMe;