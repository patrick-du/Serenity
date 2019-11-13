import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Bootstrap Imports
import { Container, Row, Col } from 'react-bootstrap';

// Auth Component Imports
import Welcome from './components/Authentication/Welcome';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import Dashboard from './Dashboard/Dashboard';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Loader.css';
import './Dashboard/Dashboard.css';
import './components/SideNav/SideNav.css';
import './components/Journal/Journal.css';
import './components/Exercises/Exercises.css';
import './components/Community/Community.css'
import './components/Account/Account.css';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
    )
  }
}


