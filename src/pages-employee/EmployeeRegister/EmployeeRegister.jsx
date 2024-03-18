// EmployeeRegister.js
import React, { useState } from "react";
import EmployeeRegisterCSS from "./EmployeeRegister.module.css";

import Logo from "../../assets/Logo.svg";
import Illustration from "../../assets/illustration-employee.svg";
import Person from "../../assets/Person.svg";
import Email from "../../assets/email.svg";
import Password from "../../assets/password.svg";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../common/constants";

function EmployeeRegister() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { organizationId } = useParams();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const url = `${BACKEND_URL}/auth/register/${organizationId}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.accesToken) {
        navigate("/dashboard-admin");
      } else {
        console.error("Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  return (
    <div className={EmployeeRegisterCSS.page}>
      <div className={EmployeeRegisterCSS.container}>
        <div className={EmployeeRegisterCSS.cover}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <div className={EmployeeRegisterCSS.logo}>
            <img src={Logo} alt="Logo" width={"160px"} height="50px" />
          </div>
          <h1 className={EmployeeRegisterCSS.title}>Create account</h1>
          <div className={EmployeeRegisterCSS.signup_inputs}>
            <div className={EmployeeRegisterCSS.container_input}>
              <img
                src={Person}
                alt="Name"
                className={EmployeeRegisterCSS.input_logo}
              ></img>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={EmployeeRegisterCSS.container_input}>
              <img
                src={Email}
                alt="Email"
                className={EmployeeRegisterCSS.input_logo}
              ></img>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={EmployeeRegisterCSS.container_input}>
              <img
                src={Password}
                alt="Password"
                className={EmployeeRegisterCSS.input_logo}
              ></img>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Link
            className={EmployeeRegisterCSS.signup_btn_link}
            to="/dashboard-employee"
          >
            <button
              className={EmployeeRegisterCSS.signup_btn}
              onClick={handleSignUp}
            >
              REGISTER
            </button>
          </Link>
          <p className={EmployeeRegisterCSS.signup_text}>
            Already have an account?{" "}
            <Link className={EmployeeRegisterCSS.signup_link} to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className={EmployeeRegisterCSS.illustration}>
          <img src={Illustration} />
        </div>
      </div>
    </div>
  );
}

export default EmployeeRegister;
