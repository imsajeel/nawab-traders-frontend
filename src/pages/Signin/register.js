import React from "react";
import Logo from "../../images/logo150.jpg";
import "./Signin.css";

const register = () => {
  return (
    <div className="backcolor">
      <div className="signinPage">
        <div className="content">
          <form className="signinForm">
            <img src={Logo} alt="Nawab Traders" />
            <input type="text" placeholder="Enter username" required />
            <input type="password" placeholder="Enter password" required />
            <label for="userType">User Type:</label>
            <select name="userType" id="userType">
              <option value="volvo">User</option>
              <option value="saab">Admin</option>
              <option value="opel">Dev</option>
            </select>
            <button type="submit" className="primary">
              Register
            </button>
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

export default register;
