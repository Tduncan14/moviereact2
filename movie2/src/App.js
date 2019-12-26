import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserHistory as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (

    <Router>
      <Switch>
      <Route path="/"  component={Home}/>
      <Route path="/movie" component={Movie}/>
      <Route path="/help" component={Help}/>
      <Route component={Errors}/>
      </Switch>
    </Router>
 
  );
}

export default App;
