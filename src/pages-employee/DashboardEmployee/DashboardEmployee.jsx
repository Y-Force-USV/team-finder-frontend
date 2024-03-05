import React from "react";
import DashboardEmployeeCSS from "./DashboardEmployee.module.css";

function DashboardEmployee() {
  return (
    <div className={DashboardEmployeeCSS.pageContainer}>
      <div className={DashboardEmployeeCSS.dashboardContainer}>
        <p>Welcome to Team Finder!</p>
      </div>
    </div>
  );
}
export default DashboardEmployee;
