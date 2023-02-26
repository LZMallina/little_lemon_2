import { Switch, Route, Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
function Header() {
    return (
        <header>
        <img src={logo} alt='logo' className="header_logo"></img>
        <nav className ="nav_bar">
                <ul>
                    <li><Link to="/" className ="nav-item">HOME</Link></li>
                    <li><Link to="/about" className ="nav-item">OUR STORY</Link></li>
                    <li><Link to="/menu" className ="nav-item">MENU</Link></li>
                    <li><Link to="/reservation" className ="nav-item">RESERVATION</Link></li>
                    <li><Link to="/orderonline" className ="nav-item">ORDER ONLINE</Link></li>
                    <li><Link to="/login" className ="nav-item">LOGIN</Link></li>
                </ul>
            </nav>
            <div>
                <FontAwesomeIcon icon={faBars} className ="toggle-nav"/>
                <FontAwesomeIcon icon={faXmark} className ="toggle-nav"/>
            </div>  
      </header>
    )
}

export default Header;