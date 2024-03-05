import React from "react";
import EmployeesCSS from "./Employees.module.css";
function Employees() {
  return (
    <div className={EmployeesCSS.employees_container}>
      <div className={EmployeesCSS.message}>
        <p>These are the heroes of your Organization!</p>
      </div>

      <div className={EmployeesCSS.buttons}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search..."
          autoComplete="off"
          className={EmployeesCSS.search_form}
        />
        <button className={EmployeesCSS.add_btn}>+ ADD NEW</button>
      </div>
    </div>
  );
}
export default Employees;
