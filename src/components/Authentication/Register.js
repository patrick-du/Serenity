import React, { Component } from 'react';
import axios from "axios";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
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
        const { name, email, password, password2 } = this.state;
        axios.post('http://localhost:3000/register', { name, email, password, password2 })
        .then((res) => {
            alert("Success!")
            this.props.history.push('/login')
        })
        .catch((error) => {
            if (error.response.status === 400) {
                console.log(error.response.data);
            } 
        })
    };

    
    render() {
        return (
            <Container className="app" fluid={true}>
            <Row noGutters={true}>
                <Col sm={2} md={2} lg={2} />
                <Col sm={8} md={8} lg={8}>
                    <div className="authBox">
                <div className="mt-1 mb-5">
                    <p className="authTitle text-center">Create new account</p>
                    <p className="authSubTitle text-center">Enter your credentials below</p>
                </div>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            name="name"
                            type="name"
                            onChange={this.handleChange}
                            placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                            placeholder="Enter password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            name="password2"
                            type="password"
                            onChange={this.handleChange}
                            placeholder="Confirm password" />
                    </Form.Group>

                    <Row noGutters={true} className="mt-5">
                        <Button className="buttonDarken mx-auto authButton" onClick={this.handleSubmit}>Register</Button>
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

