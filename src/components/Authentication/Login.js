import React, { Component } from 'react';
import axios from 'axios';

import { Row, Col, Form, Button } from 'react-bootstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleLogin = (e) => {
        e.preventDefault();
        let loginData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axios.post('http://localhost:3000/login', loginData)
            .then((res) => {
                localStorage.setItem('jwtToken', res.data.token);
                this.setState({ message: '' });
                this.props.history.push('/journal')
            })
            .catch((error) => {
                alert(error)
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
            <React.Fragment>
                <Row noGutters={true}>
                    <Col>
                        <p className="standardBox-title">Welcome back</p>
                        <p className="standardBox-subTitle">Please sign in to continue</p>
                    </Col>
                </Row>
                <Form onSubmit={this.handleLogin}>
                    <Form.Group controlId="email" className="my-2">
                        <Form.Control required name="email" type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group controlId="password" className="my-2">
                        <Form.Control required name="password" type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button className="button-login mt-2" type="submit">Login</Button>
                    <Button className="button-cancel mt-2" onClick={() => window.location.reload()}>Go Back</Button>
                </Form>
            </React.Fragment>
        );
    }
}