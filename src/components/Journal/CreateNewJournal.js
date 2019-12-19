import React, { Component } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import axios from "axios";


export default class CreateNewJournal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            stressRating: 0,
            depressionRating: 0,
            anxietyRating: 0,
            modalShow: false,
        };
    }

    handleClose = () => {
        this.setState({ modalShow: false });
    }

    handleShow = () => {
        this.setState({ modalShow: true });
    }

    handleChange(e) {
        const value = e.target.value
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    async handleJournalSubmit(e) {
        e.preventDefault();
        let journalEntry = {
            date: e.target.date.value,
            entry: e.target.entry.value,
            physicalActivityLevel: e.target.PAL.value,
            stressRating: e.target.stress.value,
            depressionRating: e.target.depression.value,
            anxietyRating: e.target.anxiety.value
        }
        await axios.post('http://localhost:3000/users/5db1abf4e12aa5442862e8a6/journals', journalEntry)
            .then((res) => { if (res.status == 200) window.location.reload() })
            .catch((error) => alert(error))
    }

    render() {
        return (
            <React.Fragment>
                <div className="standardBox">
                    <Row noGutters={true}>
                        <p className="standardBox-title">Hey, <span className="JED-NameDeco">Patrick</span></p>
                        <div className="ml-auto">
                            <Button className="button-create" onClick={this.handleShow}>
                                New Entry
                        </Button>
                        </div>
                    </Row>
                </div >
                <Modal show={this.state.modalShow} onHide={this.handleClose} lg centered>
                    <Modal.Body>
                        <Form className="m-3" onSubmit={this.handleJournalSubmit}>
                            <div className="my-3" className="standardBox-title">
                                <Row noGutters={true}>
                                    New Journal Entry
                                    <span className="ml-auto"><i class="fas fa-times" onClick={this.handleClose}></i></span>
                                </Row>
                            </div>
                            <Form.Group controlId="formBasicDate" className="my-3">
                                <Form.Label className="JEC-Label">Date</Form.Label>
                                <Form.Control
                                    required
                                    name="date"
                                    type="date" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEntry" className="my-3">
                                <Form.Label className="JEC-Label">Tell us about your day</Form.Label>
                                <Form.Control
                                    required
                                    name="entry"
                                    as="textarea" rows="3" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPAL" className="my-3">
                                <Form.Label className="JEC-Label">Physical Activity Level</Form.Label>
                                <Form.Control
                                    required
                                    name="PAL"
                                    as="select">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option>Extremely Inactive</option>
                                    <option>Sedentary</option>
                                    <option>Moderately Active</option>
                                    <option>Vigorously Active</option>
                                    <option>Extremely Active</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicStress" className="my-3">
                                <Form.Label className="JEC-Label">Stress</Form.Label>
                                <div className="slidecontainer">
                                    <input type="range" min="1" max="100" className="slider" name="stress" />
                                </div>
                            </Form.Group>

                            <Form.Group controlId="formBasicDepression" className="my-3">
                                <Form.Label className="JEC-Label">Depression</Form.Label>
                                <div className="slidecontainer">
                                    <input type="range" min="1" max="100" className="slider" name="depression" />
                                </div>
                            </Form.Group>

                            <Form.Group controlId="formBasicAnxiety" className="my-3">
                                <Form.Label className="JEC-Label">Anxiety</Form.Label>
                                <div className="slidecontainer">
                                    <input type="range" min="1" max="100" className="slider" name="anxiety" />
                                </div>
                            </Form.Group>

                            <Button className="button-create my-3" type="submit">Submit</Button>
                        </Form>
                    </Modal.Body>
                </Modal>

            </React.Fragment>
        )
    }
}