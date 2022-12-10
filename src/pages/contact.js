import React from 'react';
import { useState } from 'react';
import "./css/contact.css";
import CU from './../images/ContactUS.png'
import Navbar from './../components/Navbar/index'
const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send')
  const onSubmit = (e) => {
    let username = e.target[0].value;
    let email = e.target[1].value;
    let message = e.target[2].value;
    e.preventDefault();
    setFormStatus('Submitted')
    alert("Will connect with you soon");
  }

  const onReset = (e) =>{
    e.preventDefault()
    e.target[0].value = null;
    e.target[1].value = null;
    e.target[2].value = null;
    setFormStatus('Delete')
    alert("Reseting....");
  }


  return (
    <><Navbar /><div className='main-container'>
      <div className="container">
        <form className="form" onSubmit={onSubmit} onReset={onReset}>
          <div className='contact-image'>
            <img src={CU} width="65px"></img>
          </div>
          <div className="form-input">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input className="text-field" type="text" id="name" placeholder="Name" required />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input className="text-field" type="email" placeholder="first.last@domain.com" id="email" required />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea className="text-field" id="message" required />
          </div>
          <button className="primary" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div></>
  )
}
export default Contact;