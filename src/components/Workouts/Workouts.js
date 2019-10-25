import React, { Component } from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';

import { Link } from 'react-router-dom'

export default class Workouts extends Component {

    newWorkout() {
        alert('hi')
    }

    render() {
        return (
            <div className="standardBox">
                <Accordion defaultActiveKey="0">

                    <Row noGutters={true}>
                        <Col >
                            <Row noGutters={true}>
                                <Col><p className="rightColTitle">Workout Collection</p></Col>
                                <Col className="text-right">
                                    <Link to="/newWorkout">
                                        <Button className="buttonOutline">
                                            <i class="fas fa-plus"></i>
                                        </Button>
                                    </Link>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                        <Button className="buttonOutline">
                                            <i class="fas fa-chevron-down"></i>
                                        </Button>
                                    </Accordion.Toggle>

                                </Col>
                            </Row>
                            <Accordion.Collapse eventKey="0">
                                <div>
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/*MAKE this in table form  */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    <Row noGutters={true} className="my-3">
                                        <Col>
                                            <p className="workoutBoxTitle">High Intensity Push Day</p>
                                            <p className="workoutBoxSubtitle">High Intensity Push Day</p>
                                        </Col>
                                        <Col sm={4} md={4} lg={4}>
                                            <Button className="buttonOutline">Delete</Button>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row noGutters={true} className="my-3">
                                        <Col>
                                            <p className="workoutBoxTitle">High Intensity Push Day</p>
                                            <p className="workoutBoxSubtitle">High Intensity Push Day</p>
                                        </Col>
                                        <Col sm={4} md={4} lg={4}>
                                            <Button className="buttonOutline">Delete</Button>
                                        </Col>

                                    </Row>
                                    <hr/>
                                    <Row noGutters={true} className="my-3">
                                        <Col>
                                            <p className="workoutBoxTitle">High Intensity Push Day</p>
                                            <p className="workoutBoxSubtitle">High Intensity Push Day</p>
                                        </Col>
                                        <Col sm={4} md={4} lg={4}>
                                            <Button className="buttonOutline">Delete</Button>
                                        </Col>

                                    </Row>
                                </div>

                            </Accordion.Collapse>

                        </Col>
                    </Row>

                </Accordion>

            </div>

        )
    }
}