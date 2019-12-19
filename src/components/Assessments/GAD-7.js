import React, { Component } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

export default class GAD7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postSubmitScore: 0,
            postSubmitReturnMessage: ""
        };
    }

    componentDidMount() {
        $("#GAD7_postSubmit").css("display", "none");
    }

    async handleGAD7Submit(e) {
        e.preventDefault();
        let GAD7Entry = {
            submissionArr: [
                e.target.q1.value,
                e.target.q2.value,
                e.target.q3.value,
                e.target.q4.value,
                e.target.q5.value,
                e.target.q6.value,
                e.target.q7.value,
            ]
        }

        await axios.post('http://localhost:3000/users/5db1abf4e12aa5442862e8a6/assessments/GAD7', GAD7Entry)
            .then((res) => {
                if (res.status == 200) {
                    $("#box").fadeOut(300);
                    $("#GAD7_preSubmit").fadeOut(300);
                    $("#box").fadeIn(400);
                    $("#GAD7_postSubmit").fadeIn(400);
                    $("#postSubmitScore").text(res.data.returnMessage.score)
                    $("#postSubmitReturnMessage").text(res.data.returnMessage.message)
                }
            })
            .catch((error) => alert(error))
    }

    render() {
        return (
            <div className="standardBox" id="box">
                <div id="GAD7_preSubmit">
                    <Row>
                        <Col>
                            <p className="standardBox-title">General Anxiety Disorder-7</p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <p className="standardBox-text-subtitle">What is it?</p>
                            GAD-7 is a questionnaire used for rapid screeening for the presence of a clinically significant anxiety disorder in primary care and mental health settings. The symptom severity measures for the four most common anxiety disorders (Generalized Anxiety Disorder, Panic Disorder, Social Phobia, and Post Traumatic Stress Disorder). Higher GAD-7 scores correlate with disability and functional impairment in measures such as work productivity and healthcare utilization.
                    </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <p className="standardBox-text-subtitle">Rating System</p>
                            Patients answer questions using numbers. A value of 0 means not at all. A value of 1 means for several days. A value of 2 means for more than half the days of the week. A value of 3 means nearly every day.
                    </Col>
                    </Row>
                    <div className="mt-4">
                        <Form onSubmit={this.handleGAD7Submit}>
                            <Form.Group controlId="q1" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label><b className="mr-4">Q1.</b>Feeling nervous, anxious, or on edge?</Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q1" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q2" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label><b className="mr-4">Q2.</b>Not being able to stop or control worrying?</Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q2" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q3" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label><b className="mr-4">Q3.</b>Worrying too much about different things?</Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q3" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q4" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label><b className="mr-4">Q4.</b>Trouble relaxing?</Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q4" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q5" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label><b className="mr-4">Q5.</b>Being so restless that it's hard to sit still?</Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q5" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q6" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label><b className="mr-4">Q6.</b>Becoming easily annoyed or irritable?</Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q6" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="q7" className="my-2">
                                <Row>
                                    <Col>
                                        <Form.Label><b className="mr-4">Q7.</b>Feeling afraid as if something awful might happen?</Form.Label>
                                    </Col>
                                    <Col xs={2} sm={2} lg={2} xl={2} className="text-right">
                                        <Form.Control required name="q7" type="number" min="0" max="3" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button className="button-create mt-2" type="submit">Calculate Score</Button>
                        </Form>
                    </div>
                </div>

                <div id="GAD7_postSubmit">
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

        )
    }
}