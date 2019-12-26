import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Errors from './components/Error';
import Movie from './components/Movie';
import Help from './components/Help';
import About from './components/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/"component={Home}/>
      <Route exact path="/movie" component={Movie}/>
      <Route exact path="/help" component={Help}/>
      <Route exact path="/about/:movie" component={About}/>
      <Route component={Errors}/>
      </Switch>
    </Router>
 
  );
}

export default App;
