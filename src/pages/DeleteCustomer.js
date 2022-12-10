import * as React from 'react';
import { useState } from 'react';
import './css/ministatement.css';
import DC from './../images/DeleteCustomer.png'
import Navbar2 from '../components/Navbar/index2';
import { deleteUser } from './helper/HelperUser';

const DeleteCustomer = () => {
  const [formStatus, setFormStatus] = useState('Delete')
  const onSubmit = (e) => {
    let customerId = e.target[0].value;  
    e.preventDefault()
    deleteUser(customerId);
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
          <img src={DC} width="55px"></img>
        </div>
        <div className='form-input'>
          <label className='label'>Customer ID</label>
          <input className="text-field" type="number" name="Customer Id" placeholder='ID' required />
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

export default DeleteCustomer;