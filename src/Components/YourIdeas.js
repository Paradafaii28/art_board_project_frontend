import React, { Component } from 'react'
import './YourIdeas.css'

export default class YourIdeas extends Component {

    state = {
        yourRoomIdeas: {}
    }

    componentDidMount(){
        fetch(`http://localhost:3000/rooms/31`)
         .then(res => res.json())
         .then(res => this.setState({yourRoomIdeas: res}))
    }

    showRoomIdeas = () => {
        if (this.state.yourRoomIdeas.furnitures)
        return this.state.yourRoomIdeas.furnitures.map(furniture => {
            return <div><img src={furniture.image}/></div> 
        })
    }
    
    
    render() {
        return (
            <div className="your-ideas-board-container">
                <div className="room-title">
                    <h1>Living Room</h1>
                    <h2>Theme: Vintage</h2>
                </div>
                <div className="all-card-container">
                {this.showRoomIdeas()}
                </div>
            </div>
        )
    }
}
