import React, { Component } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import FadeIn from 'react-fade-in';

export default class PHQ9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postSubmitScore: 0,
            postSubmitReturnMessage: ""
        };
    }

    componentDidMount() {
        $("#PHQ9_postSubmit").css("display", "none");
    }

    async handlePHQ9Submit(e) {
        e.preventDefault();
        let PHQ9Entry = {
            submissionArr: [
                e.target.q1.value,
                e.target.q2.value,
                e.target.q3.value,
                e.target.q4.value,
                e.target.q5.value,
                e.target.q6.value,
                e.target.q7.value,
                e.target.q8.value,
                e.target.q9.value
            ]
        }

        await axios.post('http://localhost:3000/users/5db1abf4e12aa5442862e8a6/assessments/PHQ9', PHQ9Entry)
            .then((res) => {
                if (res.status == 200) {
                    $("#box").fadeOut(300);
                    $("#PHQ9_preSubmit").fadeOut(300);
                    $("#box").fadeIn(400);
                    $("#PHQ9_postSubmit").fadeIn(400);
                    $("#postSubmitScore").text(res.data.returnMessage.score)
                    $("#postSubmitReturnMessage").text(res.data.returnMessage.message)
                }
            })
            .catch((error) => alert(error))
    }

    render() {
        return (
            <FadeIn delay={150} transitionDuration={300}>
            <div className="standardBox" id="box">
                <div id="PHQ9_preSubmit">
                    <Row>
                        <Col>
                            <p className="standardBox-title">Patient Health Questionnaire-9</p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <p className="standardBox-text-subtitle mb-1">What is it?</p>
                            PHQ-9 is used to provisionally diagnose depression and grade the severity of symptoms in general medical and mental health settings. It determines severity of initial symptoms and monitors symptoms changes and treatment effects over time. Higher scores are associated with decreased functional status and increased symptom-related difficulties, sick days, and healthcare utilization.
                    </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <p className="standardBox-text-subtitle mb-1">Rating System</p>
                            Patients answer questions using numbers. A value of 0 means not at all. A value of 1 means for several days. A value of 2 means for more than half the days of the week. A value of 3 means nearly every day.
                    </Col>
                    </Row>
                    <div className="mt-4">
                        <Form onSubmit={this.handlePHQ9Submit}>
                            <Form.Group controlId="q1" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label> <b className="mr-4">Q1.</b>Little interest or pleasure in doing things? </Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q1" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q2" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label> <b className="mr-4">Q2.</b>Feeling down, depressed, or hopeless? </Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q2" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q3" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label> <b className="mr-4">Q3.</b>Trouble falling or staying asleep, or sleeping too much? </Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q3" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q4" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label> <b className="mr-4">Q4.</b>Feeling tired or having little energy? </Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q4" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q5" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label> <b className="mr-4">Q5.</b>Poor appetite or overeating? </Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q5" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q6" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label> <b className="mr-4">Q6.</b>Feeling bad about yourself or that you are a failure or have let yourself or your family down? </Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q6" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q7" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label> <b className="mr-4">Q7.</b>Trouble concentrating on things, such as reading the newspaper or watching television? </Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q7" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q8" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label> <b className="mr-4">Q8.</b>Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual? </Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q8" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q9" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label> <b className="mr-4">Q9.</b>Thoughts that you would be better off dead or thoughts of hurting yourself in some way? </Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q9" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button className="button-create mt-2" type="submit">Calculate Score</Button>
                        </Form>
                    </div>
                </div>
                <div id="PHQ9_postSubmit">
                    <Row className="mb-3">
                        <Col>
                            <p className="standardBox-title text-center">Your Score: <span id="postSubmitScore"></span></p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <p className="standardBox-text-subtitle">Interpretation of Results</p>
                            <p id="postSubmitReturnMessage"></p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Button className="button-cancel" onClick={() => window.location.reload()}>Back</Button>
                        </Col>
                        <Col>
                            <Link to="/assessments" className="linkdec">
                                <Button className="button-cancel">Assessments</Button>
                            </Link>
                        </Col>
                    </Row>

                </div>
            </div>
            </FadeIn>
        )
    }
}