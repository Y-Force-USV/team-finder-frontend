import React from "react";
import HomeCSS from "./Home.module.css";
import Logo from "../assets/Logo.svg";
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
          <Link to="/register" className={HomeCSS.square}>
            <button>REGISTER</button>
          </Link>

          <Link to="/login" className={HomeCSS.square}>
            <button>LOG IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
