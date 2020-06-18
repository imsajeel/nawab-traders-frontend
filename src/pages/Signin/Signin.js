import React from "react";
import Logo from "../../images/logo150.jpg";
import AlertBox from "../components/AlertBox/AlertBox";

import dbAPI from "../../database/dbAPI";

import "./Signin.css";

const { url } = dbAPI.signinAPI;
console.log(url);

const Signin = ({ changeHandler }) => {
  return (
    <div className="backcolor">
      <AlertBox status="success" message="User already exist" />
      <div className="signinPage">
        <div className="content">
          <form className="signinForm">
            <img src={Logo} alt="Logo" />
            <input
              type="text"
              placeholder="Enter your username"
              id="username"
              name="username"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              required
            />
            <button type="submit" className="primary">
              Sign in
            </button>
            <a href="www.google.com">forgat password?</a>
          </form>
          <p style={{ fontSize: "11px", textAlign: "center" }}>
            Proudly presented by ABC
            <br />
            <br />
            <b>+92 340 8115300</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
