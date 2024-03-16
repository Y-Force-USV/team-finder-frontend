import React, { useState } from "react";
import ProfileCSS from "./Profile.module.css";
import Account from "../../assets/account.svg";
import Arrow from "../../assets/arrow.svg";
import Email from "../../assets/email.svg";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showCommonWindow, setShowCommonWindow] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [selectedSubOption, setSelectedSubOption] = useState("");

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowCommonWindow(true);
  };
  const handleLevelSelection = (level) => {
    setSelectedLevel(level);
  };
  const handleSubOptionSelection = (subOption) => {
    setSelectedOption(subOption);
  };

  return (
    <div className={ProfileCSS.profileContainer}>
      <div className={ProfileCSS.container}>
        <p className={ProfileCSS.message}>Hello, Burțilă Daniel!</p>
      </div>
      <div className={ProfileCSS.card}>
        <div className={ProfileCSS.iconContainer}>
          <img src={Account} alt="Account" className={ProfileCSS.icon}></img>
          <p className={ProfileCSS.employee}>Burțilă Daniel</p>
        </div>

        <div className={ProfileCSS.second_card}>
          <div className={ProfileCSS.email_container}>
            <img
              src={Email}
              alt="Email"
              className={ProfileCSS.email_icon}
            ></img>
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
              ></img>
            </p>
            {isOpen && (
              <ul className={ProfileCSS.skill_options}>
                <li onClick={() => handleOptionClick("Programming Language")}>
                  Programming Language
                </li>
                <li onClick={() => handleOptionClick("Libraries")}>
                  Libraries
                </li>
                <li onClick={() => handleOptionClick("Frameworks")}>
                  Frameworks
                </li>
                <li onClick={() => handleOptionClick("Software Engineering")}>
                  Software Engineering
                </li>
              </ul>
            )}

            {showCommonWindow && (
              <div className={ProfileCSS.common_window}>
                <h2 className={ProfileCSS.select_level}>
                  Select the level for your skill:
                </h2>
                <div className={ProfileCSS.levelButtons}>
                  <button onClick={() => handleLevelSelection(1)}>
                    1-Learns
                  </button>
                  <button onClick={() => handleLevelSelection(2)}>
                    2-Knows
                  </button>
                  <button onClick={() => handleLevelSelection(3)}>
                    3-Does
                  </button>
                  <button onClick={() => handleLevelSelection(4)}>
                    4-Helps
                  </button>
                  <button onClick={() => handleLevelSelection(5)}>
                    5-Teaches
                  </button>
                </div>

                <h2 className={ProfileCSS.select_experience}>
                  Select the level for your experience:
                </h2>
                <div className={ProfileCSS.subOptions}>
                  <button
                    onClick={() => handleSubOptionSelection("0-6 months")}
                  >
                    0-6 months
                  </button>
                  <button
                    onClick={() => handleSubOptionSelection("6-12 months")}
                  >
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
                  <button onClick={() => handleSubOptionSelection(">7 years")}>
                    more than 7 years
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
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
                <li onClick={() => handleOptionClick("Programming Language")}>
                  Programming Language
                </li>
                <li onClick={() => handleOptionClick("Libraries")}>
                  Libraries
                </li>
                <li onClick={() => handleOptionClick("Frameworks")}>
                  Frameworks
                </li>
                <li onClick={() => handleOptionClick("Software Engineering")}>
                  Software Engineering
                </li>
              </ul>
            )}
            {showSubOptions && (
              <div className={ProfileCSS.subOptions}>
                <ul>
                  <li onClick={() => handleSubOptionClick("C")}>C</li>
                  <li onClick={() => handleSubOptionClick("C++")}>C++</li>
                  <li onClick={() => handleSubOptionClick("Java")}>Java</li>
                  <li onClick={() => handleSubOptionClick("Python")}>Python</li>
                </ul>
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
            <h2>Select the level for your experience:</h2>
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
      )}
    </div>
  );
}
export default Profile;
