import dataFeed from '../../dataFeed';
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
                    <article key={i} className={`${i===0 || i===1 ? "work-lg" : "work-sm"}`}>
                        <a href={project.url} target="_blank">
                            <img src={project.img} alt=""/>
                            <div className="stylebox">
                                <h4>{project.title}</h4>
                                <p>
                                    <a href={project.url} target="_blank">deployment </a>
                                    <a href={project.repo} target="_blank"> repo</a></p>
                            </div>
                        </a>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Project;