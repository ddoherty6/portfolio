function Navigation({ nav, setNav }) {
    return (
        <nav className="nav-item">
            <div className="nav-item"><a href="#about" onClick={() => setNav("AboutMe")}>About Me</a></div>
            <div className="nav-item"><a href="#portfolio" onClick={() => setNav("Portfolio")}>Portfolio</a></div>
            <div className="nav-item"><a href="#contact" onClick={() => setNav("Contact")}>Contact</a></div>
            <div className="nav-item"><a href="#resume" onClick={() => setNav("Resume")}>Resume</a></div>
        </nav>
    );
}

export default Navigation;