// EmployeeAccount.js
import React, { useState } from "react";
import EmployeeAccountCSS from "./EmployeeAccount.module.css";

import Logo from "../../assets/Logo.svg";
import Illustration from "../../assets/illustration-employee.svg";
import Person from "../../assets/Person.svg";
import Email from "../../assets/email.svg";
import Password from "../../assets/password.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EmployeeAccount() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/dashboard");
  };
  const [name, setName] = useState("");
  return (
    <div className={EmployeeAccountCSS.page}>
      <div className={EmployeeAccountCSS.container}>
        <div className={EmployeeAccountCSS.cover}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <div className={EmployeeAccountCSS.logo}>
            <img src={Logo} alt="Logo" width={"160px"} height="50px" />
          </div>
          <h1 className={EmployeeAccountCSS.title}>Create account</h1>
          <div className={EmployeeAccountCSS.signup_inputs}>
            <div className={EmployeeAccountCSS.container_input}>
              <img
                src={Person}
                alt="Name"
                className={EmployeeAccountCSS.input_logo}
              ></img>
              <input type="text" placeholder="Name" required />
            </div>

            <div className={EmployeeAccountCSS.container_input}>
              <img
                src={Email}
                alt="Email"
                className={EmployeeAccountCSS.input_logo}
              ></img>
              <input type="email" placeholder="Email" required />
            </div>

            <div className={EmployeeAccountCSS.container_input}>
              <img
                src={Password}
                alt="Password"
                className={EmployeeAccountCSS.input_logo}
              ></img>
              <input type="password" placeholder="Password" required />
            </div>
          </div>
          <Link
            className={EmployeeAccountCSS.signup_btn_link}
            to="/dashboard-employee"
          >
            <button
              className={EmployeeAccountCSS.signup_btn}
              onClick={handleSignUp}
            >
              SIGN UP
            </button>
          </Link>
          <p className={EmployeeAccountCSS.signup_text}>
            Already have an account?{" "}
            <Link
              className={EmployeeAccountCSS.signup_link}
              to="/signin-employee"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div className={EmployeeAccountCSS.illustration}>
          <img src={Illustration} />
        </div>
      </div>
    </div>
  );
}

export default EmployeeAccount;
