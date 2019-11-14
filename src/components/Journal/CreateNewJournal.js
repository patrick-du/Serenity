import React, { Component } from 'react';
import { Table, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class CreateNewJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    render() {
        return (
            <div className="standardBox">
                <Row noGutters={true}>
                    <Col>
                    Create a new entry - make this a collapsible
                    </Col>
                </Row>
            </div >
        )
    }
}
