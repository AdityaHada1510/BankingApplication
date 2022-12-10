import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import UI from './../images/UserIcon.png'
import Navbar from './../components/Navbar/index'
import { loginUser } from './helper/HelperUser';
const Login = () => {
    let navigate = useNavigate();
    const [user,setUser] = useState(null);
    const handleLogin = async (e) => {
      e.preventDefault()
    let username = e.target[0].value;
    let password = e.target[1].value; 
    const data = await loginUser({userId:username, password})
    console.log(data);  
    setUser(data);
    if(data == null)
    {
      alert("Id is invalid")
    }
    else{
        // setIsuser(true);
        localStorage.setItem("id",JSON.stringify(data.userId))
        // localStorage.setItem("user",JSON.stringify(data))
        if(data.role.toLowerCase() === "manager"){
            localStorage.setItem('role','manager');
            navigate("/ManagerDashboard")
            // sessionStorage.setItem('isUser','false');
        }    
        else{
            // sessionStorage.setItem('isUser','true');
            localStorage.setItem('role','customer');
            navigate("/CustomerDashboard")
        }
    }
  }    
    // if(username === 'Manager' && password === 'Xoriant') 
    // {
      
    //   navigate('/ManagerDashboard')
    // }
    // else if(username ==="Customer" && password === "Xoriant")
    // {
    //   navigate('/CustomerDashboard')
    // }
    // else{
    //   alert('Wrong Username or Password');
    // }

  return (
    <><Navbar /><div className='container'>

      <div className='login-container'>
        <div className='user-image'>
          <img src={UI} width="75px"></img>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-input">
            <label className="label" htmlFor="email">Username</label>
            <input className="text-field" type="text" name="email" placeholder="Id" required />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="password">Password</label>
            <input className="text-field" type="password" name="password" placeholder='Password' required />
          </div>
          <button className="primary">Login</button>
        </form>
        <div className='form-text'>
          <p><a href="#">Forgot Password?</a></p>
          <p>Dont have an account?<a href='#'>Create Account</a> </p>
        </div>
      </div>
    </div></>
  );
}

export default Login;
