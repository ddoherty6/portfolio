import React from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Row from 'react-bootstrap/Row';
import Cards from './components/Cards';
import Container from 'react-bootstrap/Container';
import DragDrop from './components/DragDrop';
import data from './data'; // simulating object that could be drawn from a future back end

function App() {

  const initState = function() {
    
    if(window.innerWidth < 450) {
      return 0;
    } else if(window.innerWidth > 450 && window.innerWidth < 850) {
      return 1;
    } else {
      return 2;
    }
  }

  const [screenSize, setScreenSize] = React.useState(initState());

  const updateMedia = () => {
      var screenInt = 0;

      if(window.innerWidth < 450) {
        screenInt = 0;
      } else if(window.innerWidth > 450 && window.innerWidth < 850) {
        screenInt = 1;
      } else {
        screenInt = 2;
      }
      setScreenSize(screenInt);
  };
  
  React.useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
  });
  
  return (
    <DndProvider backend={HTML5Backend}>
      <Container fluid>
       
        {screenSize === 2 ? 
          <DragDrop data={data}/>
        : ""}

        
        {screenSize === 1 ? 
          data.map((card, i) => {
            return (
              <Row>
                <Cards key={i} cardInfo={card} cardType={"tablet"}/>
              </Row>);
          })
        : ""}
        {screenSize === 0 ? 
          data.map((card, i) => {
            return <Cards key={i} cardInfo={card} cardType={"board"}/>;
          })
        : ""}
        

      </Container>
    </DndProvider>
  );
}

export default App;
