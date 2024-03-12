import React from "react";
import ModalCSS from "./Modal.module.css";
const Modal = ({ isOpen, closeModal, content, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    closeModal();
  };
  return (
    isOpen && (
      <div className={ModalCSS.modal}>
        <div className={ModalCSS.content}>
          <div className={ModalCSS.add_name}>
            <input
              className={ModalCSS.name_input}
              type="text"
              placeholder=" Add department name..."
            ></input>
          </div>
        </div>
        <div className={ModalCSS.buttons}>
          <button onClick={handleSubmit} className={ModalCSS.submit_btn}>
            Submit
          </button>
          <button onClick={closeModal} className={ModalCSS.close_btn}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
