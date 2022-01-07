import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { Button } from './Button';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
    const [click ,setClick] = useState(false);
    const [button,setButton]=useState(true)
    const handleitem =()=>{
        setClick(!click);
    }
    const closemenu =()=>{
        setClick(false)
    }

    const showButton=()=>{
        if(window.innerWidth <= 960){ setButton(false)} else{setButton(true)}
    }
   

    window.addEventListener('resize',showButton)

    return (
        <div className='navbar'>
            <div className='navber_contianer'>
                <Link to="/" className='navbar_Logo'  > TRVL < ModeOfTravelIcon className='navbar_ICon'/> </Link>

                <div className='menu_icon' onClick={handleitem}>
                {click? (<CloseIcon className='CLOSE_ICON'/>) : (<MenuIcon className='MENU_ICON'/>)}
                </div>

                <ul className= {click? 'nav_menu active' : 'nav_menu'}>
                    <li className='nav_item'>
                        <Link to="/" className='nav_links' onClick={closemenu}> HOME </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to="/services" className='nav_links' onClick={closemenu}> SERVICES </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to="/products" className='nav_links' onClick={closemenu}> PRODUCTS </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to="/signup" className='nav_links_mobile' onClick={closemenu}> Sign up </Link>
                    </li>
                </ul>
                {button && <div className='bt'><Button buttonStyle='btn--outline'>SIGN UP</Button></div>}
            </div>
        </div>
    )
}

export default Navbar
