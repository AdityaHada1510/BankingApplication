import * as React from 'react';
import { useState} from 'react';
import './css/balanceenquiry.css';
import BalImg from "./../images/Balance1.png";
import Navbar2 from '../components/Navbar/index2';
import { getBalance } from './helper/HelperAcc';

const BalanceEnquiry = () => {
  const [formStatus, setFormStatus] = useState('Inquire')
  const onSubmit = async (e) => {
    let accno = e.target[0].value;
    e.preventDefault()
    const balance = await getBalance(accno)
    console.log(balance)
    alert(balance)
    setFormStatus('Inquired')
    alert("In Process");
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    setFormStatus('Inquire')
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

export default BalanceEnquiry;