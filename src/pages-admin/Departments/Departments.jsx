// import React from "react";
import React, { useState } from "react";
import DepartmentsCSS from "./Departments.module.css";
import Search from "../../assets/search.svg";
import Delete from "../../assets/delete.svg";
import Modal from "../../components/Modal/Modal";

function Departments() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={DepartmentsCSS.departments_container}>
      {modalIsOpen && (
        <div
          className={`${DepartmentsCSS.departments_backdrop} ${DepartmentsCSS.active}`}
        />
      )}
      <div className={DepartmentsCSS.message}>
        <p> Here are your departments!</p>
      </div>
      <div className={DepartmentsCSS.right_buttons}>
        <div className={DepartmentsCSS.search_department}>
          <input
            type="text"
            name="searchTerm"
            placeholder="  Search..."
            autoComplete="off"
            className={DepartmentsCSS.search_input}
          />
          <img
            className={DepartmentsCSS.search_img}
            src={Search}
            width={"15px"}
            height={"15px"}
          ></img>
        </div>
        <button
          className={`${DepartmentsCSS.add_btn} ${
            modalIsOpen ? DepartmentsCSS.modalOpen : ""
          }`}
          onClick={openModal}
        >
          + ADD NEW{" "}
        </button>
        {modalIsOpen && (
          <div className={DepartmentsCSS.modal_container}>
            <Modal isOpen={modalIsOpen} closeModal={closeModal} />
          </div>
        )}
      </div>
      <table
        className={`${DepartmentsCSS.table} ${
          modalIsOpen ? DepartmentsCSS.modalOpen : ""
        }`}
      >
        <thead>
          <tr className={DepartmentsCSS.header}>
            <th></th>
            <th>Department Name</th>
            <th>Department Manager</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className={DepartmentsCSS.departments}>
            <td>Department</td>
            <td>Frontend</td>
            <td>Soldan Cristina</td>
            <img
              src={Delete}
              alt="Delete"
              className={DepartmentsCSS.delete}
            ></img>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Departments;
