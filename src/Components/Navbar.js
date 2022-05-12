import React,{useState} from 'react'
import logo from '../assets/img/pizzaLogo.png'
import {Link} from 'react-router-dom'
import '../styles/navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  const [openLinks,SetOpenLinks]=useState(false);
  const ToggleNavbar=()=>{
      SetOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={logo} alt="" />
            <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
            </div>
        </div>
        <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contat">Contact</Link>
                <button onClick={ToggleNavbar}>
                  <MenuIcon/>
                </button>
        </div>
    </div>
  )
}

export default Navbar