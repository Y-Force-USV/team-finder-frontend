// CreateAccount.js
import React, { useState } from "react";
import OrganizationAccountCSS from "./OrganizationAccount.module.css";
import Logo from "../../assets/Logo.svg";
import Illustration from "../../assets/illustration-admin.svg";
import Account from "../../assets/account.svg";
import Email from "../../assets/email.svg";
import Organization from "../../assets/organization.svg";
import Password from "../../assets/password.svg";
import Location from "../../assets/location.svg";
import { Link } from "react-router-dom";

function OrganizationAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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

          <div className={OrganizationAccountCSS.signup_inputs}>
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Account}
                alt="Account"
                className={OrganizationAccountCSS.input_logo}
              />
              <input type="text" placeholder="Name" required />
            </div>
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Email}
                alt="Email"
                className={OrganizationAccountCSS.input_logo}
              />
              <input type="email" placeholder="Email" required />
            </div>
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Password}
                alt="Password"
                className={OrganizationAccountCSS.input_logo}
              />
              <input type="password" placeholder="Password" required />
            </div>
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Organization}
                alt="Organization Name"
                className={OrganizationAccountCSS.input_logo}
              />
              <input type="text" placeholder="Organization Name" required />
            </div>
            <div className={OrganizationAccountCSS.container_input}>
              <img
                src={Location}
                alt="Headquarter Address"
                className={OrganizationAccountCSS.input_logo}
              />
              <input type="text" placeholder="Headquarter Address" required />
            </div>
          </div>
          <Link
            to="/dashboard-admin"
            className={OrganizationAccountCSS.signup_btn_link}
          >
            <button className={OrganizationAccountCSS.signup_btn}>
              SIGN UP
            </button>
          </Link>
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
        <div className={OrganizationAccountCSS.illustration}>
          <img src={Illustration} />
        </div>
      </div>
    </div>
  );
}

export default OrganizationAccount;
