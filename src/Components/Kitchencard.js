import React, { Component } from 'react'
import './Kitchencard.css'

export default class Kitchencard extends Component {
   
    showCards = () => {
        let furnitures = this.props.furnitures
        if(this.props.theme){
            furnitures = this.props.furnitures.filter(furniture => {
                return furniture.theme.tone === this.props.theme 
            })
        }
        return furnitures.map(kitchenCard => {
            return <div className="style-card"><img key={kitchenCard.id} src = {kitchenCard.image}/></div>
        })
    }

    render() {
        return (
            <div className="container-kitchencard">
                {this.showCards()}
            </div>
        )
    }
}
