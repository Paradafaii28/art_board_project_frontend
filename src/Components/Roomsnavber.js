import React, { Component } from 'react'
import './Roomsnavbar.css'
import {Link} from 'react-router-dom'

export default class Roomsnavbar extends Component{


    render(){
        return (
            <section className="dropdown-container">
                    <div className="dropdown" >
                            <button className="dropbtn"><Link to='/livingroomcard' onClick={(event) => this.props.selectTheme("")}>Living Room</Link>
                                <ul className="dropdown-content">
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Earth Tone")}>Earth tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Vintage Tone")}>Vintage tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Warm Tone")}>Warm tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Winter Tone")}>Winter tone</li>
                                </ul>
                            </button>
                            <button className="dropbtn"><Link to='/kitchencard' onClick={(event) => this.props.selectTheme("")}>Kitchen & Dining</Link>
                                <ul className="dropdown-content">
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Earth Tone")}>Earth tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Vintage Tone")}>Vintage tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Warm Tone")}>Warm tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Winter Tone")}>Winter tone</li>
                                </ul>
                            </button><button className="dropbtn"><Link to='/bedroomcard' onClick={(event) => this.props.selectTheme("")}>Bedroom</Link>
                                <ul className="dropdown-content">
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Earth Tone")}>Earth tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Vintage Tone")}>Vintage tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Warm Tone")}>Warm tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Winter Tone")}>Winter tone</li>
                                </ul>
                            </button><button className="dropbtn"><Link to='/bathroomcard' onClick={(event) => this.props.selectTheme("Earth Tone")}>Bathroom</Link>
                                <ul className="dropdown-content">
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Earth Tone")}>Earth tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Vintage Tone")}>Vintage tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Warm Tone")}>Warm tone</li>
                                    <li className="style-list" onClick={(event) => this.props.selectTheme("Winter Tone")}>Winter tone</li>
                                </ul>
                            </button>
                    </div>
            </section>
        )
    }
}
