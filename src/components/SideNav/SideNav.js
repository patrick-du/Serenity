import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row } from 'react-bootstrap';

import Icon from '../../assets/favicon.ico'

export default class SideNav extends Component {

    render() {
        return (
            <Container className="sideNav">
                <img src={Icon} className="mx-auto"/>
                <Link to="/schedule" className="linkdec">
                    <Row className="sideNavItem" onClick={this.active}>
                        <p className="mx-auto" id="test">
                            <i class="far fa-calendar" /> Schedule
                        </p>
                    </Row>                </Link>
                <Link to="/workouts" className="linkdec">
                    <Row className="sideNavItem">
                        <p className="mx-auto">
                        <i class="fas fa-dumbbell"></i> Workouts
                        </p>
                    </Row>                </Link>
                <Link to="/exercises" className="linkdec">
                    <Row className="sideNavItem">
                        <p className="mx-auto">
                        <i class="fas fa-bolt"></i> Exercises
                        </p>
                    </Row>
                </Link>
                <Link to="/community" className="linkdec">
                    <Row className="sideNavItem">
                        <p className="mx-auto">
                        <i class="fas fa-users"></i> Community
                        </p>
                    </Row>
                </Link>
                <Link to="/profile" className="linkdec">
                    <Row className="sideNavItem">
                        <p className="mx-auto">
                        <i class="far fa-user"/> Profile
                        </p>
                    </Row>
                </Link>
            </Container>
        )
    }
}