import React from 'react'
import './Navbar.css'
import Logo from '../theme/logo.png';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="container-navbar">
            <div className="container-logo">
                <img src= {Logo} className="style-logo"/>
            </div>
            <ul className="style-navbar">
                <Link to='/'>
                <li>Home</li>
                </Link>
                <li>Roomidea</li>
                <Link to="/ideaboard">
                <li>Ideaboard</li>
                </Link>
                <li>Login</li>
            </ul>
        </div>
    )
}

