import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "80%" },
  { name: "React", level: "75%" },
  { name: "Python", level: "70%" },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <span>{skill.name}</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
