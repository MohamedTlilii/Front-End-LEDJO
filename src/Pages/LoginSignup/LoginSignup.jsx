import React, { useState } from "react";
import "./LoginSignup.scss";
import { motion } from "framer-motion";
import { Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginSignup() {
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [showPass, setShowPass] = useState(false);
  const [signUpData, setSignUpDataData] = useState({});
  const [message, setMessage] = useState("");

  console.log(signUpData);

  // const login = async () => {
  //   console.log("Login Function Executed", signUpData);
  // };
  // const signup = async () => {
  //   console.log("Sign Up Function Executed", signUpData);
  // };

  const changeHandler = (e) => {
    setSignUpDataData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    axios
      .post("https://back-end-ledjo.onrender.com/api/user/signup", signUpData)
      .then((res) => {
        console.log(res);
        setMessage("Your account was created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 3000);


      }).catch((err)=>{
        console.dir(err);

      })
  };

  return (
    <div className="loginsignup">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="loginsignup-container"
      >
        <h1>{state}</h1>{" "}
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              name="userName"
              value={signUpData.userName}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={signUpData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={signUpData.password}
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
        <button
          // onClick={() => {
          //   state === "Login" ? login() : signup();
          // }}
          onClick={() => {
            handleSignup();
          }}
        >
          Continue
        </button>
        <h1>{message}</h1>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>{" "}
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>{" "}
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginSignup;
