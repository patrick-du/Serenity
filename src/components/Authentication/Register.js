import React, { Component } from 'react';

import { Row, Form, Button } from 'react-bootstrap';

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
        fetch('http://localhost:3000/users/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
            .then(response => {
                if (response.status == 200) {
                    alert("Success!")
                    this.props.history.push("/login");
                } else {
                    alert("Error! Try again.")
                    this.props.history.push("/");
                }
            })
            .catch(error => console.log(error))
    };

    render() {
        return (
            <React.Fragment>
                <div className="mt-1 mb-5">
                    <p className="authTitle text-center">Create new account</p>
                    <p className="authSubTitle text-center">Enter your credentials below</p>
                </div>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="name"
                            onChange={this.handleChange}
                            placeholder="Enter name" />
                    </Form.Group>

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

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
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
            </React.Fragment>


        );
    }
}

