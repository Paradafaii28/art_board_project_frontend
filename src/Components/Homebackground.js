import React from 'react'
import Kitchenbg from '../theme/kitchen-bg3.jpg';


export default function Homebackground() {
    return (
        <div>
            <div className="image-showroom-container">
                <h1>DESIGN YOUR OWN HOUSE</h1>
                <img src= {Kitchenbg} className="image-showroom"/>
            </div>
        </div>
    )
}
