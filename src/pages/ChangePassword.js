import * as React from 'react';
import { useState } from 'react';
import './css/balanceenquiry.css';
import BalImg from "./../images/Balance1.png";
import Navbar2 from '../components/Navbar/index2';
import {changePassword, getPassword } from './helper/HelperUser';
const ChangePassword = () => {
  const [formStatus, setFormStatus] = useState('Change')
  const onSubmit = async (e) => {
    let oldPassword = e.target[0].value;
    let newPassword = e.target[1].value;
    let confirmPassword = e.target[2].value;
    e.preventDefault()
    const data = localStorage.getItem("id");
    const id = JSON.parse(data);
    const response = await getPassword(id);

    if(response!==oldPassword)
    {
        alert("Incorrect Password")
    }
    else{
        changePassword({userId:id,newPassword})
    }
    setFormStatus('Changed')
    alert("Changing");
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    e.target[1].value = null;
    e.target[2].value = null;
    setFormStatus('Change')
    alert("Reseting....");
  }

  return (
    <><Navbar2 /><div className="container">
      <div className='Balance-container'>
        <form className="form" onSubmit={onSubmit} onReset={onReset}>
          <div className='balance-image'>
            <img src={BalImg} width="65px"></img>
          </div>
          <div className='form-input'>
            <label className='label'>Old Password</label>
            <input className="text-field" type="text" name="OldP" placeholder="Old Password" required ></input>
          </div>
          <div className='form-input'>
            <label className='label'>New Password</label>
            <input className="text-field" type="text" name="OldP" placeholder="New Password" required ></input>
          </div>
          <div className='form-input'>
            <label className='label'>Confirm Password</label>
            <input className="text-field" type="text" name="OldP" placeholder="Confirm Password" required ></input>
          </div>
          <button className="primary" type="submit">
            {formStatus}
          </button>
          <button className='secondary' type='reset'>
            Reset
          </button>
        </form>
      </div>
    </div></>
  );
};

export default ChangePassword;