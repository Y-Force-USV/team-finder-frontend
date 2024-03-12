// CreateAccount.js
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import OrganizationAccountCSS from "./OrganizationAccount.module.css";
import Logo from "../../assets/Logo.svg";
import Illustration from "../../assets/illustration-admin.svg";
import Account from "../../assets/account.svg";
import Email from "../../assets/email.svg";
import Organization from "../../assets/organization.svg";
import Password from "../../assets/password.svg";
import Location from "../../assets/location.svg";
import DashboardOrganization from "../DashboardOrganization/DashboardOrganization";
import { Link } from "react-router-dom";

function OrganizationAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgname, setOrgName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password || !orgname || !address) {
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
        body: JSON.stringify({ name, email, password, orgname, address }),
      });

      // const result = await response.json();
      // if (!response.ok) {
      //   throw new Error(`Error:`);
      // }

      navigate("/dashboard-admin");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={OrganizationAccountCSS.page}>
      <div className={OrganizationAccountCSS.container}>
        <div className={OrganizationAccountCSS.cover}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>

          <div className={OrganizationAccountCSS.logo}>
            <img src={Logo} alt="Logo" width={"160px"} height="50px" />
          </div>
          <h1 className={OrganizationAccountCSS.title}>Create Account</h1>

          <form
            className={OrganizationAccountCSS.signup_inputs}
            onSubmit={handleSubmit}
          >
            {error && <p className="error-message">{error}</p>}
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Account}
                alt="Account"
                className={OrganizationAccountCSS.input_logo}
              />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Email}
                alt="Email"
                className={OrganizationAccountCSS.input_logo}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Password}
                alt="Password"
                className={OrganizationAccountCSS.input_logo}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Organization}
                alt="Organization Name"
                className={OrganizationAccountCSS.input_logo}
              />
              <input
                type="text"
                placeholder="Organization Name"
                value={orgname}
                onChange={(e) => setOrgName(e.target.value)}
                required
              />
            </div>
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Location}
                alt="Headquarter Address"
                className={OrganizationAccountCSS.input_logo}
              />
              <input
                type="text"
                placeholder="Headquarter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className={OrganizationAccountCSS.signup_btn_link}>
              <button className={OrganizationAccountCSS.signup_btn}>
                SIGN UP
              </button>
            </div>
          </form>
          <div className={OrganizationAccountCSS.signin}>
            <p className={OrganizationAccountCSS.signin_text}>
              Already have an account?
              <Link
                className={OrganizationAccountCSS.signin_link}
                to="/signin-admin"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className={OrganizationAccountCSS.illustration}>
          <img src={Illustration} />
        </div>
      </div>
    </div>
  );
}

export default OrganizationAccount;
