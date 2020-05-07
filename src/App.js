import React, { Component } from 'react';
import Roomsnavbar from './Components/Roomsnavber';
import Navbar from './Components/Navbar';
import Livingroomcard from './Components/Livingroomcard';
import Kitchencard from './Components/Kitchencard';
import Bedroomcard from './Components/Bedroomcard';
import Bathroomcard from './Components/Bathroomcard';
import Homebackground from './Components/Homebackground';
import Ideaboard from './Components/Ideaboard';
import IdeaForm from './Components/IdeaForm';
import MatchThemeFurniture from './Components/MatchThemeFurniture';
import './App.css';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

class App extends Component {
  
  state={
    furnitures: [],
    theme: "",
    matchedFurniture: [],
    addFurniture: []
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/furnitures')
    .then(res => res.json())
    .then(res => this.setState({furnitures: res}))
  }
  
 
  selectTheme = (parameter) => {
    this.setState({theme: parameter})
  }

  livingRoomsFurniture = () => {
    return this.state.furnitures.filter(furniture => {
        return furniture.category === "Living Room" 
    })
  }

  kitchenRoomsFurniture = () => {
    return this.state.furnitures.filter(furniture => {
        return furniture.category === "Kitchen and Dining"})
  }

  bedRoomsFurniture = () => {
    return this.state.furnitures.filter(furniture => {
        return furniture.category === "Bedroom" 
      })
  }

  bathRoomsFurniture = () => {
    return this.state.furnitures.filter(furniture => {
        return furniture.category === "Bathroom"})
  }

  matchedFurniture = (name, tone) => {
      const currentMatchedFurniture = this.state.furnitures.filter(furniture => {
            return furniture.category === name && furniture.theme.tone === tone  
      })
      this.setState({matchedFurniture: currentMatchedFurniture})
  }

  addFurnitureToIdeaBoard = (newFurniture) => {
    if (!this.state.addFurniture.find(currentFurniture => newFurniture === currentFurniture)){
        this.setState({addFurniture:[...this.state.addFurniture, newFurniture]})
    }
  }

  removeFurnitureFromIdeaBoard = (newFurniture) =>{
    const removedFurniture = this.state.addFurniture.filter(currentFurniture => currentFurniture !== newFurniture)
    this.setState({
      addFurniture:removedFurniture
      // going to filter the one and set the newstate to it give back in the array
    })
  }

  render(){
    return (
      <>
          <header className="header-container">
            <Navbar/>
            </header>
          <div className="App">
            {this.props.location.pathname === "/ideaboard" || this.props.location.pathname === "/ideaform" ? null : <Roomsnavbar selectTheme={this.selectTheme}/>}
            <Route exact path ="/livingroomcard" render={(routerProps) => <Livingroomcard theme={this.state.theme} furnitures={this.livingRoomsFurniture()} {...routerProps}/>} />
            <Route exact path ="/kitchencard" render={(routerProps) => <Kitchencard  theme={this.state.theme} furnitures={this.kitchenRoomsFurniture()} {...routerProps}/>}/>
            <Route exact path ="/bedroomcard" render={(routerProps) => <Bedroomcard  theme={this.state.theme} furnitures={this.bedRoomsFurniture()} {...routerProps}/>}/>
            <Route exact path ="/bathroomcard" render={(routerProps) => <Bathroomcard  theme={this.state.theme} furnitures={this.bathRoomsFurniture()} {...routerProps}/>}/>
            <Route exact path ="/" component={Homebackground}/>
            <Route exact path ="/ideaboard" render={(routerProps)=> <Ideaboard 
              matchedFurniture ={this.state.matchedFurniture}
              addFurniture ={this.state.addFurniture}
              addFurnitureToIdeaBoard ={this.addFurnitureToIdeaBoard}
              removeFurnitureFromIdeaBoard ={this.removeFurnitureFromIdeaBoard}
              />}/>
            <Route exact path ="/ideaform" render={(routerProps) => 
              <IdeaForm matchedFurniture ={this.matchedFurniture} {...routerProps}/>}
            />
          </div>
      </>
    );
  }
}

export default withRouter(App)
