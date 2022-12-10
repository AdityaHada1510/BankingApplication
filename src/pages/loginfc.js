import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function loginfc() {
    let navigate = useNavigate();
    const handleLogin = (e)=>{
      e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value; 

    if(username === 'user' && password === 'password') {
      navigate('/CustomerDashboard')
    }
    else if(username === 'admin' && password === 'password') 
    {
      navigate('/AdminDashboard')
    }
    else{
      alert('Wrong Username/ Password');
    }
  }

  return (
    <div className='container'>
          <div className='login-container'>
            <div className='user-image'>
              <img src={UI}  width="75px"></img>
            </div>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-input">
                    <label className="label" htmlFor="email">Username</label>
                    <input className="text-field" type="text" name="email" placeholder="Username" required />
                </div>
                <div className="form-input">
                    <label className="label" htmlFor="password">Password</label>
                    <input className="text-field" type="password" name="password" placeholder='Password' required/>
                </div>
                <button className="primary">Login</button>
            </form>
            <div className='form-text'>
              <p><a href="#">Forgot Password?</a></p>
              <p>Dont have an account ? <a href='#'>Create Account</a> </p>
            </div>
          </div>
      </div>
  )
}
