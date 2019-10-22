import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import SerenityExerciseDisplay from './SerenityExerciseDisplay';
import Loader from '../Loader';


export default class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            isReady: false
        };
    }

    async getExercises() {
        await fetch(`http://localhost:3000/exercises`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                setTimeout(() => this.setState({ exercises: data, isReady: true }), 200);
            })
            .catch(error => { console.log(error) });
    }


    componentDidMount() {
        this.getExercises();
    }

    render() {
        if (!this.state.isReady) {
            return (
                <Row noGutters={true}>
                    <Loader />
                </Row>
            )
        } else if (this.state.isReady) {
            return (

                <Row noGutters={true} >
                    <Col >
                        <Row noGutters={true}>
                            <Col><p className="rightColTitle">Exercises</p></Col>
                            <Col className="text-right"><Button className="buttonOutline" onClick={this.newExercise}>+ New Exercise</Button></Col>
                        </Row>
                        <hr />

                        <SerenityExerciseDisplay exercises={this.state.exercises} id="5da5e393dcb7870017ecf79f" />

                    </Col>
                </Row>

            )
        }

    }
}