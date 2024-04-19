import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Checkbox } from "semantic-ui-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MessageHeader, Message } from "semantic-ui-react";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loginData, setloginData] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(loginData);
  const changeHandler = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    setLoading(true);
    axios
      .post("https://back-end-ledjo.onrender.com/api/user/login", loginData)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("isUser", res.data.data.isUser);
        localStorage.setItem("isAdmin", res.data.data.isAdmin);
        localStorage.setItem("isBanned", res.data.data.isBanned);
        localStorage.setItem("id", res.data.data.id);
       
        setTimeout(() => {
          navigate("/profile");
        }, 3000);
      })
      .catch((err) => {
        console.dir(err);
        setLoading(false);

        setError(err.response.data.error);

        setTimeout(() => {
          setError("");
        }, 10000);
      });
  };
  return (
    <div className="login">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="login-container"
      >
        <h1>Login</h1>{" "}
        <div className="login-fields">
          <input
            name="email"
            value={loginData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={loginData.password}
            onChange={changeHandler}
            type={showPass ? "text" : "password"}
            placeholder="Password"
          />
        </div>
        <Checkbox
          style={{ margin: "10px" }}
          label="Show password"
          onClick={() => {
            setShowPass(!showPass);
          }}
        />
        <Button
          onClick={() => {
            handleLogin();
          }}
          loading={loading}
        >
          Continue
        </Button>
        {error && (
          <Message negative>
            <MessageHeader>OOOPPPS! 🤕</MessageHeader>
            <p>{error}</p>
          </Message>
        )}
       
        <Link to="/signup">
          <p className="login-">
            Create an account? <span>Click here</span>{" "}
          </p>
        </Link>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
