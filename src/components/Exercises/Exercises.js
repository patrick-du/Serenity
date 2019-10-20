import React, { Component } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';

import ExerciseDisplay from '../Exercises/ExerciseDisplay';
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
        let id = '5da5e393dcb7870017ecf79f'
        await fetch(`http://localhost:3000/users/${id}/exercises`, {
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
                <Container className="middleCol">
                    <Loader />
                </Container>
            )
        } else if (this.state.isReady) {
            return (
                <Container className="middleCol">
                    <p className="dashboardTitleText">Exercises</p>
                    <ExerciseDisplay exercises={this.state.exercises} id="5da5e393dcb7870017ecf79f"/>
                </Container>
            )
        }

    }
}