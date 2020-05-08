import React from 'react'
import Kitchenbg from '../theme/kitchen-bg3.jpg';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


export default function Homebackground() {
    return (
        <div>
            <div className="image-showroom-container">
                <Link to="/ideaform">
                    <h1 className="design-your-ownhouse">DESIGN YOUR OWN HOUSE</h1>
                </Link>
                <img src= {Kitchenbg} className="image-showroom"/>
            </div>
            <div className="footer-container">
                <ul className="style-navbar-footer">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to="/roomideas">
                        <li>Roomidea</li>
                    </Link>
                    <Link to="/ideaboard">
                        <li>Ideaboard</li>
                    </Link>
                    <Link to="/yourideas">
                        <li>Your Ideas</li>
                    </Link>
                        <li>Login</li>
                </ul>
            </div>
        </div>
    )
}
