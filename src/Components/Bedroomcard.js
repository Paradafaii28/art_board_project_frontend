import React, { Component } from 'react'
import './Bedroomcard.css'

export default class Bedroomcard extends Component {
    state ={
        theme: ""
    }

    showCards = () => {
        return this.props.furnitures.map(bedroomcard => {
            return <img key={bedroomcard.id} src = {bedroomcard.image}/>
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

