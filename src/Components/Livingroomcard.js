import React, { Component } from 'react'
import './Livingroomcard.css'

export default class Livingroomcard extends Component {

    state={
        livingroomcards: []
    }
    
    componentDidMount(){
    fetch('http://localhost:3000/furnitures')
        .then(res => res.json())
        .then(res => 
            this.setState({livingroomcards: res}))
    }

    showCards = () => {
        return this.state.livingroomcards.map(livingroomcard => {
            return <img key={livingroomcard.id} src = {livingroomcard.image}/>
        })
    }

    render() {
        return (
            <div className="container-livingroomcard">
                {this.showCards()}
            </div>
        )
    }
}
