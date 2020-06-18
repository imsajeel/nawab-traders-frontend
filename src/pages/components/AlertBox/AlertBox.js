import React, { Component } from "react";
import "./AlertBox.css";

export default class AlertBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
      message: this.props.message,
    };
  }

  initState = () => {
    this.setState({
      status: this.props.status,
      message: this.props.message,
    });
  };

  hideState = () => {
    this.setState({
      status: "hide",
      message: " ",
    });
  };

  render() {
    // this.initState();

    setTimeout(() => {
      this.hideState();
    }, 5000);

    return (
      <div className={`AlertBox ${this.state.status}`}>
        {this.state.message}
      </div>
    );
  }
}
