import React from "react";
import Experiecne from './Portfolio_Flex/Experience';
import Skills from './Portfolio_Flex/Skills';
import Projects from './Portfolio_Flex/Projects';
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
const Portfolio_Flex = () => {

    return (
        <div>
            <Header/>
         <About/>
        <Skills/>
        <Projects/>
        <Experiecne/>
        <Footer/>
        </div>
    );
  };
  
  export default Portfolio_Flex;