import React, { useState } from 'react';
import Continent from './views/Continents/Continent';
import ContinentDetails from './views/ContinentDetails/ContinentDetails';
import HomePage from './views/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    
      <Switch>
      <Route path="/continents/:code">
          <ContinentDetails />
        </Route>
        <Route path="/continents">
          <Continent />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      
        
      </Switch>

  </Router>
  );
}

export default App;
