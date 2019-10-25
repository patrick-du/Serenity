import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SideNav from './components/SideNav/SideNav';
import Schedule from './components/Schedule/Schedule';
import Workouts from './components/Workouts/Workouts';
import NewWorkout from './components/Workouts/NewWorkout';
import Exercises from './components/Exercises/Exercises';
import Community from './components/Community/Community';
import Account from './components/Account/Account';

import './components/Loader.css';
import './Dashboard.css';
import './components/SideNav/SideNav.css';
import './components/Schedule/Schedule.css';
import './components/Workouts/Workouts.css';
import './components/Exercises/Exercises.css';
import './components/Community/Community.css'
import './components/Account/Account.css';

import { Container, Row, Col } from 'react-bootstrap';


export default class Dashboard extends Component {

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
                                <Route exact path="/schedule" component={Schedule} />
                                <Route exact path="/workouts" component={Workouts} />
                                <Route exact path="/newWorkout" component={NewWorkout} />
                                <Route exact path="/exercises" component={Exercises} />
                                <Route exact path="/community" component={Community} />
                                <Route exact path="/account" component={Account} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        )
    }
}