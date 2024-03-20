import React, { useState, useRef } from "react";
import ModalEmployeesCSS from "./ModalEmployees.module.css";
import Arrow from "../../assets/arrow.svg";

const ModalEmployees = ({ isOpen, closeModal, onSubmit }) => {
  const [arrowRotated, setArrowRotated] = useState(false);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState("");

  const employees = [{ name: "Soldan Cristina" }, { name: "Lupastean Sorin" }];

  const handleSubmit = () => {
    if (selectedEmployeeName) {
      const selectedEmployeeName = document.querySelector(
        `.${ModalEmployeesCSS.name_input}`
      ).value;
      onSubmit(selectedEmployeeName, selectedEmployeeName);
      closeModal();
    }
  };

  const handleArrowClick = () => {
    setArrowRotated(!arrowRotated);
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployeeName(employee.name);
  };

  const handleCloseClick = () => {
    closeModal();
  };

  return (
    isOpen && (
      <div className={ModalEmployeesCSS.ModalEmployees}>
        <div className={ModalEmployeesCSS.add_name}>
          <input
            className={ModalEmployeesCSS.name_input}
            type="text"
            placeholder=" Add a new project..."
          />
        </div>
        <div className={ModalEmployeesCSS.employee}>
          <p>{selectedEmployeeName ? selectedEmployeeName : "Add employees"}</p>
          <img
            className={ModalEmployeesCSS.arrow}
            src={Arrow}
            style={{ transform: arrowRotated ? "rotate(180deg)" : "none" }}
            onClick={handleArrowClick}
          />
        </div>

        {arrowRotated && (
          <table className={ModalEmployeesCSS.employee_table}>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} className={ModalEmployeesCSS.employee}>
                  <td>{employee.name}</td>
                  <td>
                    <button
                      onClick={() => handleEmployeeSelect(employee)}
                      className={ModalEmployeesCSS.add_button}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className={ModalEmployeesCSS.buttons}>
          <button
            onClick={handleSubmit}
            className={ModalEmployeesCSS.submit_btn}
          >
            Submit
          </button>
          <button
            onClick={handleCloseClick}
            className={ModalEmployeesCSS.close_btn}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default ModalEmployees;
