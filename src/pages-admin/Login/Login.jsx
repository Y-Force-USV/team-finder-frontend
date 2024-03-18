import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginCSS from "./Login.module.css";
import Logo from "../../assets/Logo.svg";
import Email from "../../assets/email.svg";
import Password from "../../assets/password.svg";
import Illustration from "../../assets/illustration-admin.svg";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../common/constants";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const url = `${BACKEND_URL}/auth/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("organizationName", data.organizationName);
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("organizationId", data.organizationId);

        navigate("/dashboard-admin");
      } else {
        alert(data.message || "Authentication failed");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  }

  return (
    <div className={LoginCSS.page}>
      <div className={LoginCSS.container}>
        <div className={LoginCSS.cover}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <div className={LoginCSS.logo}>
            <img src={Logo} alt="Logo" width={"160px"} height="50px" />
          </div>

          <h1 className={LoginCSS.title}>Login to Your Account</h1>

          <form className={LoginCSS.signin_inputs} onSubmit={handleSubmit}>
            <div className={LoginCSS.container_input}>
              <img src={Email} alt="Email" className={LoginCSS.input_logo} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>

            <div className={LoginCSS.container_input}>
              <img
                src={Password}
                alt="Password"
                className={LoginCSS.input_logo}
              ></img>
              <input
                type="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>

            <div className={LoginCSS.signin_link}>
              <button className={LoginCSS.signin_btn}>LOGIN</button>
            </div>
          </form>
        </div>
        <div className={LoginCSS.illustration}>
          <img src={Illustration} />
        </div>
      </div>
    </div>
  );
}
export default Login;
