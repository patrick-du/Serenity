import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import AvailableAssessments from './AvailableAssessments';
import AssessmentHistory from './AssessmentHistory';

import FadeIn from 'react-fade-in';

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
                    <FadeIn delay={150} transitionDuration={500}>
                        <AvailableAssessments />
                        <AssessmentHistory/>
                    </FadeIn>
                </Col>
            </Row>
            )
    }
}