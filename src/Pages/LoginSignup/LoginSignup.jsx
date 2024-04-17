import React from "react";
import "./LoginSignup.scss";
import { motion } from "framer-motion";

function LoginSignup() {
  return (
    <div className="loginsignup">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="loginsignup-container"
      >
        <h1>Sign Up</h1>{" "}
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>{" "}
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginSignup;
