import React, { Component } from 'react';
import axios from 'axios';

import { Container, Row, Col, Spinner } from 'react-bootstrap';

import UserDisplay from './UserDisplay';
import Loader from '../Loader';


export default class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isReady: false,
        };
    }

    getUsers = () => {
        axios.get('http://localhost:3000/users')
            .then((res) => {
                setTimeout(() => this.setState({ users: res.data, isReady: true }), 200);
            })
            .catch((e) => {
                console.log(e)
            })
    }


    componentDidMount() {
        this.getUsers()
    }

    render() {
        if (!this.state.isReady) {
            return (
                <Row noGutters={true} >
                    <Col >
                        <Loader />
                    </Col>
                </Row>
            )
        } else if (this.state.isReady) {
            return (
                <Row noGutters={true}>
                    <Col>
                        <UserDisplay users={this.state.users} />
                    </Col>
                </Row>

            )
        }

    }
}