import React from "react";
import Articles from "../Articles/Articles";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div class="hero-image">
        <div class="hero-text text-light">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <SecondNavbar></SecondNavbar>
      <div className="d-flex justify-content-between container p-3 flex-lg-row flex-md-row flex-sm-column flex-column">
        <Articles></Articles>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Home;
