import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Row, Col, Button, CardColumns, Card } from 'react-bootstrap';

import './Authentication.css';

export default class Authentication extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="mt-1 mb-5">
                    <p className="authTitle text-center">Welcome to Serenity</p>
                    <p className="authSubTitle text-center">Select an option below</p>
                </div>
                <Row noGutters={true}>
                    <Col style={{padding: '10px'}}>
                        <Link to="/register">
                            <Button className="buttonDarken" style={{ width: '100%', height: '8rem' }}>New User</Button>
                        </Link>

                    </Col>
                    <Col style={{padding: '10px'}}> 
                        <Link to="/login">
                            <Button className="buttonDarken" style={{ width: '100%', height: '8rem' }}>Existing User</Button>
                        </Link>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}