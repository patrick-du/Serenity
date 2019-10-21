import React, { Component } from 'react';

import { Row, Form, Button } from 'react-bootstrap';

export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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

    // NEED TO CHANGE THIS SPECIFICALLY FOR LOGIN AND HANDLE JWT
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
            </React.Fragment>


        );
    }
}