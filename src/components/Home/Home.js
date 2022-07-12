import React from "react";
import Articles from "../Articles/Articles";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <div className="w-100">
        <img
          src="https://blog.iuiga.com/wp-content/uploads/2019/01/radek-grzybowski-66457-unsplash.jpg"
          alt="banner"
          className="img-fluid  h-50"
        />
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
