import React from 'react'
import './MatchThemeFurniture.css'

export default function MatchThemeFurniture(props) {
    const themeMatchToFurniture = (props) => {
        return props.matchedFurniture.map(themeMatchToFurniture => {
            return <div className="style-furnitureCard" onClick = {(event) => {
                console.log("alice")
                {props.addFurnitureToIdeaBoard ? props.addFurnitureToIdeaBoard(themeMatchToFurniture) : props.removeFurnitureFromIdeaBoard(themeMatchToFurniture)}
            }}>
            <img src={themeMatchToFurniture.image}/></div>
        })
    } 

    return (
        <div className="container-livingRoomFurniture">
             {themeMatchToFurniture(props)}
        </div>
    )
}
