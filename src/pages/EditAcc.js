import * as React from 'react';
import { useState } from 'react';
import './css/fundtransfer.css';
import NA from './../images/NewAcc.png'
import Navbar2 from '../components/Navbar/index2';
import { updateAccount } from './helper/HelperAcc';

const EditAcc = () => {
  const [formStatus, setFormStatus] = useState('Edit')
  const onSubmit = (e) => {
    let accno = e.target[0].value;
    let custid = e.target[1].value;
    let acctype = e.target[2].value;
    let amount = e.target[3].value;
    e.preventDefault()
    updateAccount({
      accountNo:accno,
      type:acctype,
      balance:amount,
      customer:{
          userId:custid
      } 
  });
  setFormStatus('Acc Edited')
  alert("Account editing in process");
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    e.target[1].value = null;
    e.target[2].value = null;
    e.target[3].value = null;
    setFormStatus('Edit Acc')
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
            <label className='label'> Account No</label>
            <input className="text-field" type="text" name="AccountNo" placeholder='Account No' required />
          </div>
          <div className='form-input'>
            <label className='label'>Customer ID</label>
            <input className="text-field" type="text" name="CID" placeholder='ID' required />
          </div>
          <div className='form-input'>
            <label className='label' for='payer'>Account Type</label>
            <select className='Drop1' required>
              <option value={'savings'}>Savings</option>
              <option value={'current'}>Current</option>
            </select>
          </div>
          <div className="form-input">
            <label className="label" htmlFor="Amount">Balance</label>
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

export default EditAcc;