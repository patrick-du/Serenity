import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import JournalEntryDisplay from '../Journal/JournalEntryDisplay';
import Loader from '../Loader';


export default class Journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journalEntries: [],
            isReady: false,
            userJournalsExist: false
        };
    }

    async getUserJournals() {
        axios.get(`http://localhost:3000/users/5db1abf4e12aa5442862e8a6/journals`)
        .then((res) => {
            setTimeout(() => this.setState({ journalEntries: res.data, isReady: true }), 200);
        })
        .catch((e) => {
            console.log(e)
        })

    }

    
    componentDidMount() {
        this.getUserJournals();
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
                    <Col>
                        <JournalEntryDisplay journals={this.state.journalEntries}/>
                    </Col>
                </Row>
            )
        }
    }
}