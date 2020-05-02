import React, { Component } from 'react'
import './Bathroomcard.css'

export default class Bathroomcard extends Component {
    state ={
        theme: ""
    }

    showCards = () => {
        return this.props.furnitures.map(bathroomcard => {
            return <img key={bathroomcard.id} src = {bathroomcard.image}/>
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

