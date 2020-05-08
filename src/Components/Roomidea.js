import React, { Component } from 'react'
import './Roomidea.css'

export default class Roomidea extends Component {

    state = {
        roomideas: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/roomideas')
            .then(res => res.json())
            .then(res => this.setState({roomideas: res}))
    }

    showAllRoomIdeas = () => {
        return this.state.roomideas.map(roomidea => {
            return <div className="style-room-idea-card"><img src={roomidea.image}/></div>
        })
    }
    render() {
        return (
            <div className="container-show-all-room">
                {this.showAllRoomIdeas()}
            </div>
        )
    }
}


