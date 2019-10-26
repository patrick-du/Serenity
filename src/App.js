import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Bootstrap Imports
import { Container, Row, Col } from 'react-bootstrap';


// Dashboard Component Imports
import SideNav from './components/SideNav/SideNav';
import Schedule from './components/Schedule/Schedule';
import Workouts from './components/Workouts/Workouts';
import NewWorkout from './components/Workouts/NewWorkout';
import Exercises from './components/Exercises/Exercises';
import Community from './components/Community/Community';
import Account from './components/Account/Account';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Loader.css';
import './Dashboard.css';
import './components/SideNav/SideNav.css';
import './components/Schedule/Schedule.css';
import './components/Workouts/Workouts.css';
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
        <Container className="appDash" fluid={true}>
          <Row noGutters={true}>
            <Col sm={2} md={2} lg={2}>
              <SideNav />
            </Col>
            <Col sm={10} md={10} lg={10} className="rightCol overflow-auto">
              <Switch>
                <Route exact path="/dashboard/schedule" component={Schedule} />
                <Route exact path="/dashboard/workouts" component={Workouts} />
                <Route exact path="/dashboard/newWorkout" component={NewWorkout} />
                <Route exact path="/dashboard/exercises" component={Exercises} />
                <Route exact path="/dashboard/community" component={Community} />
                <Route exact path="/dashboard/account" component={Account} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    )
  }
}


