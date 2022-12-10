import * as React from 'react';
import { useState } from 'react';
import './css/ministatement.css';
import NC from './../images/NewCustomer.png'
import Navbar2 from '../components/Navbar/index2';
import { updateUser } from './helper/HelperUser';

const EditCustomer = () => 
{
    const [formStatus , setFormStatus] = useState('Edit')
    const onSubmit = (e) => 
    {
        let customerId = e.target[0].value;
        let CustomerName = e.target[1].value;
        let gender = e.target[2].value;
        let dob = e.target[3].value;
        let pin = e.target[4].value;
        let city = e.target[5].value;
        let state = e.target[6].value;
        let street = e.target[7].value;
        let role = e.target[8].value;
        let phone = e.target[9].value;
        let email = e.target[10].value;
        e.preventDefault()
        updateUser({userId:customerId,name:CustomerName,dob:dob,gender:gender,address:
            {
            pin,
            city,
            state,
            street
            },phone:phone,email:email,password :"Xoriant",role:role});
        setFormStatus('Edited')
        alert("Editing");
    }
    const onReset = (e) =>
    {
        e.preventDefault()
        e.target[0].value = null;
        e.target[1].value = null;
        e.target[2].value = null;
        e.target[3].value = null;
        e.target[4].value = null;
        e.target[5].value = null;
        e.target[6].value = null;
        e.target[7].value = null;
        e.target[8].value = null;
        e.target[9].value = null;
        e.target[10].value = null;
        setFormStatus('Edit')
        alert("Reseting....");
    }

    return(
        <><Navbar2 /><div className="container">
      <form className="form" onSubmit={onSubmit} onReset={onReset}>
        <div className='fund-image'>
          <img src={NC} width="60px"></img>
        </div>
        <div className='form-input'>
          <label className='label'>Customer Id</label>        
          <input className='text-field' type="number" name="CustomerId" placeholder="Customer ID" required></input>
          <label className='label'> Name</label>
          <input className="text-field" type="text" name="Name" placeholder='Name' required />
          <div className='form-input'>
            <label className='label'>Gender</label>
            <select className='Drop1' required>
              <option value={''}>Select Gender</option>
              <option value={'Male'}>Male</option>
              <option value={'Female'}>Female</option>
              <option value={'Other'}>Other</option>
            </select>
          </div>
        </div>
        <div className='form-input'>
          <label className='label'>DOB</label>
          <input type='date' required></input>
          <div className='form-input1'>
            <label className='label'>PinCode</label>
            <input className="text-field" type="number" name="PinCode" placeholder='PinCode' required />
          </div>
        </div>

        <div className='form-input'>
          <label className='label'>City</label>
          <input className="text-field" type="text" name="City" placeholder='City' required />
          <div className='form-input1'>
            <label className='label'>State</label>
            <input className="text-field" type="text" name="State" placeholder='State' required />
          </div>
        </div>

        <div className='form-input'>
          <label className='label'>Street</label>
          <input  className = "text-field" type='text' name = "Street" placeholder = "Street" required></input>
          <div className='form-input1'>
            <label className='label'>Role</label>
            <input className="text-field" type="text" name="Role" placeholder='Role' required />
          </div>
        </div>
        <div className='form-input'>
          <label className='label'>Tel No.</label>
          <input className="text-field" type="text" name="Number" placeholder='Mobile No' required />
          <div className='form-input1'>
            <label className='label'>Email Id</label>
            <input className="text-field" type="text" name="Email ID" placeholder='Email - ID' required />
          </div>
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

export default EditCustomer;
