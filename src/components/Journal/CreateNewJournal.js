import React, { Component } from 'react';
import { Table, Row, Col, Button, Accordion, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from "axios";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class CreateNewJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            entryBody: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        const { entryBody } = this.state;
        axios.post('http://localhost:3000/users/5db1abf4e12aa5442862e8a6/journals', {
            entryBody: entryBody,
            rating: 4
        })
            .then((res) => {
                console.log(res)
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
    };
    render() {
        return (
            <Accordion>
                <div className="standardBox">
                    <Row noGutters={true}>
                        <Col>
                            New Entry
                        </Col>
                        <Col className="text-right">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                <i class="fas fa-arrow-right"></i>
                            </Accordion.Toggle>
                        </Col>
                    </Row>
                    <Accordion.Collapse eventKey="0">
                        {/* https://react-component.github.io/slider/ */}
                        <Form className="mt-4">
                            <Form.Group controlId="formEntryBody">
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    name="entryBody"
                                    type="entryBody"
                                    onChange={this.handleChange}
                                    placeholder="How was your day?" />
                            </Form.Group>
                            <div>
                                <p className="my-3">Stress Rating</p>
                                <Slider min={0} max={100} />
                                <p className="my-3">Depression Rating</p>
                                <Slider min={0} max={100} />
                                <p className="my-3">Anxiety Rating</p>
                                <Slider min={0} max={100} />
                            </div>
                            <Button className="mx-auto" onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                    </Accordion.Collapse>
                </div >
            </Accordion >
        )
    }
}
