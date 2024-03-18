import React, { useState } from "react";
import OrgEmployeeCSS from "./OrgEmployee.module.css";
import Account from "../../assets/account.svg";
import Email2 from "../../assets/email2.svg";
import SkillsArrow from "../../assets/skills-arrow.svg";
import Arrow from "../../assets/arrow.svg";

function OrgEmployee() {
  const [selectedRoles, setSelectedRoles] = useState(["Employee"]); // Se poate incepe cu un rol preselectat
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programmingLanguages = ["JavaScript", "HTML", "CSS", "Python", "Java"];
  const librariesUsed = ["React", "Redux", "Bootstrap", "jQuery"];
  const frameworksUsed = ["Django", "Flask", "ASP.NET Core"];
  const softwareEngineeringSkills = [
    "Web Development",
    "Project Management",
    "Problem Solving",
  ];

  const handleRoleSelection = (role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(
        selectedRoles.filter((selectedRole) => selectedRole !== role)
      );
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  return (
    <div className={OrgEmployeeCSS.container}>
      <div className={OrgEmployeeCSS.employee}>
        <div className={OrgEmployeeCSS.profile}>
          <img
            className={OrgEmployeeCSS.profile_img}
            src={Account}
            alt="Account"
            width={"40px"}
            height={"42px"}
          />
        </div>
        <div className={OrgEmployeeCSS.info}>
          <div className={OrgEmployeeCSS.name}>Lupastean Sorin</div>
          <div
            className={OrgEmployeeCSS.role}
            onClick={() => setIsModalOpen(true)}
          >
            {selectedRoles.join(", ")}
            <img
              className={OrgEmployeeCSS.arrow_img}
              src={Arrow}
              alt="Arrow"
              height={"23px"}
              width={"26px"}
            />
          </div>
        </div>
      </div>

      <div className={OrgEmployeeCSS.employee_info}>
        <div className={OrgEmployeeCSS.department}>Frontend Department</div>
        <div className={OrgEmployeeCSS.skills}>
          <p>Skills</p>
          <div className={OrgEmployeeCSS.skills_container}>
            <div className={OrgEmployeeCSS.skill_name}>
              <img
                src={SkillsArrow}
                alt="SkillsArrow"
                height={"13px"}
                width={"18px"}
              />
              <p>
                Programming Languages :&nbsp;
                {programmingLanguages.join(", ")}
              </p>
            </div>
            <div className={OrgEmployeeCSS.skill_name}>
              <img
                src={SkillsArrow}
                alt="SkillsArrow"
                height={"13px"}
                width={"18px"}
              />
              <p>
                Libraries Used :&nbsp;
                {librariesUsed.join(", ")}
              </p>
            </div>
            <div className={OrgEmployeeCSS.skill_name}>
              <img
                src={SkillsArrow}
                alt="SkillsArrow"
                height={"13px"}
                width={"18px"}
              />
              <p>
                Frameworks Used :&nbsp;
                {frameworksUsed.join(", ")}
              </p>
            </div>
            <div className={OrgEmployeeCSS.skill_name}>
              <img
                src={SkillsArrow}
                alt="SkillsArrow"
                height={"13px"}
                width={"18px"}
              />
              <p>
                Software Engineering Skills :&nbsp;
                {softwareEngineeringSkills.join(", ")}
              </p>
            </div>
          </div>
        </div>

        <div className={OrgEmployeeCSS.email}>
          <img
            className={OrgEmployeeCSS.email_img}
            src={Email2}
            alt="Email"
            width={"16px"}
            height={"13px"}
          />
          <div className={OrgEmployeeCSS.employee_email}>
            lupastean.sorin@student.usv.ro
          </div>
        </div>
      </div>

      {/* Fereastra Modală */}
      {isModalOpen && (
        <div className={OrgEmployeeCSS.modal}>
          <div className={OrgEmployeeCSS.modal_content}>
            <span
              className={OrgEmployeeCSS.close}
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>
            <div className={OrgEmployeeCSS.select}>Select Roles</div>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="Department Manager"
                  checked={selectedRoles.includes("Department Manager")}
                  onChange={() => handleRoleSelection("Department Manager")}
                />
                <label>Department Manager</label>
              </li>

              <li>
                <input
                  type="checkbox"
                  value="Project Manager"
                  checked={selectedRoles.includes("Project Manager")}
                  onChange={() => handleRoleSelection("Project Manager")}
                />
                <label>Project Manager</label>
              </li>

              <li>
                <input
                  type="checkbox"
                  value="Employee"
                  checked={selectedRoles.includes("Employee")}
                  onChange={() => handleRoleSelection("Employee")}
                />
                <label>Employee</label>
              </li>

              <li>
                <input
                  type="checkbox"
                  value="Organization Admin"
                  checked={selectedRoles.includes("Organization Admin")}
                  onChange={() => handleRoleSelection("Organization Admin")}
                />
                <label>Organization Admin</label>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrgEmployee;
