function Navigation({ nav, setNav }) {
    return (
        <nav className="nav-item">
            <div className="nav-item"><a href="#about-me" onClick={() => setNav("AboutMe")}>Home</a></div>
            <div className="nav-item"><a href="#portfolio" onClick={() => setNav("Portfolio")}>Portfolio</a></div>
            {/* <div className="nav-item"><a href="#contact" onClick={() => setNav("Contact")}>Contact Me</a></div>
            <div className="nav-item"><a href="#resume" onClick={() => setNav("Resume")}>Skills</a></div> */}
        </nav>
    );
}

export default Navigation;