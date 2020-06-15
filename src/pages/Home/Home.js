import React from "react";
import HomeBtList from "../components/HomeBtList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const home = () => {
  return (
    <div className="Page">
      <Header />
      <div className="content">
        <HomeBtList />
      </div>
      <Footer />
    </div>
  );
};

export default home;
