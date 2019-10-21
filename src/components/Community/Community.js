import React, { Component } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';

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

    async getUsers() {
        await fetch('http://localhost:3000/users/all', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                setTimeout(() => this.setState({ users: data, isReady: true }), 200);
            })
            .catch(error => { console.log(error) });
    }

    componentDidMount() {
        this.getUsers()
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
                <Row noGutters={true} className="overflow-auto">
                    Community
                    <UserDisplay users={this.state.users} />
                </Row>

            )
        }

    }
}