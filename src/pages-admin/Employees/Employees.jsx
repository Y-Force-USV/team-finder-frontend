import React from "react";
import EmployeesCSS from "./Employees.module.css";
import Account from "../../assets/account.svg";
import Email from "../../assets/email.svg";
import Filter from "../../assets/filter.svg";
import MoreInformation from "../../assets/more-information.svg";
function Employees() {
  return (
    <div className={EmployeesCSS.employees_container}>
      <div className={EmployeesCSS.buttons}>
        <div className={EmployeesCSS.left_buttons}>
          <img
            className={EmployeesCSS.filter_img}
            src={Filter}
            alt="Filter"
            width={"16px"}
            height={"16px"}
          ></img>
          <button className={EmployeesCSS.filter_btn}> Filter</button>
        </div>
        <div className={EmployeesCSS.right_buttons}>
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
      <div className={EmployeesCSS.employee_card}>
        <div className={EmployeesCSS.top}>
          <div className={EmployeesCSS.profile}>
            <img
              className={EmployeesCSS.profile_img}
              src={Account}
              alt="Profile"
              width={"40px"}
              height={"42px"}
            />
          </div>
          <div>
            <img
              className={EmployeesCSS.information_img}
              src={MoreInformation}
              alt="Information"
            />
          </div>
        </div>

        <div className={EmployeesCSS.info}>
          <div className={EmployeesCSS.name}>Lupastean Sorin</div>
          <div className={EmployeesCSS.role}> Project Manager</div>
        </div>
        <div>
          <div className={EmployeesCSS.info_card}>
            <div className={EmployeesCSS.card_text}>
              <div className={EmployeesCSS.department}>Department</div>
              <div className={EmployeesCSS.department_name}>Design</div>
            </div>

            <div className={EmployeesCSS.email}>
              <img
                className={EmployeesCSS.email_img}
                src={Email}
                alt="Email"
                width={"12px"}
                height={"9px"}
              ></img>
              <div className={EmployeesCSS.employee_email}>
                sorin.lupastean@student.usv.ro
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Employees;
