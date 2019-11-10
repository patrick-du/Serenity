import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Accordion } from 'react-bootstrap';
import axios from 'axios';

import UserExerciseDisplay from './UserExerciseDisplay';
import SerenityExerciseDisplay from './SerenityExerciseDisplay';
import Loader from '../Loader';


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
        await axios.get(`http://localhost:3000/users/5db1abf4e12aa5442862e8a6/exercises`)
            .then((res) => {
                setTimeout(() => this.setState({ userExercises: res.data, isReady: true }), 200);
            })
            .catch((e) => {
                console.log(e)
            })
    }

    // async getSerenityExercises() {
    //     await fetch(`http://localhost:3000/exercises`, {
    //         method: 'GET',
    //         mode: 'cors',
    //         headers: {
    //             "Accept": "*/*",
    //             "Content-Type": "application/json"
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             setTimeout(() => this.setState({ exercises: data, isReady: true }), 200);
    //         })
    //         .catch(error => { console.log(error) });
    // }


    componentDidMount() {
        this.getUserExercises();
        //this.getSerenityExercises();
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

                <Row noGutters={true} >
                    <Col >
                        <UserExerciseDisplay exercises={this.state.userExercises}/>
                        {/* <SerenityExerciseDisplay exercises={this.state.serenityExercises} /> */}
                    </Col>
                </Row>

            )
        }

    }
}