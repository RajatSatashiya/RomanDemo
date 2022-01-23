import { useState, useRef, useContext } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/authContext";

function Login() {
  const history = useHistory();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const authContext = useContext(AuthContext);

  const [error, setError] = useState("");

  const loginUser = async (email, password) => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      data.message && setError(data.message);
      authContext.login(data.token);

      const tokenValue = localStorage.getItem("token");
      if (tokenValue === "undefined") {
        history.replace("/login");
      } else {
        history.replace("/");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    loginUser(email, password);
  };

  return (
    <>
      <div className="login-box">
        <div className="image">
          <img
            className="login-image"
            src="./images/colosseum.png"
            alt="doctor illustration"
            // width="400px"
          />
        </div>
        <form className="the-form" onSubmit={submitForm}>
          <h1>Login</h1>
          <label htmlFor="email">Email Address</label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            ref={emailInputRef}
          ></input>
          <br></br>

          <label htmlFor="password">Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter 5 characters or more"
            required
            ref={passwordInputRef}
          ></input>

          <input type="checkbox" name="remember"></input>
          <label className="remember" htmlFor="remember">
            Remember me
          </label>
          <br></br>

          <div className={error == "" ? "" : "errorMessage"}>{error}</div>
          <button className="btn" type="submit">
            LOGIN
          </button>
          <br></br>

          <Link className="link" to="/forgot">
            Forgot Password?
          </Link>
          <br></br>
          <Link className="link" to="/signup">
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </>
  );
}
export default Login;
