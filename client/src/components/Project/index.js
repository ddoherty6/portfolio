import dataFeed from '../../dataFeed';
const projects = dataFeed[1].content;

function Project() {
    return (
        <section className="work">
            {projects.map((project, i) => (
                <article key={i} className="work-sm">
                    <a href={project.url} target="_blank">
                        <img src="" alt=""/>
                        <div className="stylebox">
                            <h4>{project.title}</h4>
                            <p>{project.url}</p>
                        </div>
                    </a>
                </article>
            ))}
        </section>
    );
}

export default Project;