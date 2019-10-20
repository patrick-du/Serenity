import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SideNav from './components/SideNav/SideNav';
import Schedule from './components/Schedule/Schedule';
import Workouts from './components/Workouts/Workouts';
import Exercises from './components/Exercises/Exercises';
import Community from './components/Community/Community';
import Profile from './components/Profile/Profile';

import './components/Loader.css';
import './Dashboard.css';
import './components/SideNav/SideNav.css';
import './components/Schedule/Schedule.css';
import './components/Workouts/Workouts.css';
import './components/Exercises/Exercises.css';
import './components/Community/Community.css'
import './components/Profile/Profile.css';

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
                        <Col sm={7} md={7} lg={7}>
                            <Switch>
                                <Route exact path="/schedule" component={Schedule} />
                                <Route exact path="/workouts" component={Workouts} />
                                <Route exact path="/exercises" component={Exercises} />
                                <Route exact path="/community" component={Community} />
                                <Route exact path="/profile" component={Profile} />
                            </Switch>
                        </Col>
                        <Col sm={3} md={3} lg={3}>
                            <Container className="rightCol">
                                user picture 
                                user profile (update info)
                                log out button
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Router>
        )
    }
}