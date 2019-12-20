import React, { Component } from 'react';
import axios from "axios";

import { Row, Col, Form, Button } from 'react-bootstrap';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleRegister = (e) => {
        e.preventDefault();
        let registerData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            password2: e.target.password2.value
        }

        axios.post('http://localhost:3000/register', registerData)
            .then((res) => {
                if (res.status == 200) {
                    alert("Success!")
                    this.props.postRegister()
                }
            })
            .catch((error) => alert(error))
    };


    render() {
        return (
            <React.Fragment>
                <Row noGutters={true}>
                    <Col>
                        <p className="standardBox-title">Create new account</p>
                        <p className="standardBox-subTitle">Enter your credentials below</p>
                    </Col>
                </Row>
                <Form onSubmit={this.handleRegister}>
                    <Form.Group controlId="name" className="my-2">
                        <Form.Control required name="name" type="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="email" className="my-2">
                        <Form.Control required name="email" type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="password" className="my-2">
                        <Form.Control required name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="password2" className="my-2">
                        <Form.Control required name="password2" type="password" placeholder="Confirm password" />
                    </Form.Group>
                    <Button className="button-create mt-2" type="submit">Register</Button>
                    <Button className="button-cancel mt-2" onClick={() => window.location.reload()}>Go Back</Button>
                </Form>
            </React.Fragment>
        );
    }
}

