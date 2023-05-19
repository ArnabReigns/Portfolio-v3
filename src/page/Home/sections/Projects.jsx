import React from "react";
import projects from "../../../data/projects";
import GitHubIcon from "/assets/github.svg";
import PreviewIcon from "/assets/preview.svg";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="header">
        <p>Projects</p>
        <div className="heading">
          <div className="line"></div>
          <h1>Some Things I've Built</h1>
          <div className="line"></div>
        </div>
      </div>
      <div className="body">
        {projects.map((project, idx) => (
          <div className="card" key={idx}>
            <div className="left">
              <img src={project.img} alt="" />
            </div>
            <div className="right">
              <h3 className="subtitle">{project.subTitile}</h3>
              <h1 className="title">{project.title}</h1>
              <p className="desc">{project.desc}</p>
              <div className="techList">
                {project.techs.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <div className="links">
                {project.github && (<a href={project.github} target="_blank">
                  <img src={GitHubIcon} alt="" />
                </a>)}
                {project.published && (<a href={project.published} target="_blank">
                  <img src={PreviewIcon} alt="" />
                </a>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
