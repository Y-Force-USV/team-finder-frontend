import React from "react";
import DepartmentsCSS from "./Departments.module.css";

function Departments() {
  return (
    <div className={DepartmentsCSS.departments_container}>
      <p className={DepartmentsCSS.message}>Here are your Departments</p>
    </div>
  );
}
export default Departments;
