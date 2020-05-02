import React, { Component } from 'react';
import Roomsnavbar from './Components/Roomsnavber';
import Navbar from './Components/Navbar';
import Livingroomcard from './Components/Livingroomcard';
import Kitchencard from './Components/Kitchencard';
import Bedroomcard from './Components/Bedroomcard';
import Bathroomcard from './Components/Bathroomcard';
import Homebackground from './Components/Homebackground';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  
  state={
    furnitures: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/furnitures')
      .then(res => res.json())
      .then(res => this.setState({furnitures: res}))
  }


  livingRoomsFurniture = () => {
    return this.state.furnitures.filter(furniture => {
        return furniture.category === "Home offices" || furniture.category === "Sofa" || furniture.category === "Table Cabinet"
    })
  }

  kitchenRoomsFurniture = () => {
    return this.state.furnitures.filter(furniture => {
        return furniture.category === "Dining set"})
  }

  bedRoomsFurniture = () => {
    return this.state.furnitures.filter(furniture => {
        return furniture.category === "Bedroom set" || furniture.category === "Nightstands"
      })
  }

  bathRoomsFurniture = () => {
    return this.state.furnitures.filter(furniture => {
        return furniture.category === "Bath vanities"})
  }

  render(){
    return (
      <Router>
          <header className="header-container">
          <Navbar/>
          </header>
        <div className="App">
          <Roomsnavbar/>
          <Route exact path ="/livingroomcard" render={(routerProps) => <Livingroomcard furnitures={this.livingRoomsFurniture()}/>} />
          <Route exact path ="/kitchencard" render={(routerProps) => <Kitchencard furnitures={this.kitchenRoomsFurniture()}/>}/>
          <Route exact path ="/bedroomcard" render={(routerProps) => <Bedroomcard furnitures={this.bedRoomsFurniture()}/>}/>
          <Route exact path ="/bathroomcard" render={(routerProps) => <Bathroomcard furnitures={this.bathRoomsFurniture()}/>}/>
          <Route exact path ="/" component={Homebackground}/>
        </div>
      </Router>
    );
  }
}

export default App
