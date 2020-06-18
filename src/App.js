import React, { Component } from "react";
import axios from "axios";

import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Register";

import "./style.css";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      route: "signin",
      user: {
        id: "",
        username: "",
        typeuser: "",
      },
      toSubmit: {
        username: "",
        password: "",
      },
    };
  }

  changeHandler = (e) => {
    this.setState({ toSubmit: { [e.target.name]: e.target.value } });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://node-mailtrain.herokuapp.com/adduser", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("HEre " + err);
      });
  };

  render() {
    const { route } = this.state;

    return route === "signin" ? (
      <Signin changeHandler={this.changeHandler} />
    ) : route === "home" ? (
      <Home />
    ) : (
      <h1>Not Found!</h1>
    );
  }
}

export default App;
