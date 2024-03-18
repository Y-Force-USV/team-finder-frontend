import React from "react";
import ProjectsCSS from "./Projects.module.css";
import SidebarEmployee from "../../components/SidebarEmployee/SidebarEmployee";
import Search from "../../assets/search.svg";
import MoreInformation from "../../assets/more-information.svg";
function Projects() {
  return (
    <div className={ProjectsCSS.projectsContainer}>
      <div className={ProjectsCSS.square}>
        <p className={ProjectsCSS.message}>My Projects</p>
      </div>

      <div className={ProjectsCSS.search_projects}>
        <input
          type="text"
          name="searchTerm"
          placeholder="  Search..."
          autoComplete="off"
          className={ProjectsCSS.search_input}
        />
        <img
          className={ProjectsCSS.search_img}
          src={Search}
          width={"15px"}
          height={"15px"}
          alt="Search"
        ></img>
      </div>

      <table className={ProjectsCSS.table}>
        <thead>
          <tr className={ProjectsCSS.header}>
            <th>Project name</th>
            <th>Role/Function</th>
            <th>Status</th>
            <th>Worked hours/day</th>
            <th>Update</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className={ProjectsCSS.projects}>
            <td>FutureSecure Technologies</td>
            <td>Frontend</td>
            <td>Closed</td>
            <td>8 hours</td>
            <td>
              <div className={ProjectsCSS.more_information_container}>
                <img
                  src={MoreInformation}
                  alt="MoreInformation"
                  className={ProjectsCSS.more_information}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Projects;
