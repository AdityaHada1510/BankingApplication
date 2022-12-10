import * as React from 'react';
import { useState } from 'react';
import './css/fundtransfer.css';
import FT from './../images/FundTransfer.png'
import Navbar2 from '../components/Navbar/index2';
import { getBalance} from './helper/HelperAcc';
import { updateBalance } from './helper/HelperAcc';
import { addTransaction } from './helper/HelperTransaction';

const Fundtransfer = () => {
  const [formStatus, setFormStatus] = useState('Transfer')
  
  const onSubmit = async (e) => {
    e.preventDefault()
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    const date = yyyy+"-"+mm+"-"+dd;
    let fromAccountNum = e.target[0].value;
    let toAccountNum = e.target[1].value;
    let amount = e.target[2].value;
    let description = e.target[3].value;
    const senderTransactionDTO = {
      accountNo: fromAccountNum,
      amount: -amount
    }
    const senderTransactionDetails = {
      primaryAccount: {
        accountNo: fromAccountNum
      },
      secondaryAccount: {
        accountNo: toAccountNum
      },
      amount: -amount,
      description: description+ " -sent to "+toAccountNum,
      date
    }
    const receiverTransactionDTO = {
      accountNo: toAccountNum,
      amount: amount
    }
    const receiverTransactionDetails = {
      primaryAccount: {
        accountNo: toAccountNum
      },
      secondaryAccount: {
        accountNo: fromAccountNum
      },
      amount: amount,
      description : description + " -received from "+fromAccountNum,
      date
    }
    const balance = await getBalance(fromAccountNum)
    if(balance >= amount)
    {
      await updateBalance(senderTransactionDTO);
      await updateBalance(receiverTransactionDTO);
      await addTransaction(senderTransactionDetails);
      await addTransaction(receiverTransactionDetails);
    }
    else{
      alert("Insufficient")
    }
    setFormStatus('Transfered')
    alert("Your money is being transfered");
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    e.target[1].value = null;
    e.target[2].value = null;
    e.target[3].value = null;
    setFormStatus('Transfer')
    alert("Reseting....");
  }

  return (
    <><Navbar2 /><div className="container">
      <div className='Balance-container'>
        <form className="form" onSubmit={onSubmit} onReset={onReset}>
          <div className='fund-image'>
            <img src={FT} width="65px"></img>
          </div>
          <div className='form-input'>
            <label className='label' for='payer'>Payer's AccNo.</label>
            <input className="text-field" type="text" name="email" placeholder="Payer's Acc No" required />
          </div>
          <div className='form-input'>
            <label className='label' for='payee'>Payee's AccNo.</label>
            <input className="text-field" type="text" name="email" placeholder="Payee's Acc No" required />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="Amount">Amount</label>
            <input className="text-field" type="text" name="Amount" placeholder="₹" required />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="Amount">Description</label>
            <input className="text-field" type="text" name="AmouDescription" placeholder="Texxt" required />
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

export default Fundtransfer;