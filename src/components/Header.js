import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {

  const [loginbtn, setLoginbtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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