import React, { useState } from 'react';
import Cards from './components/Cards';
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
       <Cards />
      </Container>
      


      

      
    </div>
  );
}

export default App;
