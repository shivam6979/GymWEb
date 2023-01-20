import React from 'react'
import {Link} from "react-router-dom"

import './Header.css'
import Logo from '../../logo/logo.png'
const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt='' className='logo'/>
        <ul className='header-menu'>
            <li><Link to='/'>Fitness</Link></li>
            <li><Link to='/nutrition'>Nutrition</Link></li>
            <li><Link to='/gyms'>Gyms</Link></li>
            <li><Link to='/partner'>Become Wtf Partner</Link></li>
            <li><Link to='/about-us'>About us</Link></li>
            <li><Link to='/login'>Login</Link></li>

        </ul>
    </div>
  )
}

export default Header