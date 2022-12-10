import React from "react";
import bgImg from "./../images/HomeBackground.png";
import "./css/about.css";
import XI from "./../images/Xoriant.png"
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <><Navbar /><div class="main-container">
      <div class="container">
        <div class="content-section">
          <div class="content">
            <div>
              <h1 className="header">Welcome to XOR BANK</h1>
            </div>
            <br></br>
            <div className="paragraph">
              <p>
                XOR Bank is an Indian multinational public sector bank and financial services statutory body headquartered in Mumbai, Maharashtra.
                XOR-Bank is the 43rd largest bank in the world and ranked 221st in the Fortune Global 500 list of the world's biggest corporations of 2020, being the only Indian bank on the list.
                It is a public sector bank and the largest bank in India with a 23% market share by assets and a 25% share of the total loan and deposits market.
                It is also the fifth largest employer in India with nearly 250,000 employees.
                The bank descends from the Reserve Bank of India, founded in 1990 , making it the oldest commercial bank in the Indian subcontinent.
                XOR-Bank has over 20000 branches in India. In the financial year 2012–13, its revenue was ₹2.005 trillion (US$25 billion), out of which domestic operations contributed to 95.35% of revenue.
                Similarly, domestic operations contributed to 88.37% of total profits for the same financial year.
                XOR-Bank is one of the largest employers in the world with 245,000+ employees as on 31 March 2021. Out of the total workforce, the representation of women employees is nearly 26%.
                The percentage of Officers, Associates and Subordinate staffs was 44.28%, 41.03% and 14.69% respectively on the same date.
                Each employee contributed a net profit of ₹828,350 (US$10,000) during FY 2020–21.
              </p>
            </div>
            <br></br>
          </div>
        </div>
        <div class="social">
          <a href=""><i class="fab fa-facebook-f"></i></a>
          <a href=""><i class="fab fa-twitter"></i></a>
          <a href=""><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="image-section">
        <img src="image/img one.jpg" />
      </div>
    </div></>
  );
};

export default About;
