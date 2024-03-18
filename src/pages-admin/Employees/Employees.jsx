import React from "react";
import { Link } from "react-router-dom";
import EmployeesCSS from "./Employees.module.css";
import Account from "../../assets/account.svg";
import Email from "../../assets/email.svg";
import Filter from "../../assets/filter.svg";
import MoreInformation from "../../assets/more-information.svg";
import Search from "../../assets/search.svg";

function Employees() {
  const employees = [
    {
      name: "Lupastean Sorin",
      roles: ["Project Manager", "Designer"],
      email: "sorin.lupastean@student.usv.ro",
      department: "Design",
    },
    {
      name: "Soldan Cristina",
      roles: ["Project Manager"],
      email: "cristina.soldan1@student.usv.ro",
      department: "Frontend",
    },
    {
      name: "Burlacu Alina",
      roles: ["Employee"],
      email: "alina.burlacu@student.usv.ro",
      department: "Backend",
    },
    {
      name: "Burtila Daniel",
      roles: ["Department Manager"],
      email: "daniel.burtila@student.usv.ro",
      department: "Frontend",
    },
    {
      name: "Birgauan Gavril",
      roles: ["Design"],
      email: "gavril.birgauan@student.usv.ro",
      department: "Employee",
    },
    {
      name: "Cioltan Georgiana",
      roles: ["Employee"],
      email: "georgiana.cioltan@student.usv.ro",
      department: "Employee",
    },
  ];

  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const organizationId =
    userDetails.organizationId || localStorage.getItem("organizationId");

  const generateAndCopyLink = async () => {
    if (!organizationId) {
      console.error("No organization ID found");
      return;
    }

    const link = `https://atc-2024-y-force-fe-linux-web-app.azurewebsites.net//register/${organizationId}`;
    await navigator.clipboard.writeText(link);
    alert("Invitation URL copied to clipboard!");
  };

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
          <div className={EmployeesCSS.search_employee}>
            <input
              type="text"
              name="searchTerm"
              placeholder="Search..."
              autoComplete="off"
              className={EmployeesCSS.search_input}
            />
            <img
              className={EmployeesCSS.search_img}
              src={Search}
              width={"15px"}
              height={"15px"}
            ></img>
          </div>
          <button
            className={EmployeesCSS.add_btn}
            onClick={generateAndCopyLink}
          >
            COPY REGISTER URL
          </button>
        </div>
      </div>
      <div className={EmployeesCSS.cards}>
        <div className={EmployeesCSS.top_cards}>
          {employees.map((employee, index) => (
            <div key={index} className={EmployeesCSS.employee_card}>
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
                  <Link to="/orgemployee">
                    <img
                      className={EmployeesCSS.information_img}
                      src={MoreInformation}
                      alt="Information"
                    />
                  </Link>
                </div>
              </div>

              <div className={EmployeesCSS.info}>
                <div className={EmployeesCSS.name}>{employee.name}</div>
                <div className={EmployeesCSS.role}>
                  {employee.roles.join(", ")}
                </div>
              </div>
              <div className={EmployeesCSS.info_card}>
                <div className={EmployeesCSS.card_text}>
                  <div className={EmployeesCSS.department}>Department</div>
                  <div className={EmployeesCSS.department_name}>
                    {employee.department}
                  </div>
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
                    {employee.email}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employees;
