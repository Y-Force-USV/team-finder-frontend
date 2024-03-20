import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminRegisterCSS from "./AdminRegister.module.css";
import Logo from "../../assets/Logo.svg";
import Illustration from "../../assets/illustration-admin.svg";
import Account from "../../assets/account.svg";
import Email from "../../assets/email.svg";
import Organization from "../../assets/organization.svg";
import Password from "../../assets/password.svg";
import Location from "../../assets/location.svg";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../common/constants";

function AdminRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password || !orgName || !address) {
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

    const url = `${BACKEND_URL}/auth/register`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          orgName,
          orgAddress: address,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("organizationName", result.organizationName);
        localStorage.setItem("userName", result.userName);
        localStorage.setItem("organizationId", result.organizationId);

        navigate("/dashboard-admin");
      } else {
        if (result.message === "Email already in use") {
          setError(
            "This email is already associated with an account. Please use a different email."
          );
        } else {
          setError(result.message || "Something went wrong");
        }
      }
    } catch (error) {
      setError("Network error or server is unreachable.");
    }
  };

  return (
    <div className={AdminRegisterCSS.page}>
      <div className={AdminRegisterCSS.container}>
        <div className={AdminRegisterCSS.cover}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>

          <div className={AdminRegisterCSS.logo}>
            <img src={Logo} alt="Logo" width={"160px"} height="50px" />
          </div>
          <h1 className={AdminRegisterCSS.title}>Create Account</h1>

          <form
            className={AdminRegisterCSS.signup_inputs}
            onSubmit={handleSubmit}
          >
            {error && <p className="error-message">{error}</p>}
            <div className={AdminRegisterCSS.container_input}>
              <img
                src={Account}
                alt="Account"
                className={AdminRegisterCSS.input_logo}
              />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={AdminRegisterCSS.container_input}>
              <img
                src={Email}
                alt="Email"
                className={AdminRegisterCSS.input_logo}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={AdminRegisterCSS.container_input}>
              <img
                src={Password}
                alt="Password"
                className={AdminRegisterCSS.input_logo}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={AdminRegisterCSS.container_input}>
              <img
                src={Organization}
                alt="Organization Name"
                className={AdminRegisterCSS.input_logo}
              />
              <input
                type="text"
                placeholder="Organization Name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                required
              />
            </div>
            <div className={AdminRegisterCSS.container_input}>
              <img
                src={Location}
                alt="Headquarter Address"
                className={AdminRegisterCSS.input_logo}
              />
              <input
                type="text"
                placeholder="Headquarter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className={AdminRegisterCSS.signup_btn_link}>
              <button type="submit" className={AdminRegisterCSS.signup_btn}>
                REGISTER
              </button>
            </div>
            <div className={AdminRegisterCSS.signin}>
              <p className={AdminRegisterCSS.signin_text}>
                Already have an account? &nbsp;
                <Link className={AdminRegisterCSS.signin_link} to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className={AdminRegisterCSS.illustration}>
          <img src={Illustration} alt="Admin Illustration" />
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;
