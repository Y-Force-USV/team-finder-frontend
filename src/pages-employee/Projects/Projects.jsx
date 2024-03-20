import React, { useState } from "react";
import ProjectsCSS from "./Projects.module.css";
import Search from "../../assets/search.svg";
import ModalEmployees from "../../components/ModalEmployees/ModalEmployees";

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addProject = (projectName, employee) => {
    if (!employee || !projectName) return;
    const newProject = {
      name: projectName,
      employee: employee,
    };
    setProjects([...projects, newProject]);
    closeModal();
  };

  return (
    <div className={ProjectsCSS.projectsContainer}>
      {modalIsOpen && <div className={ProjectsCSS.modal_background} />}
      <div className={ProjectsCSS.message}>
        <p>My Projects!</p>
      </div>
      <div className={ProjectsCSS.right_buttons}>
        <div className={ProjectsCSS.search_projects}>
          <input
            type="text"
            name="searchTerm"
            placeholder="Search..."
            autoComplete="off"
            className={ProjectsCSS.search_input}
          />
          <img className={ProjectsCSS.search_img} src={Search} alt="Search" />
        </div>
        <button
          className={`${ProjectsCSS.add_btn} ${
            modalIsOpen ? ProjectsCSS.modalOpen : ""
          }`}
          onClick={openModal}
        >
          + ADD NEW
        </button>
        {modalIsOpen && (
          <div className={ProjectsCSS.modal_container}>
            <ModalEmployees
              isOpen={modalIsOpen}
              closeModal={closeModal}
              onSubmit={addProject}
            />
          </div>
        )}
      </div>

      <table className={ProjectsCSS.table}>
        <thead>
          <tr className={ProjectsCSS.header}>
            <th>Project name</th>
            <th>Role/Function</th>
            <th>Status</th>
            <th>Worked hours/day</th>
            <th>Update</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className={ProjectsCSS.projects}>
              <td>{project.name}</td>
              <td>{project.employee}</td>
              <td>In progress</td>
              <td>8 hours</td>
              <td>Closed</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalEmployees
        isOpen={modalIsOpen}
        closeModal={closeModal}
        onSubmit={addProject}
      />
    </div>
  );
}

export default Projects;
