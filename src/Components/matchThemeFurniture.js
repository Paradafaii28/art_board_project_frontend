import React from 'react'
import './MatchThemeFurniture.css'

export default function MatchThemeFurniture(props) {
    const themeMatchToFurniture = (props) => {
        return props.matchedFurniture.map(themeMatchToFurniture => {
            return <div className="style-furnitureCard" onClick = {(event) => {
                {props.addFurnitureToIdeaBoard ? props.addFurnitureToIdeaBoard(themeMatchToFurniture) : props.removeFurnitureFromIdeaBoard(themeMatchToFurniture)}
            }}>
            {/* <h1>{themeMatchToFurniture.category}</h1> */}
            <img src={themeMatchToFurniture.image}/></div>
        })
    } 

    return (
        <div className="container-allmatchfurniture">
            <div className="container-title-matchfurniture">
                <h1>Build your own board</h1>
                <h3>(Choose the furniture below)</h3>
            </div>
            <div className="container-matchfurniture">
                {themeMatchToFurniture(props)}
            </div>
        </div>
    )
}
