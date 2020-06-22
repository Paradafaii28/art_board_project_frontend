import React, { Component } from 'react'
import './Bathroomcard.css'

export default class Bathroomcard extends Component {
    
    showCards = () => {
        let furnitures = this.props.furnitures
        if(this.props.theme){
            furnitures = this.props.furnitures.filter(furniture => {
                return furniture.theme.tone === this.props.theme 
            })
        }
        return furnitures.map(bathRoomCard => {
            return <div className="style-card"><img key={bathRoomCard.id} src = {bathRoomCard.image}/></div>
        })
    }

    render() {
        return (
            <div className="container-bathroomcard">
                {this.showCards()}
            </div>
        )
    }
}

