import dataFeed from '../../dataFeed';
import Card from 'react-bootstrap/Card'
//import pic from '../../assets/images/look-me-up.jpg';
const projects = dataFeed[1].content;
//import images[i] from `${projects[i].img}`;
//const images = [];
// for (i=0; i<projects.length; i++) {
//     import images[i] from `${projects[i].img}`;
// }

function Project() {
    return (
        <main id="work">
            <div className="indent">
                <h2>Work</h2>
            </div>
            <section id="portfolio" className="work">
                {projects.map((project, i) => (
                    <Card key={i} className={`${i===0 || i===1 ? "work-lg" : "work-sm"}`}>
                        <Card.Img src={project.img} alt=""/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Link href={project.url}>deployment</Card.Link>
                            <Card.Link href={project.repo}>repo</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </section>
        </main>
    );
}

export default Project;