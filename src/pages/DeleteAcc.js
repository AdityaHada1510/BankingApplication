import * as React from 'react';
import { useState } from 'react';
import './css/ministatement.css';
import DA from './../images/DeleteAcc.png'
import Navbar2 from '../components/Navbar/index2';
import { deleteAccount } from './helper/HelperAcc';

const DeleteAcc = () => {
  const [formStatus, setFormStatus] = useState('Delete')
  const onSubmit = (e) => {
    let accno = e.target[0].value;
    e.preventDefault()
    deleteAccount(accno);
    setFormStatus('Deleted')
    alert("Deleting...");
  }
  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    setFormStatus('Delete')
    alert("Reseting....");
  }

  return (
    <><Navbar2 /><div className="container">
      <form className="form" onSubmit={onSubmit} onReset={onReset}>
        <div className='fund-image'>
          <img src={DA} width="60px"></img>
        </div>
        <div className='form-input'>
          <label className='label'>Account No.</label>
          <input className="text-field" type="text" name="CID" placeholder='Acc No' required />
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

export default DeleteAcc;