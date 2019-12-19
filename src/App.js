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
import Assessments from './components/Assessments/Assessments';
import PHQ9 from './components/Assessments/PHQ-9';
import GAD7 from './components/Assessments/GAD-7';
import Statistics from './components/Statistics/Statistics';
import Account from './components/Account/Account';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Reusable/Loader.css';
import './components/Navbar/TopNavbar.css';
import './components/Journal/Journal.css';
import './components/Assessments/Assessments.css';
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
            <PrivateRoute exact path="/assessments" component={Assessments}/>
            <PrivateRoute exact path="/assessments/PHQ9" component={PHQ9}/>
            <PrivateRoute exact path="/assessments/GAD7" component={GAD7}/>
            <PrivateRoute exact path="/statistics" component={Statistics}/>
            <PrivateRoute exact path="/account" component={Account}/>
        </Switch>
        </div>
    </Router>
    )
  }
}


