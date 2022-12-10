import React from 'react';
import XB from "./../../images/XoriantLogo.png"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar2 = () => {
  return (
    <>
      <Nav>
        <NavLink to='/ManagerDashboard'>
          <img src={XB} alt='logo' width="100px"/>
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to='/fundtransfer' activeStyle>
            Fund Transfer
          </NavLink>
          <NavLink to='/balanceenquiry' activeStyle>
            Bal Enq
          </NavLink>
          <NavLink to='/ministatement' activeStyle>
            Statement
          </NavLink>
          <NavLink to='/customizedstatement' activeStyle>
            Custom Stmt
          </NavLink>
          <NavLink to='/NewCustomer' activeStyle>
            New Cust
          </NavLink>
          <NavLink to='/EditCustomer' activeStyle>
            Edit Cust
          </NavLink>
          <NavLink to='/DeleteCustomer' activeStyle>
            Del Cust
          </NavLink>
          <NavLink to='/Deposit' activeStyle>
            Deposit
          </NavLink>
          <NavLink to='/Withdraw' activeStyle>
            Withdraw
          </NavLink>
          <NavLink to='/NewAcc' activeStyle>
            New Acc
          </NavLink>
          <NavLink to='/EditAcc' activeStyle>
            Edit Acc
          </NavLink>
          <NavLink to='/DeleteAcc' activeStyle>
            Del Acc
          </NavLink>
          <NavLink to='/ChangePassword' activeStyle>
            Change Password
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Logout'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar2;