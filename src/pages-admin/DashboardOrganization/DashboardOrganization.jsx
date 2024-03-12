import React from "react";
import DashboardOrganizationCSS from "./DashboardOrganization.module.css";
import Dashil from "../../assets/dashil.svg";
function DashboardOrganization() {
  return (
    <div className={DashboardOrganizationCSS.dashboard_container}>
      <div className={DashboardOrganizationCSS.message}>
        <p>Welcome to Team Finder!</p>
      </div>
      <div className={DashboardOrganizationCSS.illustration}>
        <img src={Dashil} alt="Dashboard"></img>
      </div>
    </div>
  );
}
export default DashboardOrganization;
