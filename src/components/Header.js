import { APP_LOGO } from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className='header'>
            <div className = 'logo-container'>
                <img className='logo' src= {APP_LOGO}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" 
                        onClick={() => {
                            console.log("login button clicked")
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                            }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;