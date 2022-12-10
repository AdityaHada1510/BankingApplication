import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Awards from './pages/awards';
import LogIn from './pages/Login';
import Fundtransfer from './pages/fundtransfer';
import BalanceEnquiry from './pages/balanceenquiry';
import MiniStatement from './pages/MiniStatement';
import CustomizeStatement from './pages/customizedstatement';
import NewCustomer from './pages/NewCustomer';
import NewAcc from './pages/NewAcc';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import DeleteCustomer from './pages/DeleteCustomer';
import DeleteAcc from './pages/DeleteAcc';
import Navbar2 from './components/Navbar/index2';
import Login from './pages/Login';
import ManagerDashboard from './pages/ManagerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import CustomerBE from './pages/CustomerBE';
import CustomerFT from './pages/CustomerFT';
import CustomerMS from './pages/CustomerMS';
import CustomerCS from './pages/CustomerCS';
import EditCustomer from './pages/EditCustomer';
import EditAcc from './pages/EditAcc';
import ChangePassword from './pages/ChangePassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/awards' exact element={<Awards/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/Login' exact element={<Login/>}/>
        <Route path = "/CustomerDashboard" exact element={<CustomerDashboard/>}/>
        {/* <Route path='/index2' exact element={<Navbar2/>}/> */}
        <Route path='/ManagerDashboard' exact element={<ManagerDashboard/>}/>
        <Route path='/ChangePassword' exact element={<ChangePassword/>}/>
        <Route path='/fundtransfer' exact element={<Fundtransfer/>}/>
        <Route path='/balanceenquiry' exact element={<BalanceEnquiry/>}/>
        <Route path='/MiniStatement' exact element={<MiniStatement/>}/>
        <Route path='/customizedStatement' exact element={<CustomizeStatement/>}/>
        <Route path='/NewCustomer' exact element={<NewCustomer/>}/>
        <Route path='EditCustomer' exact element={<EditCustomer/>}/>
        <Route path='/NewAcc' exact element={<NewAcc/>}/>
        <Route path='/EditAcc' exact element={<EditAcc/>}/>
        <Route path='/Deposit' exact element={<Deposit/>}/>
        <Route path='/Withdraw' exact element={<Withdraw/>}/>
        <Route path='/DeleteCustomer' exact element={<DeleteCustomer/>}/>
        <Route path='/DeleteAcc' exact element={<DeleteAcc/>}/>
        <Route path='/Logout' exact element={<Home/>}/>
        <Route path='/CBE' exact element={<CustomerBE/>}/>
        <Route path='/CFT' exact element={<CustomerFT/>}/>
        <Route path='/CMS' exact element={<CustomerMS/>}/>
        <Route path='/CCS' exact element={<CustomerCS/>}/>
      </Routes>
    </Router>
  );
}

export default App;