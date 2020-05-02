import React, { Component } from 'react'
import './Kitchencard.css'

export default class Kitchencard extends Component {
    state ={
        theme: ""
    }

    showCards = () => {
        return this.props.furnitures.map(kitchencard => {
            return <img key={kitchencard.id} src = {kitchencard.image}/>
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
