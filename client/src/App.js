import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

function App() {
   const [nav, setNav] = useState("AboutMe");

  return (
    <div >
      {/* <Header nav={nav} setNav={setNav}/> */}
      

      {/* <section className="hero">
            <div className="stylebox">
                <h3>Always Send It.</h3>
            </div>
        </section> */}

    
      {/* {nav==="AboutMe" && <AboutMe />}   
      {nav==="Portfolio" && <Project />}
      {nav==="Contact" && <Contact />}
      {nav==="Resume" && <Resume />} */}


      <Container fluid style={{
      backgroundColor: "#6a87ab"
      }}>
        <Header />
        <AboutMe />
        <Project />
        <Footer />
      </Container>
      


      

      
    </div>
  );
}

export default App;
