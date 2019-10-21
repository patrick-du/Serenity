import React, { Component } from 'react';

import { Row, Col, Button } from 'react-bootstrap'
export default class WorkoutBox extends Component {
    render() {
        return (
            <div className="workoutBox p-4 mt-5 mb-5">
                <Row noGutters={true}>
                    <Col>
                        <p className="workoutBoxTitle">High Intensity Push Day</p>
                        <p className="workoutBoxSubtitle">High Intensity Push Day</p>
                    </Col>
                    <Col sm={4} md={4} lg={4}>                        
                        <Button className="buttonOutline">Delete</Button>
                    </Col>

                </Row>
            </div>
        )
    }
}