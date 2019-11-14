import React, { Component } from 'react';
import axios from 'axios';


import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Link } from 'react-router-dom';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        const { email, password } = this.state;
        axios.post('http://localhost:3000/login', { email, password })
            .then((res) => {
                localStorage.setItem('jwtToken', res.data.token);
                this.setState({ message: '' });
                this.props.history.push('/home')
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    alert(error.response.data);
                } else if (error.response.status === 401) {
                    alert(error.response.data.msg)
                    this.setState({ message: 'Login Failed. Username or password does not match.' });
                }
            });
    };

    render() {
        const { email, password, message } = this.state;
        return (
            <Container className="app" fluid={true}>
                <Row noGutters={true}>
                    <Col sm={2} md={2} lg={2} />
                    <Col sm={8} md={8} lg={8}>
                        <div className="authBox">
                            <div className="mt-1 mb-5">
                                <p className="authTitle text-center">Welcome back</p>
                                <p className="authSubTitle text-center">Please sign in to continue</p>
                            </div>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        onChange={this.handleChange}
                                        placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        placeholder="Enter password" />
                                </Form.Group>


                                <Row noGutters={true} className="mt-5">
                                    <Button className="buttonDarken mx-auto authButton" onClick={this.handleSubmit}>Login</Button>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={2} md={2} lg={2} />

                </Row>
            </Container>


        );
    }
}