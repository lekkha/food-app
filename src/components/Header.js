import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'; 

const Header = () => {

  const[loginbtn, setLoginbtn] = useState("Login"); 

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src= {LOGO_URL} alt="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
          <button 
          className="login" 
          onClick={() => loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login")} 
          >{loginbtn}</button>
        </div>
      </div>
    );
  };

  export default Header; 