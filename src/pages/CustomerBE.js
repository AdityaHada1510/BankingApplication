import * as React from 'react';
import { useState } from 'react';
import './css/balanceenquiry.css';
import BalImg from "./../images/Balance1.png";
import Navbar3 from '../components/Navbar/index3';
import { getUser } from './helper/HelperUser';
import { getAccountDetails, getBalance } from './helper/HelperAcc';

const CustomerBE = () => {
  const [formStatus, setFormStatus] = useState('Inquire')
  const onSubmit = async (e) => {
    let accno = e.target[0].value;
    e.preventDefault()
    alert("In Process");
    const data = localStorage.getItem("id");
    const id = JSON.parse(data);
    const user = await getUser(id);
    console.log(user)
    const response = await getAccountDetails(accno);
    console.log(response)
    if(user.userId != response.customer.userId)
    {
      alert("Account Doesnt Exist")
    }
    else
    {
      const balance = await getBalance(accno);
      alert(balance)
    }
    setFormStatus('Inquired')
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    setFormStatus('Inquire')
    alert("Reseting....");
  }

  return (
    <><Navbar3 /><div className="container">
      <div className='Balance-container'>
        <form className="form" onSubmit={onSubmit} onReset={onReset}>
          <div className='balance-image'>
            <img src={BalImg} width="65px"></img>
          </div>
          <div className='form-input'>
            <label className='label'>Your AccNo.</label>
            <input className="text-field" type="text" name="accno" placeholder="Account No." required ></input>
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

export default CustomerBE;