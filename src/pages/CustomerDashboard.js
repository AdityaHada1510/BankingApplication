import React from "react";
import "./css/index.css";
import bgImg2 from "./../images/DashboardBG.jpeg";
import ft from "./../images/FundTransfer.png";
import b from "./../images/Balance1.png";
import cs from "./../images/CustomStmt.png";
import ms from "./../images/MiniStatement.png";
import d from "./../images/Deposit.png";
import w from "./../images/Withdrawal.png";
import { NavLink } from "react-router-dom";
import Navbar  from "../components/Navbar/index";
import Navbar3 from "../components/Navbar/index3";

const CustomerDashboard= () => {
  return (
    <><Navbar3/><div className="home-main-container">
      <div className="bg-img">
        <img src={bgImg2} />
      </div>
      <div className="component1">
        <div className="tagline">
          <h1>Welcome to Customer's Dashboard</h1>
          <p>Please Enjoy your stay</p>
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

export default CustomerDashboard;
