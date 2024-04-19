import React, { useState } from "react";
import "./SignUp.scss";
import { motion } from "framer-motion";
import { Button, Checkbox } from "semantic-ui-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MessageHeader, Message } from "semantic-ui-react";

function SignUp() {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log(signUpData);

  const changeHandler = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    setLoading(true);

    axios
      .post("https://back-end-ledjo.onrender.com/api/user/signup", signUpData)
      .then((res) => {
        console.log(res);
        setLoading(false);

        setMessage("Your account was created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.dir(err);
        setLoading(false);
        if (err.response.data.error.email) {
          setError(err.response.data.error.email.message);
        } else if (err.response.data.error.userName) {
          setError(err.response.data.error.userName.message);
        } else {
          setError(err.response.data.error);
        }

        setTimeout(() => {
          setError("");
        }, 10000);
        // console.dir(err);
      });
  };

  return (
    <div className="signup">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="signup-container"
      >
        <h1>Sign Up</h1>{" "}
        <div className="signup-fields">
          <input
            name="userName"
            value={signUpData.userName}
            onChange={changeHandler}
            type="text"
            placeholder="Your Name"
          />

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
       
        <Button
          onClick={() => {
            handleSignup();
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
        {message && (
          <Message positive>
            <MessageHeader>{message} 🥳</MessageHeader>
            <p>You wil be redirect to the Login page</p>
          </Message>
        )}
        {/* <h1 className="h1message">{message}</h1> */}
        <Link to="/login">
          <p className="signup-">
            Already have an account? <span>Login here</span>{" "}
          </p>
        </Link>
        <div className="signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </motion.div>
    </div>
  );
}

export default SignUp;
