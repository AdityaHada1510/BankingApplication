import React from "react";
import "./css/index.css";
import bgImg2 from "./../images/DashboardBG.jpeg";
import './css/managerdashboard.css'
import Navbar2 from "../components/Navbar/index2";



const ManagerDashboard = () => {
  return (

    <><Navbar2 /><div className="home-main-container">
      <div className="bg-img">
        <img src={bgImg2} />
      </div>
      <div className="component1">
        <div className="tagline">
          <h1>Welcome to Manager's Dashboard</h1>
          <p>Please Enjoy our services</p>
        </div>
      </div>
      <br></br>
      <footer className="footer">
        <div className="footerContainer">
          <p class="copyright">©  XOR-Bank 1990</p>
        </div>
      </footer>
    </div></>
  );
};

export default ManagerDashboard;
