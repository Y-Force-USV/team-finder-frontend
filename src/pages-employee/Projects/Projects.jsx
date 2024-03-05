import React from "react";
import ProjectsCSS from "./Projects.module.css";

function Projects() {
  return (
    <div className={ProjectsCSS.pageContainer}>
      <div className={ProjectsCSS.projectsContainer}>
        <p>My projects!</p>
      </div>
    </div>
  );
}
export default Projects;
