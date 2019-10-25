import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import { Link } from 'react-router-dom'


export default class NewWorkout extends Component {
    render() {
        return (
            <Row noGutters={true} >
                <Col >
                    <Row noGutters={true}>
                        <Col><p className="rightColTitle">Create New Workout</p></Col>
                        <Col className="text-right">
                            <Link to="/workouts">
                                <Button className="buttonOutlineDanger">Go Back</Button>
                            </Link>
                        </Col>
                    </Row>
                    <hr />
                    Exercises
                    <Row noGutters={true}>
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        type="name"
                                        onChange={this.handleChange}
                                        placeholder="Workout Title"
                                        className="newWorkoutFormField" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        onChange={this.handleChange}
                                        placeholder="Exercises" 
                                        className="newWorkoutFormField"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        placeholder="Enter password"
                                        className="newWorkoutFormField" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        name="password2"
                                        type="password"
                                        onChange={this.handleChange}
                                        placeholder="Confirm password"
                                        className="newWorkoutFormField" />
                                </Form.Group>

                                <Row noGutters={true} className="mt-5">
                                    <Button className="buttonDarken mx-auto authButton" onClick={this.handleSubmit}>Register</Button>
                                </Row>
                            </Form>


                        </Col>

                    </Row>

                    {/* for each workout, generate a rectangular box with the workout name, description, */}
                </Col>
            </Row>
        )
    }
}