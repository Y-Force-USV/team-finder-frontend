import React, { useState } from "react";
import ProfileCSS from "./Profile.module.css";
import Account from "../../assets/account.svg";
import Arrow from "../../assets/arrow.svg";
import Email from "../../assets/email.svg";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showSubOptions, setShowSubOptions] = useState(false);
  const [selectedSubOption, setSelectedSubOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModalOption, setSelectedModalOption] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("");
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState("");
  const [showAllSelections, setShowAllSelections] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
    setShowSubOptions(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowSubOptions(true);
    setSubOptions(getSubOptionsForOption(option));

    setSelectedSubOption("");
    setSelectedSkillLevel("");
    setSelectedExperienceLevel("");
  };

  const handleSubOptionClick = (suboption) => {
    setSelectedSubOption(suboption);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubOptionSelection = (selectedOption) => {
    setSelectedModalOption(selectedOption);
  };

  const handleSkillLevelSelection = (level) => {
    setSelectedSkillLevel(level);
  };

  const handleExperienceLevelSelection = (level) => {
    setSelectedExperienceLevel(level);
    closeModal();
    setShowAllSelections(true);
  };

  const getSubOptionsForOption = (option) => {
    return subOptionsMap[option] || [];
  };

  const subOptionsMap = {
    "Programming Language": ["C", "C++", "Java", "Python"],
    Libraries: ["React", "Vue", "Angular", "jQuery", "jQuery", "Socket.IO"],
    Frameworks: [
      "Express.js",
      "Django",
      "Ruby on Rails",
      "Spring",
      "AS.NET Core",
    ],
    "Software Engineering": [
      "Web Development",
      "Project Management",
      "Problem Solving",
    ],
  };

  return (
    <div className={ProfileCSS.profileContainer}>
      <div className={ProfileCSS.container}>
        <p className={ProfileCSS.message}>Hello, Burțilă Daniel!</p>
      </div>
      <div className={ProfileCSS.card}>
        <div className={ProfileCSS.iconContainer}>
          <img src={Account} alt="Account" className={ProfileCSS.icon} />
          <p className={ProfileCSS.employee}>Burțilă Daniel</p>
        </div>

        <div className={ProfileCSS.second_card}>
          <div className={ProfileCSS.email_container}>
            <img src={Email} alt="Email" className={ProfileCSS.email_icon} />
            <p className={ProfileCSS.email_employee}>
              daniel.burtila@student.usv.ro
            </p>
          </div>

          <p className={ProfileCSS.function}>Employee</p>

          <div className={ProfileCSS.skill_container}>
            <p className={ProfileCSS.skill} onClick={toggleOptions}>
              Skill
              <img
                src={Arrow}
                alt="Arrow"
                className={ProfileCSS.arrow_icon}
                style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
              />
            </p>
            {isOpen && (
              <ul className={ProfileCSS.skill_options}>
                {Object.keys(subOptionsMap).map((option) => (
                  <li key={option} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}

            {showSubOptions && (
              <div className={ProfileCSS.subOptions}>
                <ul>
                  {subOptions.map((suboption) => (
                    <li
                      key={suboption}
                      onClick={() => handleSubOptionClick(suboption)}
                      className={
                        suboption === selectedSubOption
                          ? ProfileCSS.selected
                          : ""
                      }
                    >
                      {suboption}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedModalOption && (
              <div className={ProfileCSS.selectedOptionContainer}>
                Selected Modal Option: {selectedModalOption}
              </div>
            )}

            {selectedSkillLevel && (
              <div className={ProfileCSS.selectedOptionContainer}>
                Selected Skill Level: {selectedSkillLevel}
              </div>
            )}

            {selectedExperienceLevel && (
              <div className={ProfileCSS.selectedOptionContainer}>
                Selected Experience Level: {selectedExperienceLevel}
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={ProfileCSS.modal}>
          <div className={ProfileCSS.modal_content}>
            <span className={ProfileCSS.close} onClick={closeModal}>
              &times;
            </span>
            <h2 className={ProfileCSS.select_skill}>
              Select the level for your skill:
            </h2>

            <div className={ProfileCSS.skill_level}>
              <button onClick={() => handleSubOptionSelection("1 - Learns")}>
                1 - Learns
              </button>
              <button onClick={() => handleSubOptionSelection("2 - Knows ")}>
                2 - Knows
              </button>
              <button onClick={() => handleSubOptionSelection("3 - Does")}>
                3 - Does
              </button>
              <button onClick={() => handleSubOptionSelection("4 - Helps")}>
                4 - Helps
              </button>
              <button onClick={() => handleSubOptionSelection("5 - Teaches")}>
                5 - Teaches
              </button>
            </div>
            <div className={ProfileCSS.experience}>
              <h2 className={ProfileCSS.select_experience}>
                Select the level for your experience:
              </h2>
              <div className={ProfileCSS.skill_experience}>
                <button onClick={() => handleSubOptionSelection("0-6 months")}>
                  0-6 months
                </button>
                <button onClick={() => handleSubOptionSelection("6-12 months")}>
                  6-12 months
                </button>
                <button onClick={() => handleSubOptionSelection("1-2 years")}>
                  1-2 years
                </button>
                <button onClick={() => handleSubOptionSelection("2-4 years")}>
                  2-4 years
                </button>
                <button onClick={() => handleSubOptionSelection("4-7 years")}>
                  4-7 years
                </button>
                <button
                  onClick={() => handleSubOptionSelection(" more than 7 years")}
                >
                  more than 7 years
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={ProfileCSS.selectedOptionContainer}>
        {showAllSelections && (
          <>
            {selectedOption && <p>Selected Option: {selectedOption}</p>}
            {selectedSubOption && <p>Selected Skill: {selectedSubOption}</p>}
            {selectedSkillLevel && (
              <p>Selected Skill Level: {selectedSkillLevel}</p>
            )}
            {selectedExperienceLevel && (
              <p>Selected Experience Level: {selectedExperienceLevel}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
