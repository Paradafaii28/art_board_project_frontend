import React from 'react'
import Kitchenbg from '../theme/kitchen-bg3.jpg';
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
        </div>
    )
}
