import React from "react";
import Logo from "../../images/logo150.jpg";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="backcolor">
      <div className="signinPage">
        <div className="content">
          <form className="signinForm">
            <img src={Logo} alt="Nawab Traders" />
            <input type="text" placeholder="Enter your username" required />
            <input type="password" placeholder="Enter your password" required />
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
