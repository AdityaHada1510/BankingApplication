import * as React from 'react';
import { useState } from 'react';
import './css/Deposit.css';
import D from './../images/Deposit.png'
import Navbar2 from '../components/Navbar/index2';
import { updateBalance } from './helper/HelperAcc';
import { addTransaction } from './helper/HelperTransaction';
const Deposit = () => {
  const [formStatus, setFormStatus] = useState('Deposit')
  const onSubmit = async (e) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    const date = yyyy+"-"+mm+"-"+dd;
    let accno = e.target[0].value;
    let amount = e.target[1].value;
    let description = e.target[2].value;
    e.preventDefault()
      const transactionDTO = {
      accountNo : accno,
      amount : amount
      }

      const transactionDetails = {
      primaryAccount : {
      accountNo : accno
        },
      amount,
      description,
      date
    }
    await updateBalance(transactionDTO);
    await addTransaction(transactionDetails);
    setFormStatus('Deposited')  
    alert("Depositing");
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    e.target[1].value = null;
    e.target[2].value = null;
    setFormStatus('Deposit')
    alert("Reseting....");
  }

  return (
    <><Navbar2 /><div className="container">
      <div className='Balance-container'>
        <form className="form" onSubmit={onSubmit} onReset={onReset}>
          <div className='fund-image'>
            <img src={D} width="65px"></img>
          </div>
          <div className='form-input'>
            <label className='label'>Acc No</label>
            <input className="text-field" type="text" name="Acc" placeholder='Acc No.' required />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="Amount">Amount Deposit</label>
            <input className="text-field" type="text" name="Amount" placeholder="₹ Amount" required />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="Amount">Description</label>
            <input className="text-field" type="text" name="Amount" placeholder="Anything" required />
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

export default Deposit;