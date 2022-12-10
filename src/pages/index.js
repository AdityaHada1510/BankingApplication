import React from "react";
import "./css/index.css";
import bgImg from "./../images/banking.jpg";
import ft from "./../images/FundTransfer.png";
import b from "./../images/Balance1.png";
import cs from "./../images/CustomStmt.png";
import ms from "./../images/MiniStatement.png";
import d from "./../images/Deposit.png";
import w from "./../images/Withdrawal.png";
import { NavLink } from "react-router-dom";
import Navbar  from "./../components/Navbar/index";

const Home = () => {
  return (
    <><Navbar /><div className="home-main-container">
      <div className="bg-img">
        <img src={bgImg} />
      </div>
      <div className="component-headline">
        <div className="tagline-heading">
          <h1>Earn the XOR Points and get Bonuses</h1>
          <p>
            Make your daily routine easier by managing money and transactions
            with
            <br />
            the XOR - Bank website
          </p>
        </div>
      </div>
      <br></br>
      <div className="details1">
        <div className="element">
          <div className="details-heading">Trusted Users </div>
          <br></br>
          <span className="details-text">987,381,068 ...and counting</span>
        </div>
        <div className="element">
          <div className="details-heading">Total Transactions </div>
          <br></br>
          <span className="details-text">2 Million (USD) </span>
        </div>
        <div className="element">
          <div className="details-heading">Satisfaction </div>
          <br></br>
          <span className="details-text">95%</span>
        </div>
      </div>
      <div className="services-offered">
        <div className="services-heading">Services Offered</div>
        <br></br>
        <div className="fund-transfer">
          <img src={ft} width="70px"></img>
          <NavLink to='/Login'>Fund Transfer</NavLink>
        </div>
        <div className="Mini-Statement">
          <img src={ms} width="70px"></img>
          <NavLink to='/Login'>Mini Statement</NavLink>
        </div>
        <div className="Balance-Enquiry">
          <img src={b} width="70px"></img>
          <NavLink to='/Login'>Balance Enquiry</NavLink>
        </div>
        <div className="Withdrawal">
          <img src={w} width="70px"></img>
          <NavLink to='/Login'>Withdrawal</NavLink>
        </div>
        <div className="Deposit">
          <img src={d} width="70px"></img>
          <NavLink to='/Login'>Deposit</NavLink>
        </div>
        <div className="Customize-Statement">
          <img src={cs} width="70px"></img>
          <NavLink to='/Login'>Custom Statement</NavLink>
        </div>
      </div>
      <footer class="footer">
        <div class="footerContainer">
          <p class="copyright">©  XOR-Bank 1990</p>
        </div>
      </footer>
    </div></>
  );
};

export default Home;
