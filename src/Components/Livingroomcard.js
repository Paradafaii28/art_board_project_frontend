import React, { Component } from 'react'
import './Livingroomcard.css'

export default class Livingroomcard extends Component {
    state ={
        theme: ""
    }

    showCards = () => {
        return this.props.furnitures.map(livingroomcard => {
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


