import React from "react";
import HomeCSS from "./Home.module.css";
import Logo from "../assets/Logo.svg";
import Organization from "../assets/organization.svg";
import Account from "../assets/account.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className={HomeCSS.page}>
      <div className={HomeCSS.cover}>
        <div className={HomeCSS.logo}>
          <img src={Logo} alt="Logo" width={"160px"} height="50px" />
        </div>

        <div className={HomeCSS.quote}>
          TEAMS THAT WORK TOGETHER,
          <br /> WIN TOGETHER
        </div>

        <div className={HomeCSS.account_type}>
          <Link to="/signup-admin" className={HomeCSS.square}>
            <img
              src={Organization}
              alt="Organization"
              className={HomeCSS.icons}
            ></img>
            <p>Admin</p>
          </Link>

          <Link to="/signup-employee" className={HomeCSS.square}>
            <img src={Account} alt="Account" className={HomeCSS.icons} />
            <p>Employees</p>
          </Link>
        </div>
        <p className={HomeCSS.message}>Your journey starts with a click!</p>
      </div>
    </div>
  );
}

export default Home;
