import React, { useContext, useState } from "react";
import "./Register.css"; // Ensure this matches your CSS file name
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useSnackbar } from "notistack";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ClipLoader } from "react-spinners"; // Import the spinner

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts
    const endpoint = currentState === "login" ? "login" : "register";
    const newUrl = `${url}/api/user/${endpoint}`;

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        if (currentState === "login") {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          navigate("/menu");
          enqueueSnackbar("Login successfully", { variant: "success" });
        } else {
          setCurrentState("login");
          enqueueSnackbar("Registration successful. Please log in.", {
            variant: "success",
          });
        }
      } else {
        enqueueSnackbar(response.data.message, { variant: "error" });
      }
    } catch (error) {
      console.error("Error logging in or signing up", error);
      enqueueSnackbar("An error occurred. Please try again.", {
        variant: "error",
      });
    } finally {
      setLoading(false); // Set loading to false when the request ends
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="reg-container-bigbox">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState === "login" ? "Login" : "Sign Up"}</h2>
        </div>
        <form onSubmit={onLogin} className="login-popup-inputs">
          {currentState === "register" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <div className="password-container">
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="password-toggle-icon"
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? (
              <ClipLoader size={20} color={"#fff"} />
            ) : currentState === "register" ? (
              "Create account"
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="login-popup-condition">
          {currentState === "login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrentState("register")}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("login")}>Login</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
