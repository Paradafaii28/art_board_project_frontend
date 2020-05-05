import React, { Component } from 'react'
import './Ideaboard.css'

export default class Ideaboard extends Component {
    state = {
        color: ""
    }

    changeTheColor = (paramater) => {
        this.setState({color: paramater})
    }

    render() {
        return (
            <div className="container">
                <div className="background-ideaboard"></div>
                <div className="left-container" style={{borderColor: this.state.color}}>
                    <div className="ideaboard-container"></div>
                </div>
                <div className="right-container">
                    <div className="custom-color">
                        <h1 className="custom-color-title">Colors</h1>
                        <h3 className="custom-color-title1">Choose your own color of ideaboard</h3>
                        <ul className="switcher">
                            <li className="color-1" onClick={(event) => this.changeTheColor("#bb3b0e")}></li>
                            <li className="color-2" onClick={(event) => this.changeTheColor("#ee720c")}></li>
                            <li className="color-3" onClick={(event) => this.changeTheColor("#e3b04b")}></li>
                            <li className="color-4" onClick={(event) => this.changeTheColor("#f8b400")}></li>
                            <li className="color-5" onClick={(event) => this.changeTheColor("#2c786c")}></li>
                            <li className="color-6" onClick={(event) => this.changeTheColor("#004445")}></li>
                            <li className="color-7" onClick={(event) => this.changeTheColor("#7d5a5a")}></li>
                            <li className="color-8" onClick={(event) => this.changeTheColor(" #c2e8ce")}></li>
                            <li className="color-9" onClick={(event) => this.changeTheColor("#25ecad")}></li>
                            <li className="color-10" onClick={(event) => this.changeTheColor("#ff9292")}></li>
                            <li className="color-11" onClick={(event) => this.changeTheColor("#ff4291")}></li>
                            <li className="color-12" onClick={(event) => this.changeTheColor("#00a8cc")}></li>
                            <li className="color-13" onClick={(event) => this.changeTheColor("#c3edea")}></li>
                            <li className="color-14" onClick={(event) => this.changeTheColor("#f6d198")}></li>
                            <li className="color-15" onClick={(event) => this.changeTheColor("#ef962d")}></li>
                            <li className="color-16" onClick={(event) => this.changeTheColor("#b0a565")}></li>
                            <li className="color-17" onClick={(event) => this.changeTheColor("#ef962d")}></li>
                            <li className="color-18" onClick={(event) => this.changeTheColor("#e47676")}></li>
                            <li className="color-19" onClick={(event) => this.changeTheColor("#00adb5")}></li>
                            <li className="color-20" onClick={(event) => this.changeTheColor("#ffc045")}></li>
                            <li className="color-21" onClick={(event) => this.changeTheColor("#ff7844")}></li>
                            <li className="color-22" onClick={(event) => this.changeTheColor("#bed7ee")}></li>
                            <li className="color-23" onClick={(event) => this.changeTheColor("#c1a57b")}></li>
                            <li className="color-24" onClick={(event) => this.changeTheColor("#888888")}></li>
                            <li className="color-25" onClick={(event) => this.changeTheColor("#27496d")}></li>
                            <li className="color-26" onClick={(event) => this.changeTheColor("#4e8bfb")}></li>
                            <li className="color-27" onClick={(event) => this.changeTheColor("#132f62")}></li>
                            <li className="color-28" onClick={(event) => this.changeTheColor("#1515b6")}></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
