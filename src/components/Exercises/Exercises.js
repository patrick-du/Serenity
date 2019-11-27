import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import SectionTitle from '../Reusable/SectionTitle';
import UserExerciseDisplay from './UserExerciseDisplay';
import Loader from '../Reusable/Loader';


export default class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userExercises: [],
            serenityExercises: [],
            isReady: false,
            userExercisesExist: false
        };
    }

    async getUserExercises() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        await axios.get(`http://localhost:3000/users/5db1abf4e12aa5442862e8a6/exercises`)
            .then((res) => {
                setTimeout(() => this.setState({ userExercises: res.data, isReady: true }), 200);
            })
            .catch((e) => {
                console.log(e)
            })
    }

    componentDidMount() {
        this.getUserExercises();
    }

    render() {
        if (!this.state.isReady) {
            return (
                <Row noGutters={true}>
                    <Col>
                        <Loader />
                    </Col>
                </Row>
            )
        } else if (this.state.isReady) {
            return (
                <Row noGutters={true}>
                    <Col >
                        <SectionTitle title="Fitness"/>
                        <UserExerciseDisplay exercises={this.state.userExercises}/>
                    </Col>
                </Row>

            )
        }

    }
}