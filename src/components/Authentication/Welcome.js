import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Button, CardColumns, Card } from 'react-bootstrap';
import axios from 'axios';

import './Welcome.css';

export default class Welcome extends Component {
    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('http://localhost:3000/authCheck')
            .then(res => {
                console.log("Authorized.")
                this.props.history.push("/dashboard");
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status === 401) {
                    this.props.history.push("/");
                }
            });
    }

    render() {
        return (
            <Container className="app" fluid={true}>
                <Row noGutters={true}>
                    <Col sm={2} md={2} lg={2} />
                    <Col sm={8} md={8} lg={8}>
                        <div className="authBox">
                            <div className="mt-1 mb-5">
                                <p className="authTitle text-center">Welcome to Serenity</p>
                                <p className="authSubTitle text-center">Select an option below</p>
                            </div>
                            <Row noGutters={true}>
                                <Col style={{ padding: '10px' }}>
                                    <Link to="/register">
                                        <Button className="buttonDarken" style={{ width: '100%', height: '8rem' }}>New User</Button>
                                    </Link>

                                </Col>
                                <Col style={{ padding: '10px' }}>
                                    <Link to="/login">
                                        <Button className="buttonDarken" style={{ width: '100%', height: '8rem' }}>Existing User</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={2} md={2} lg={2} />

                </Row>
            </Container >
        )
    }
}