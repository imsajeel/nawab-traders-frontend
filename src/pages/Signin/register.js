import React, { Component } from "react";
import Logo from "../../images/logo150.jpg";
import "./Signin.css";
import axios from "axios";

import dbAPI from "../../database/dbAPI";

const { url } = dbAPI.registerAPI;
class Register extends Component {
  constructor(props) {
    super();

    this.state = {
      toSubmit: {
        username: "",
        password: "",
        typeuser: "user",
      },
    };
  }

  changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    console.log(`"${url}"`);
    this.setState({ toSubmit: { [e.target.name]: e.target.value } });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("http://localhost:3000/register", this.state.toSubmit)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("HEre " + err);
      });
  };

  render() {
    return (
      <div className="backcolor">
        <div className="signinPage">
          <div className="content">
            <form className="signinForm" onSubmit={this.submitHandler}>
              <img src={Logo} alt="Nawab Traders" />
              <input
                type="text"
                placeholder="Enter username"
                name="username"
                id="username"
                onChange={this.changeHandler}
                required
              />
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                id="password"
                onChange={this.changeHandler}
                required
              />
              <label htmlFor="userType">User Type:</label>
              <select
                name="typeuser"
                id="userType"
                onChange={this.changeHandler}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="dev">Dev</option>
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
  }
}

export default Register;
