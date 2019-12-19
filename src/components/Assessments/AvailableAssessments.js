import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Router, Switch, Route, Link } from 'react-router-dom';

export default class AvailableAssessments extends Component {

    render() {
        return (
            <div className="standardBox">
                <Row>
                    <Col>
                        <p className="standardBox-title">Available Assessments</p>
                    </Col>
                    <Col className="text-right">
                    </Col>
                </Row>
                <hr/>
                <Link to="/assessments/PHQ9" className="linkdec hvr-icon-wobble-horizontal">
                <Row className="my-4">
                    <Col>
                        <p className="standardBox-text-subtitle">Patient Health Questionnaire-9</p>
                        <p className="standardBox-text-subtitle-info">Last Completed: 09/15/2018</p>
                    </Col>
                    <Col className="text-right">
                        <i class="fas fa-long-arrow-alt-right hvr-icon" style={{ fontSize: "18px" }}></i>
                    </Col>
                </Row>
                </Link>

                <Link to="/assessments/GAD7" className="linkdec hvr-icon-wobble-horizontal">
                <Row className="mt-4">
                    <Col>
                        <p className="standardBox-text-subtitle">Generalized Anxiety Disorder-7</p>
                        <p className="standardBox-text-subtitle-info">Last Completed: 09/15/2018</p>
                    </Col>
                    <Col className="text-right">
                        <i class="fas fa-long-arrow-alt-right hvr-icon" style={{fontSize: "18px"}} ></i>
                    </Col>
                </Row>
                </Link>
            </div>

        )
    }
}