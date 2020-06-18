import React, { Component } from "react";
import Register from "../pages/Signin/Register";
import "./style.css";

class App extends Component {
  render() {
    console.log(this.props.store.getState());
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default App;
