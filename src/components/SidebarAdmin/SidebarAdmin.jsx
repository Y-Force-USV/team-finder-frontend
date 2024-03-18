import React from "react";
import SidebarAdminCSS from "./SidebarAdmin.module.css";
import Logo from "../../assets/Logo.svg";
import Account from "../../assets/account.svg";
import Departments from "../../assets/departments.svg";
import Logout from "../../assets/logout.svg";
import Office from "../../assets/office.svg";
import Settings from "../../assets/settings.svg";
import Dashboard from "../../assets/dashboard.svg";
import { Link, useNavigate } from "react-router-dom";

function SidebarAdmin() {
  const navigate = useNavigate();

  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/login");
  };
  const organizationName =
    localStorage.getItem("organizationName") || "Default Organization";
  const organizationAdmin =
    localStorage.getItem("organizationAdmin") || "Default Admin";
  return (
    <div className={SidebarAdminCSS.sidebar_cover}>
      <div className={SidebarAdminCSS.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={SidebarAdminCSS.profile}>
        <img src={Office} alt="Office" width={"30px"} height={"30px"} />
      </div>
      <div className={SidebarAdminCSS.text}>
        <div className={SidebarAdminCSS.organization_name}>
          {organizationName}
        </div>
        <div className={SidebarAdminCSS.organization_admin}>
          {organizationAdmin}
        </div>
      </div>
      <div className={SidebarAdminCSS.buttons}>
        <div className={SidebarAdminCSS.main_buttons}>
          <Link to="/dashboard-admin" className={SidebarAdminCSS.link_page}>
            <button className={SidebarAdminCSS.link_btn}>
              <img
                src={Dashboard}
                alt="Dashboard"
                className={SidebarAdminCSS.page_icon}
                width={"20px"}
                height={"20px"}
              />
              Dashboard
            </button>
          </Link>
          <Link to="/employees" className={SidebarAdminCSS.link_page}>
            <button className={SidebarAdminCSS.link_btn}>
              <img
                src={Account}
                alt="Account"
                width={"20px"}
                height={"20px"}
                className={SidebarAdminCSS.page_icon}
              />
              Employees
            </button>
          </Link>
          <Link to="/departments" className={SidebarAdminCSS.link_page}>
            <button className={SidebarAdminCSS.link_btn}>
              <img
                src={Departments}
                alt="Departments"
                width={"20px"}
                height={"20px"}
                className={SidebarAdminCSS.page_icon}
              />
              Departments
            </button>
          </Link>
        </div>
        <div className={SidebarAdminCSS.footer_buttons}>
          <button className={SidebarAdminCSS.settings}>
            <img
              src={Settings}
              alt="Settings"
              width={"20px"}
              height={"20px"}
              className={SidebarAdminCSS.page_icon}
            />
            Settings
          </button>
          <div className={SidebarAdminCSS.logout_link}>
            <button
              className={SidebarAdminCSS.logout}
              onClick={clearLocalStorage}
            >
              <img
                src={Logout}
                alt="Logout"
                width={"20px"}
                height={"20px"}
                className={SidebarAdminCSS.page_icon}
              />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;
