import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import AvailableAssessments from './AvailableAssessments';
import AssessmentHistory from './AssessmentHistory';

export default class Assessments extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <Row noGutters={true}>
                <Col>
                    <AvailableAssessments />
                    <AssessmentHistory/>
                </Col>
            </Row>
            )
    }
}