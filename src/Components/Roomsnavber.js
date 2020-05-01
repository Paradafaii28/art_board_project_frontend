import React from 'react'
import './Roomsnavbar.css'
import {Link} from 'react-router-dom'

export default function Roomsnavbar(){

        return (
            <section className="showrooms-container">
                    <ul className="showrooms" >
                        <Link to='/livingroomcard'><li className="rooms_title">Living Room</li></Link>
                        <Link to='/kitchencard'><li className="rooms_title">Kitchen & Dining</li></Link>
                        <Link to='/bedroomcard'><li className="rooms_title">Bedroom</li></Link>
                        <Link to='/bathroomcard'><li className="rooms_title">Bathroom</li></Link>
                    </ul>
            </section>
        )
}





 {/* <div className="image-showroom-container">
                        <h1>DESIGN YOUR OWN HOUSE</h1>
                        <img src= {Kitchenbg} className="image-showroom"/>
                    </div> */}