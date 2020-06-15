import React from "react";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Register";

import "./style.css";

function App() {
  let route = "signin";

  return route === "signin" ? (
    <Signin />
  ) : route === "home" ? (
    <Home />
  ) : (
    <h1>Not Found!</h1>
  );
}

export default App;
