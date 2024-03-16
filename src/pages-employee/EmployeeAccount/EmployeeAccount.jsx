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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password) {
      setError("Please fill in all fields!");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      const url = "ENDPOINT";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      // const result = await response.json();
      // if (!response.ok) {
      //   throw new Error(`Error:`);
      // }

      navigate("/dashboard-employee");
    } catch (error) {
      alert(error.message);
    }
  };

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

          <form
            className={EmployeeAccountCSS.signup_inputs}
            onSubmit={handleSubmit}
          >
            {error && <p className="error-message">{error}</p>}
            <div className={EmployeeAccountCSS.container_input}>
              <img
                src={Person}
                alt="Name"
                className={EmployeeAccountCSS.input_logo}
              />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className={EmployeeAccountCSS.container_input}>
              <img
                src={Email}
                alt="Email"
                className={EmployeeAccountCSS.input_logo}
              ></img>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={EmployeeAccountCSS.container_input}>
              <img
                src={Password}
                alt="Password"
                className={EmployeeAccountCSS.input_logo}
              ></img>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={EmployeeAccountCSS.signup_btn_link}>
              <button className={EmployeeAccountCSS.signup_btn}>SIGN UP</button>
            </div>
          </form>
          <div className={EmployeeAccountCSS.signin}>
            <p className={EmployeeAccountCSS.signin_text}>
              Already have an account?{" "}
              <Link
                className={EmployeeAccountCSS.signin_link}
                to="/signin-employee"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className={EmployeeAccountCSS.illustration}>
          <img src={Illustration} />
        </div>
      </div>
    </div>
  );
}

export default EmployeeAccount;
