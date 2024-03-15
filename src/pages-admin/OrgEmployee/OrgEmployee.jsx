import React from "react";
import OrgEmployeeCSS from "./OrgEmployee.module.css";
import Account from "../../assets/account.svg";
import Email2 from "../../assets/email2.svg";
function OrgEmployee() {
  return (
    <div className={OrgEmployeeCSS.container}>
      <div className={OrgEmployeeCSS.employee}>
        <div className={OrgEmployeeCSS.profile}>
          <img
            className={OrgEmployeeCSS.profile_img}
            src={Account}
            alt="Account"
            width={"40px"}
            height={"42px"}
          />
        </div>
        <div className={OrgEmployeeCSS.info}>
          <div className={OrgEmployeeCSS.name}>Lupastean Sorin</div>
          <div className={OrgEmployeeCSS.role}>Employee</div>
        </div>
      </div>
      <div className={OrgEmployeeCSS.employee_info}>
        <div className={OrgEmployeeCSS.department}>Frontend Department</div>
        <div className={OrgEmployeeCSS.skills}>Skills</div>

        <div className={OrgEmployeeCSS.email}>
          <img
            className={OrgEmployeeCSS.email_img}
            src={Email2}
            alt="Email"
            width={"16px"}
            height={"13px"}
          ></img>
          <div className={OrgEmployeeCSS.employee_email}>
            lupastean.sorin@student.usv.ro
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrgEmployee;
