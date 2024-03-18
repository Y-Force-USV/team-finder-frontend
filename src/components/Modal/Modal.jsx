import React, { useState, useRef } from "react";
import ModalCSS from "./Modal.module.css";
import Arrow from "../../assets/arrow.svg";

const Modal = ({ isOpen, closeModal, content, onSubmit }) => {
  const [arrowRotated, setArrowRotated] = useState(false);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState("");
  const modalRef = useRef(null);

  const employees = [
    { name: "Soldan Cristina", role: "Software Engineer" },
    { name: "Lupastean Sorin", role: "Project Manager" },
  ];

  const handleSubmit = () => {
    if (selectedEmployeeName) {
      const departmentName = document.querySelector(
        `.${ModalCSS.name_input}`
      ).value;
      onSubmit(departmentName, selectedEmployeeName);
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
      <div className={ModalCSS.modal}>
        <div className={ModalCSS.add_name}>
          <input
            className={ModalCSS.name_input}
            type="text"
            placeholder=" Add department name..."
          />
        </div>
        <div className={ModalCSS.manager}>
          <p>
            {selectedEmployeeName
              ? selectedEmployeeName
              : "Add your Department Manager"}
          </p>
          <img
            className={ModalCSS.arrow}
            src={Arrow}
            style={{ transform: arrowRotated ? "rotate(180deg)" : "none" }}
            onClick={handleArrowClick}
          />
        </div>

        {arrowRotated && (
          <table className={ModalCSS.employee_table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} className={ModalCSS.employee}>
                  <td>{employee.name}</td>
                  <td>{employee.role}</td>
                  <td>
                    <button
                      onClick={() => handleEmployeeSelect(employee)}
                      className={ModalCSS.add_button}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className={ModalCSS.buttons}>
          <button onClick={handleSubmit} className={ModalCSS.submit_btn}>
            Submit
          </button>
          <button onClick={handleCloseClick} className={ModalCSS.close_btn}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
