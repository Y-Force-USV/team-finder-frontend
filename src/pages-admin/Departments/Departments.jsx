import React, { useState } from "react";
import DepartmentsCSS from "./Departments.module.css";
import Arrow from "../../assets/arrow.svg";
import Search from "../../assets/search.svg";
import Delete from "../../assets/delete.svg";
import Modal from "../../components/Modal/Modal";

function Departments() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [departments, setDepartments] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addDepartment = (departmentName, departmentManager) => {
    if (!departmentManager || !departmentName) return;
    const newDepartment = {
      name: departmentName,
      manager: departmentManager,
    };
    setDepartments([...departments, newDepartment]);
    closeModal();
  };

  return (
    <div className={DepartmentsCSS.departments_container}>
      {modalIsOpen && <div className={DepartmentsCSS.modal_background} />}
      <div className={DepartmentsCSS.message}>
        <p>Here are your departments!</p>
      </div>
      <div className={DepartmentsCSS.right_buttons}>
        <div className={DepartmentsCSS.search_department}>
          <input
            type="text"
            name="searchTerm"
            placeholder="Search..."
            autoComplete="off"
            className={DepartmentsCSS.search_input}
          />
          <img
            className={DepartmentsCSS.search_img}
            src={Search}
            alt="Search"
          />
        </div>
        <button
          className={`${DepartmentsCSS.add_btn} ${
            modalIsOpen ? DepartmentsCSS.modalOpen : ""
          }`}
          onClick={openModal}
        >
          + ADD NEW
        </button>
        {modalIsOpen && (
          <div className={DepartmentsCSS.modal_container}>
            <Modal
              isOpen={modalIsOpen}
              closeModal={closeModal}
              onSubmit={addDepartment}
            />
          </div>
        )}
      </div>
      <table className={DepartmentsCSS.table}>
        <thead>
          <tr className={DepartmentsCSS.header}>
            <th></th>
            <th>Department Name</th>
            <th>Department Manager</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={index} className={DepartmentsCSS.departments}>
              <td>Department</td>
              <td>{department.name}</td>
              <td>{department.manager}</td>
              <td>
                <img
                  src={Delete}
                  alt="Delete"
                  className={DepartmentsCSS.delete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Departments;
