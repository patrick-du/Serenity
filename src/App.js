import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import { PrivateRoute } from './PrivateRoute';

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
import './components/Reusable/Loader.css';
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
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <PrivateRoute exact path="/journal" component={Journal}/>
            <PrivateRoute exact path="/fitness" component={Fitness}/>
            <PrivateRoute exact path="/statistics" component={Statistics}/>
            <PrivateRoute exact path="/account" component={Account}/>
        </Switch>
        </div>
    </Router>
    )
  }
}


