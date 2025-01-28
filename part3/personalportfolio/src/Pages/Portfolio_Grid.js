import React from "react";
import Experiecne from './Portfolio_Grid/Experience';
import Skills from './Portfolio_Grid/Skills';
import Projects from './Portfolio_Grid/Projects';
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
const Portfolio_Grid = () => {

    return (
        <div>
            <Header/>
         <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Experiecne></Experiecne>
        <Footer/>
        </div>
    );
  };
  
  export default Portfolio_Grid;