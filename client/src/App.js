import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Footer from './components/Footer';

const dataFeed = require('./dataFeed');
console.dir(dataFeed);

function App() {
  const [currentNav, setCurrentNav] = useState(dataFeed.AboutMe);

  console.log(currentNav);

  setCurrentNav(dataFeed.Profile);


  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
