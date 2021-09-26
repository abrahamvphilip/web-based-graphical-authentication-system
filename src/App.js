import React from 'react';
import './App.css';

import AnimatedCursor from "react-animated-cursor"

import Home from './components/home-container/Home'

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={48}
        color='58,12,163'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      />
      <Home />
    </>
    
  );
}

export default App;
