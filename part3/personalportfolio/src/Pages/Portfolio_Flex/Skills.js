import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "JavaScript, HTML, CSS, Bootstrap",
    "Angular, Vue.js, React",
    "ASP.NET Core, .NET MVC",
    "SQL Server, MySQL",
    "Microservices Architecture",
    "SDLC, Agile, JIRA",
  ];

  return (
    <section className="section skills">
      <h2>Skills</h2>
      <div className="skills1-container">
        {skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;