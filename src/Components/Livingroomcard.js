import React, { Component } from 'react'
import './Livingroomcard.css'
import IdeaForm from './IdeaForm'

export default class Livingroomcard extends Component {

    showCards = () => {
        let furnitures = this.props.furnitures
        if(this.props.theme){
            furnitures = this.props.furnitures.filter(furniture => {
                return furniture.theme.tone === this.props.theme 
            })
        }
        return furnitures.map(livingRoomCard => {
            return <div className="style-card"><img key={livingRoomCard.id} src = {livingRoomCard.image}/></div>
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


