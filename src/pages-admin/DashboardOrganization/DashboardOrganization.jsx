import React from "react";
import DashboardOrganizationCSS from "./DashboardOrganization.module.css";
function DashboardOrganization() {
  return (
    <div className={DashboardOrganizationCSS.dashboard_container}>
      <p className={DashboardOrganizationCSS.message}>
        Welcome to Team Finder!
      </p>
    </div>
  );
}
export default DashboardOrganization;
