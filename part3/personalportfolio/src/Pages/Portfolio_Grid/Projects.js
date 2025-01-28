

import React from "react";
import "./Projects.css";

const Footer = () => {

  return (
    
<section id="projects" class="section projects">
    <h2>Projects</h2>
    <div class="projects-container">
      <div class="project">
        <h3>National Medical Directors</h3>
        <p>Developed web applications using .NET MVC and C#.</p>
      </div>
      <div class="project">
        <h3>PharmaSafe</h3>
        <p>Built a front-end in Angular with back-end in .NET Core API and SQL Server.</p>
      </div>
      <div class="project">
        <h3>Zumanta</h3>
        <p>Led the team to develop Vue.js front-end with .NET Core Web API.</p>
      </div>
    </div>
  </section>

  );
};

export default Footer;