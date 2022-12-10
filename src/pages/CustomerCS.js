import * as React from 'react';
import { useState } from 'react';
import './css/customized.css';
import CS from './../images/CustomizedStatement.png'
import Navbar3 from '../components/Navbar/index3';
import { getCustomStatement } from './helper/HelperTransaction';
import { getUser } from './helper/HelperUser';
import { getAccountDetails } from './helper/HelperAcc';
const CustomerCS = () => {
  const [formStatus, setFormStatus] = useState('Get Statement')
  const onSubmit = async (e) => {
    e.preventDefault();
    let accountNo = e.target[0].value;
    let fromDate = e.target[1].value;
    let toDate = e.target[2].value;
    let lowerLimit = e.target[3].value;
    let noOfTransactions = e.target[4].value;
    const data = localStorage.getItem("id");
    const id = JSON.parse(data);
    const user = await getUser(id);
    console.log(user)
    const response = await getAccountDetails(accountNo);
    console.log(response)
    if(user.userId != response.customer.userId)
    {
      alert("Account doesnt Exist")
    }
    else
    {
      const customstatement = await getCustomStatement(
        { accountNo: accountNo, fromDate: fromDate, toDate: toDate, lowerLimit: lowerLimit, noOfTransactions: noOfTransactions });
      const customstatementArr = customstatement.map((transaction) => {
        // console.log(statementDTO);
        return ({
          transactionId: transaction.transactionId,
          description: transaction.description,
          amount: transaction.amount,
          date: transaction.date
        })
      })
      console.log(customstatementArr);
      alert(JSON.stringify(customstatementArr));
      //console.log(customstatement);
      setFormStatus('Statement Recieved')
      alert("Getting Statement");
    }
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    e.target[1].value = null;
    e.target[2].value = null;
    e.target[3].value = null;
    setFormStatus('Get Statement')
    alert("Reseting....");
  }

  return (
    <><Navbar3 /><div className="container">
      <form className="form" onSubmit={onSubmit} onReset={onReset}>
        <div className='fund-image'>
          <img src={CS} width="60px"></img>
        </div>
        <div className='form-input'>
          <label className='label'>Your AccNo.</label>
          <input className="text-field" type="text" name="accno" placeholder="Account No." required ></input>
        </div>
        <div className='form-input'>
          <label className='label'>From Date</label>
          <input type='date' required></input>
        </div>
        <div className='form-input'>
          <label className='label'>To Date</label>
          <input type='date' required></input>
        </div>
        <div className='form-input'>
          <label className='label'>Amount Lower Limit</label>
          <input className="text-field" type="text" name="Money" placeholder='₹ Lower Limit' required />
        </div>
        <div className='form-input'>
          <label className='label'>No of Transactions</label>
          <input className="text-field" type="number" name="Transactions" placeholder='Enter No of transactions' required />
        </div>
        <button className="primary" type="submit">
          {formStatus}
        </button>
        <button className='secondary' type='reset'>
          Reset
        </button>
      </form>
    </div></>
  );
};

export default CustomerCS;