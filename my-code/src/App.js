import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route path="/"><News pageSize={5} country="us" catagory="general"/></Route>
          <Route path="/business"><News pageSize={5} country="us" catagory="business"/></Route>
          <Route path="/entertainment"><News pageSize={5} country="us" catagory="entertainment"/></Route>
          <Route path="/general"><News pageSize={5} country="us" catagory="general"/></Route>
          <Route path="/science"><News pageSize={5} country="us" catagory="science"/></Route>
          <Route path="/sports"><News pageSize={5} country="us" catagory="sports"/></Route>
          <Route path="/technology"><News pageSize={5} country="us" catagory="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App

