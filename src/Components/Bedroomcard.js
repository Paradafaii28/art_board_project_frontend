import React, { Component } from 'react'
import './Bedroomcard.css'

export default class Bedroomcard extends Component {
   
    showCards = () => {
        let furnitures = this.props.furnitures
        if(this.props.theme){
            furnitures = this.props.furnitures.filter(furniture => {
                return furniture.theme.tone === this.props.theme 
            })
        }
        return furnitures.map(bedRoomCard => {
            return <div className="style-card"><img key={bedRoomCard.id} src = {bedRoomCard.image}/></div>
        })
    }

    render() {
        return (
            <div className="container-bedroomcard">
                {this.showCards()}
            </div>
        )
    }
}

