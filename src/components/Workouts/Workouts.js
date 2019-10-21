import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { BrowserRouter as Link } from 'react-router-dom'

import WorkoutBox from './WorkoutBox';


export default class Workouts extends Component {
    
    newWorkout() {
        alert('hi')
    }
    
    render() {
        return (
            <Row noGutters={true} >
                <Col >
                    <Row noGutters={true}>
                        <Col><p className="rightColTitle">Workouts</p></Col>
                        <Col className="text-right"><Button className="buttonOutline" onClick={this.newWorkout}>+ New Workout</Button></Col>
                    </Row>
                     
                    <hr />
                    <WorkoutBox />
                    <WorkoutBox />
                    <WorkoutBox />
                    <WorkoutBox />
                    <WorkoutBox />
                    <WorkoutBox />
                    <WorkoutBox />
                    <WorkoutBox />
                    <WorkoutBox />
                    {/* for each workout, generate a rectangular box with the workout name, description, */}
                </Col>
            </Row>
        )
    }
}