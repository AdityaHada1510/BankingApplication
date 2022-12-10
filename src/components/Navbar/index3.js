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

const Navbar3 = () => {
  return (
    <>
      <Nav>
        <NavLink to='/CustomerDashboard'>
          <img src={XB} alt='logo' width="100px"/>
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to='/CFT' activeStyle>
            Fund Transfer
          </NavLink>
          <NavLink to='/CBE' activeStyle>
            Bal Enq
          </NavLink>
          <NavLink to='/CMS' activeStyle>
            Statement
          </NavLink>
          <NavLink to='/CCS' activeStyle>
            Custom Stmt
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Logout'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar3;