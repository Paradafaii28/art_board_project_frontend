import React from 'react';
import Roomsnavbar from './Components/Roomsnavber';
import Navbar from './Components/Navbar';
import Livingroomcard from './Components/Livingroomcard';
import Kitchencard from './Components/Kitchencard';
import Bedroomcard from './Components/Bedroomcard';
import Bathroomcard from './Components/Bathroomcard';
import Homebackground from './Components/Homebackground';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <header className="header-container">
        <Navbar/>
        </header>
      <div className="App">
        <Roomsnavbar/>
        <Route exact path ="/livingroomcard" component={Livingroomcard}/>
        <Route exact path ="/kitchencard" component={Kitchencard}/>
        <Route exact path ="/bedroomcard" component={Bedroomcard}/>
        <Route exact path ="/bathroomcard" component={Bathroomcard}/>
        <Route exact path ="/" component={Homebackground}/>
      </div>
    </Router>
  );
}

export default App
