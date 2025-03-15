import React from "react";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Lung Cancer Detection",
      description: "Deep learning model for histopathological image analysis.",
      link: "https://github.com/mdzunayed/lung-cancer-detection",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio built with React.",
      link: "https://github.com/mdzunayed/portfolio",
    },
  ];

  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
