import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignInAdminCSS from "./SignInAdmin.module.css";
import Logo from "../../assets/Logo.svg";
import Email from "../../assets/email.svg";
import Password from "../../assets/password.svg";
import Organization from "../../assets/organization.svg";
import Illustration from "../../assets/illustration-admin.svg";
import { Link } from "react-router-dom";
function SignInAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.error) {
        alert(data.error);
      }
    } catch (error) {
      alert("An error occurred");
    }
  }

  return (
    <div className={SignInAdminCSS.page}>
      <div className={SignInAdminCSS.container}>
        <div className={SignInAdminCSS.cover}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <div className={SignInAdminCSS.logo}>
            <img src={Logo} alt="Logo" width={"160px"} height="50px" />
          </div>

          <h1 className={SignInAdminCSS.title}>Login to Your Account</h1>

          <form
            className={SignInAdminCSS.signin_inputs}
            onSubmit={handleSubmit}
          >
            <div className={SignInAdminCSS.container_input}>
              <img
                src={Email}
                alt="Email"
                className={SignInAdminCSS.input_logo}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>

            <div className={SignInAdminCSS.container_input}>
              <img
                src={Password}
                alt="Password"
                className={SignInAdminCSS.input_logo}
              ></img>
              <input
                type="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>

            <div className={SignInAdminCSS.signin_link}>
              <button className={SignInAdminCSS.signin_btn}>SIGN IN</button>
            </div>
          </form>
          <p className={SignInAdminCSS.signup_text}>
            You don't have an account?
            <Link className={SignInAdminCSS.signup_link} to="/signup-admin">
              Sign Up
            </Link>
          </p>
        </div>
        <div className={SignInAdminCSS.illustration}>
          <img src={Illustration} />
        </div>
      </div>
    </div>
  );
}
export default SignInAdmin;
