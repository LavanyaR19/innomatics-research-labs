import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Coffee Shop Website",
    description: "A responsive coffee shop website built using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/yourusername/coffee-shop",
    live: "https://yourwebsite.com/coffee-shop",
  },
  {
    title: "Shopping Cart App",
    description: "An interactive shopping cart web application using JavaScript.",
    technologies: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/yourusername/shopping-cart",
    live: "https://yourwebsite.com/shopping-cart",
  },
  {
    title: "Smart Contact Organizer",
    description: "A Python-based GUI system for managing contacts efficiently.",
    technologies: ["Python", "Tkinter"],
    github: "https://github.com/yourusername/contact-organizer",
    live: "https://yourwebsite.com/contact-organizer",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Used:</strong> {project.technologies.join(", ")}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
