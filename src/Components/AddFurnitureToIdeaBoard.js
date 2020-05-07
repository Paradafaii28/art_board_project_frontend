import React from 'react'
import './AddFurnitureToIdeaBoard.css'

export default function AddFurnitureToIdeaBoard(props) {
    console.log(props)
    const  AllAddMatchedFurnitureCards = (props) => {
        return props.addMatchedFurnitureCards.map(addMatchedFurnitureCard => {
            return<div className="add-matched-furniture-card" onClick = {(event) => {
                {props.removeFurnitureFromIdeaBoard(addMatchedFurnitureCard)}}}>
                <img src={addMatchedFurnitureCard.image}/></div>
        })
    }
    return (
        <div className="container-all-add-match-furniture-cards">
            {AllAddMatchedFurnitureCards(props)}
        </div>
    )
}


