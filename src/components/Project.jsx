import { useState, useEffect } from "react";

import "./Project.css";

import img1 from "../assets/images/time.png";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  // use Larevel backend API to fetch all projects info from the database
  async function fetchProjects() {
    // the URL to call my API, my online hosting was just set, haven't changed the domain name yet
    let response = await fetch("http://c9674390.mywhc.ca/api/projects");
    let data = await response.json();
    //console.log(data);
    setProjects(data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const myImages = [img1];

  return (
    <div className="projectWrap" id="projects">
      <p className="projectText">My Projects</p>
      {projects.map((project, index) => (
        <div className="projectContainer" key={project.id}>
          {/* the images don't show up because of a configuration issue in the hosting server,
            so I disable the use of the images from database 
          <div className="skiiImg">
            <img src={skill.image} alt={skill.name} />
          </div>
          */}

          {/* I temporarily use the images array from /assets/images/folder for display */}
          <div className="projectCard">
            <div className="projectImg">
              <img src={myImages[index]} alt={project.name} />
            </div>
            <div className="projectDetails">
              <div className="projectTitle">{project.title}</div>
              <div className="stackContainer">
                <span className="stack">Node.js</span>
                <span className="stack">CLI</span>
                <span className="stack">API</span>
                <span className="stack">npm</span>
                <span className="stack">Git</span>
                <span className="stack">Agile</span>
              </div>
              <ul>
                <li>
                  <a href={project.url}>
                    <img
                      src="/src/assets/logo/live.png"
                      width="35"
                      height="35"
                      className="projectLink1"
                      alt="live"
                    />
                  </a>
                </li>
                <li>
                  <a href={project.slug}>
                    <img
                      src="/src/assets/logo/github.png"
                      width="40"
                      height="40"
                      className="projectLink2"
                      alt="github"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="projectContent">{project.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
