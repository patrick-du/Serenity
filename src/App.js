import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Auth Component Imports
import Welcome from './components/Authentication/Welcome';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';

// Protected Component Imports 
import TopNavbar from './components/Navbar/TopNavbar';
import Dashboard from './components/Dashboard/Dashboard';
import Journal from './components/Journal/Journal';
import Fitness from './components/Exercises/Exercises';
import Statistics from './components/Statistics/Statistics';
import Account from './components/Account/Account';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Loader.css';
import './components/Navbar/TopNavbar.css';
import './components/Journal/Journal.css';
import './components/Exercises/Exercises.css';
import './components/Account/Account.css';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div class="app">
        <TopNavbar/>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/journal" component={Journal}/>
            <Route exact path="/fitness" component={Fitness}/>
            <Route exact path="/statistics" component={Statistics}/>
            <Route exact path="/account" component={Account}/>
        </Switch>
        </div>
    </Router>
    )
  }
}


