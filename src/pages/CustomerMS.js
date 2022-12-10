import * as React from 'react';
import { useState } from 'react';
import './css/ministatement.css';
import MS from './../images/MiniStatement.png'
import Navbar2 from '../components/Navbar/index2';
import Navbar3 from '../components/Navbar/index3';
import { getMiniStatement } from './helper/HelperTransaction';
import { getAccountDetails } from './helper/HelperAcc';
import { getUser } from './helper/HelperUser';
const CustomerMS = () => {
  const [formStatus, setFormStatus] = useState('Get Statement')
  const onSubmit = async (e) => {
    let accno = e.target[0].value;
    e.preventDefault()
    alert("Getting Statement");
    const data = localStorage.getItem("id");
    const id = JSON.parse(data);
    const user = await getUser(id);
    console.log(user)
    const response = await getAccountDetails(accno);
    console.log(response)
    if(user.userId != response.customer.userId)
    {
      alert("Account doesnt Exist")
    }
    else
    {
      const ministatement = await getMiniStatement(accno);
      console.log(ministatement)
      const ministatementArr = ministatement.map((transaction)=>{
      return {
        transactionId:transaction.transactionId, 
        description: transaction.description ,
        amount: transaction.amount,
        date: transaction.date
      }
    })
    alert(JSON.stringify(ministatementArr))
    setFormStatus('Statement Recieved')
    }
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    setFormStatus('Get Statement')
    alert("Reseting....");
  }

  return (
    <><Navbar3 /><div className="container">
      <form className="form" onSubmit={onSubmit} onReset={onReset}>
        <div className='fund-image'>
          <img src={MS} width="65px"></img>
        </div>
        <div className='form-input'>
          <label className='label' for='payer'>Your AccNo.</label>
          <input className="text-field" type="text" name="accno" placeholder="Account No." required ></input>
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

export default CustomerMS;