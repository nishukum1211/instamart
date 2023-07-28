import { useState, useContext } from "react";
import Logo from "../assets/foodvilla2.png";
import { Link } from "react-router-dom";
import Offline from "../utils/useOffline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const loggedInUser = () => {
  return false;
}
 
const Title = () => (
    <a href="/">
      <img
        className="h-28 p-2"
        alt="logo"
        src={Logo}
      />
    </a>
  );
  
  const Header = () => {
    //const [title, setTitle] = useState("Food Villa");//if my title changes usestate update my UI quickly,it will rerender this title
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const [getLocalVariables, setLocalVariables] = useLocalStorage(); 
    const isOnline = Offline(); 
    const {user} = useContext(UserContext); 
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);                                      
    return (
      <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
            <Link to="/">
              <li className="px-2">Home</li>
            </Link>
            <li className="px-2">
              <Link to = "/about">
                About
              </Link>
            </li>
            <li className="px-2"><Link to="/contact">Contact</Link></li>
            
            <Link to="/Instamart"><li className="px-2">Instamart</li></Link> 
            <Link to="/cart" ><li className="px-2">Cart- {cartItems.length}items</li></Link>  
          </ul>
          
        </div>
        <h1>{isOnline?'✅':'❌'}</h1>
        <span className="p-10 font-bold text-red-500">{user.name}</span>
        {
          isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>)
        }
      </div>
    );
  };
  
  export default Header;
  