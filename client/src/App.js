import React from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from './components/DragDrop';
import Container from 'react-bootstrap/Container';

function App() {
  //  const [nav, setNav] = useState("AboutMe");

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
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


        
        <DragDrop />
       
        


        

        
      </div>
    </DndProvider>
  );
}

export default App;
