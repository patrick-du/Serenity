import React, { Component } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Router, Switch, Route, Link } from 'react-router-dom';

import PHQ9HistoryDisplay from './PHQ9HistoryDisplay';
import GAD7HistoryDisplay from './GAD7HistoryDisplay';

export default class AssessmentHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="standardBox">
                    <Row className="mb-4">
                        <Col>
                            <p className="standardBox-title">Assessment Submission History</p>
                        </Col>
                    </Row>
                    <Tabs defaultActiveKey="PHQ9" id="uncontrolled-tab-example">
                        <Tab eventKey="PHQ9" title="PHQ-9">
                            <PHQ9HistoryDisplay />
                        </Tab>
                        <Tab eventKey="GAD7" title="GAD-7">
                            <GAD7HistoryDisplay />
                        </Tab>
                    </Tabs>
                </div>
            </React.Fragment>

        )
    }
}