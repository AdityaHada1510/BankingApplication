import React from "react";
import bgImg from "./../images/HomeBackground.png";
import "./css/awards.css";
import Navbar  from "./../components/Navbar/index";

const Awards = () => {
  return (
    <><Navbar /><div className="main-container">
      <div className="bg-img">
        <img src={bgImg} />
      </div>
      <div className="container">
        <div className="paragraph">
          <h1 className="header"> List of Awards </h1>
          <ol>
            <li>
              1.   XOR Bank has been awarded in ‘Best Digital Employee Engagement’ and ‘Best Lending Implementation’ categories by The Asian Banker, a Singapore-based publication in 2022.
            </li>
            <li>2.     XOR Bank has won three awards by Asian Banking and Finance, a Singapore-based magazine. The Bank has won awards in 2022 for its wholesale banking initiatives in the following categories - 'India Domestic Trade Finance Bank of the Year’, ‘India Domestic Initiative of the Year’ and ‘India Domestic COVID Management Initiative of the Year’.</li>
            <li>3.     XOR Bank has been recognised as India's 'Best Domestic Bank' by Asiamoney, a London-based financial publication from the stable of the Daily Mail. The Bank has received the award for its financial performance, extensive branch network and its digital initiatives.t.</li>
            <li>4.     XOR Bank has won four awards from Retail Banker International, a UK-based finance portal. The Bank has emerged as a winner in three categories - 'Best Retail Bank India', 'Asia Trailblazer of the Year' and 'Advances in the use of Blockchain' category. Additionally,the Bank was highly commended for its submission in the 'Excellence in SME Banking' category.
            </li>
            <li>5.     XOR Bank has been declared as the 'Best Retail Bank in India' for the 9th year in a row at The Asian Banker Excellence in Retail Financial Services International Awards 2022. This year the Bank has also ranked 4th among banks in Asia Pacific, Middle East and Africa.XOR Bank is the only Indian bank in the list of top 10 banks in this region.
            </li>
          </ol>
        </div>
      </div>
    </div></>
  );
};

export default Awards;