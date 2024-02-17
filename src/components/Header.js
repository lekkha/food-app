import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //subsscribing to the store using selector 
  const cartItems = useSelector((store) => store.cart.items); //will read the store -> slice named cart -> array named items
  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-green-50 shadow-lg">
      <div className="logo-container">
        <img className="logo w-20" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/" >Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length})</Link></li>

          <button
            className="login"
            onClick={() => loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login")}
          >{loginbtn}</button>

          <li className="mx-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header; 