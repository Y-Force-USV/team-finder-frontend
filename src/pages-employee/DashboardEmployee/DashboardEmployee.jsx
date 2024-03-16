import React from "react";
import DashboardEmployeeCSS from "./DashboardEmployee.module.css";
import DashboardIl2 from "../../assets/dashboardil2.svg";
function DashboardEmployee() {
  return (
    <div className={DashboardEmployeeCSS.dashboard_container}>
      <div className={DashboardEmployeeCSS.message}>
        <p>Welcome to Team Finder!</p>
      </div>
      <div className={DashboardEmployeeCSS.dashboard_image}>
        <img src={DashboardIl2} alt="DashboardIl2"></img>
      </div>
    </div>
  );
}
export default DashboardEmployee;
