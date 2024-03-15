// import React from "react";
import React, { useState } from "react";
import ModalCSS from "./Modal.module.css";
import Arrow from "../../assets/arrow.svg";
const Modal = ({ isOpen, closeModal, content, onSubmit }) => {
  const [arrowRotated, setArrowRotated] = useState(false);
  const handleSubmit = () => {
    onSubmit();
    closeModal();
  };
  const handleArrowClick = () => {
    setArrowRotated(!arrowRotated);
  };

  const handleDepartmentNameChange = (event) => {
    setDepartmentName(event.target.value);
  };

  const handleDepartmentManagerChange = (event) => {
    setDepartmentManager(event.target.value);
  };
  const handleCloseClick = () => {
    closeModal();
  };

  return (
    isOpen && (
      <div className={ModalCSS.modal}>
        <div className={ModalCSS.content}>
          <div className={ModalCSS.add}>
            <div className={ModalCSS.add_name}>
              <input
                className={ModalCSS.name_input}
                type="text"
                placeholder=" Add department name..."
              ></input>
            </div>
            <div className={ModalCSS.manager}>
              <p>Add your Department Manager</p>
              <img
                className={ModalCSS.arrow}
                src={Arrow}
                style={{ transform: arrowRotated ? "rotate(180deg)" : "none" }}
                onClick={handleArrowClick}
              ></img>
            </div>
          </div>
        </div>
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
