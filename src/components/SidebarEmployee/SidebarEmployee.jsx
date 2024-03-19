import React from "react";
import SidebarEmployeeCSS from "./SidebarEmployee.module.css";
import Logo from "../../assets/Logo.svg";
import Dashboard from "../../assets/dashboard.svg";
import Person from "../../assets/Person.svg";
import Projects from "../../assets/Projects.svg";
import Settings from "../../assets/settings.svg";
import Logout from "../../assets/logout.svg";
import { Link } from "react-router-dom";

function SidebarEmployee() {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "Default User";
  const userRole = localStorage.getItem("userRole") || "Employee";

  const clearLocalStorageAndLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className={SidebarEmployeeCSS.sidebar_container}>
      <div className={SidebarEmployeeCSS.sidebar_cover}>
        <div className={SidebarEmployeeCSS.sidebar_logo}>
          <img src={Logo} alt="Logo" width={"160px"} height="50px" />
        </div>

        <div className={SidebarEmployeeCSS.sidebar_profile}>
          <img src={Person} alt={Person} width={"50px"} height="50px" />
        </div>

        <div className={SidebarEmployeeCSS.text}>
          <div className={SidebarEmployeeCSS.name}>{userName}</div>
          <div className={SidebarEmployeeCSS.role}>{userRole}</div>
        </div>

        <div className={SidebarEmployeeCSS.buttons}>
          <div className={SidebarEmployeeCSS.main_buttons}>
            <Link
              to="/dashboard-employee"
              className={SidebarEmployeeCSS.link_page}
            >
              <button className={SidebarEmployeeCSS.link_btn}>
                <img
                  src={Dashboard}
                  alt="Dashboard"
                  className={SidebarEmployeeCSS.icon}
                  width={"20px"}
                  height={"20px"}
                />
                Dashboard
              </button>
            </Link>

            <Link to="/profile" className={SidebarEmployeeCSS.link_page}>
              <button>
                <img
                  src={Person}
                  alt="Profile"
                  className={SidebarEmployeeCSS.icon}
                  width={"20px"}
                  height={"20px"}
                />
                Profile
              </button>
            </Link>

            <Link to="/projects" className={SidebarEmployeeCSS.link_page}>
              <button>
                <img
                  src={Projects}
                  alt="Projects"
                  className={SidebarEmployeeCSS.icon}
                  width={"20px"}
                  height={"20px"}
                />
                Projects
              </button>
            </Link>
          </div>

          <div className={SidebarEmployeeCSS.footer_buttons}>
            <button>
              <img
                src={Settings}
                alt="Settings"
                className={SidebarEmployeeCSS.icon}
                width={"20px"}
                height={"20px"}
              />
              Settings
            </button>

            <Link to="/login" className={SidebarEmployeeCSS.logout_link}>
              <button onClick={clearLocalStorageAndLogout}>
                <img
                  src={Logout}
                  alt="Logout"
                  className={SidebarEmployeeCSS.icon}
                  width={"20px"}
                  height={"20px"}
                />
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarEmployee;
