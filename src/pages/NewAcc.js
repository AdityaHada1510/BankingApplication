import * as React from 'react';
import { useState } from 'react';
import './css/fundtransfer.css';
import NA from './../images/NewAcc.png'
import Navbar2 from '../components/Navbar/index2';
import { createAccount } from './helper/HelperAcc';

const NewAcc = () => {
  const [formStatus, setFormStatus] = useState('Create')
  const onSubmit = (e) => {
    let custid = e.target[0].value;
    let acctype = e.target[1].value;
    let amount = e.target[2].value;
    e.preventDefault()
    createAccount({
      type:acctype,
      balance:amount,
      customer:{
          userId:custid
      } 
  });
  setFormStatus('Acc Created')
  alert("Account creating in process");
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    e.target[1].value = null;
    e.target[2].value = null;
    setFormStatus('Create Acc')
    alert("Reseting....");
  }

  return (
    <><Navbar2 /><div className="container">
      <div className='Balance-container'>
        <form className="form" onSubmit={onSubmit} onReset={onReset}>
          <div className='fund-image'>
            <img src={NA} width="65px"></img>
          </div>
          <div className='form-input'>
            <label className='label'>Customer ID</label>
            <input className="text-field" type="text" name="CID" placeholder='ID' required />
          </div>
          <div className='form-input'>
            <label className='label' for='payer'>Account Type</label>
            <input className="text-field" type="text" name="Account" placeholder="Current / Savings" required />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="Amount">Initial Deposit</label>
            <input className="text-field" type="text" name="Amount" placeholder="₹ Amount" required />
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

export default NewAcc;