// SignInEmployee.jsx
import React, { useState } from "react";
import SignInEmployeeCSS from "./SignInEmployee.module.css";
import Logo from "../../assets/Logo.svg";
import Illustration from "../../assets/illustration-employee.svg";
import Email from "../../assets/email.svg";
import { Link, useNavigate } from "react-router-dom";
import Password from "../../assets/password.svg";
///import { useNavigate } from "react-router-dom";

function SignInEmployee({ setSidebarActiveButton }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  // const handleSignIn = () => {
  //   navigate("/dashboard");
  //   setSidebarActiveButton("/dashboard");
  // };
  return (
    <div className={SignInEmployeeCSS.page}>
      <div className={SignInEmployeeCSS.container}>
        <div className={SignInEmployeeCSS.cover}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>

          <div className={SignInEmployeeCSS.logo}>
            <img src={Logo} alt="Logo" width={"160px"} height="50px" />
          </div>

          <h1 className={SignInEmployeeCSS.title}>Login to Your Account</h1>

          <div className={SignInEmployeeCSS.signin_inputs}>
            <div className={SignInEmployeeCSS.container_input}>
              <img
                src={Email}
                alt="Email"
                className={SignInEmployeeCSS.input_logo}
              ></img>
              <input type="email" placeholder="Email" required />
            </div>

            <div className={SignInEmployeeCSS.container_input}>
              <img
                src={Password}
                alt="Password"
                className={SignInEmployeeCSS.input_logo}
              ></img>
              <input type="password" placeholder="Password" required />
            </div>
          </div>
          <Link
            to="/dashboard-employee"
            className={SignInEmployeeCSS.signin_btn_link}
          >
            <button className={SignInEmployeeCSS.signin_btn}>SIGN IN</button>
          </Link>
          <p className={SignInEmployeeCSS.signin_text}>
            You don't have an account?
            <Link
              className={SignInEmployeeCSS.signin_link}
              to="/signup-employee"
            >
              {" "}
              Sign up
            </Link>
          </p>
        </div>
        <div className={SignInEmployeeCSS.illustration}>
          <img src={Illustration} />
        </div>
      </div>
    </div>
  );
}

export default SignInEmployee;
