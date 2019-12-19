import React, { Component } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import JournalProgressBar from './JournalProgressBar';
import axios from "axios";

export default class JournalEntryDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journals: [],
            hasJournals: true,
            modalShow: false,
        };
    }

    handleClose = () => {
        this.setState({ modalShow: false });
    }

    handleShow = () => {
        this.setState({ modalShow: true });
    }

    async deleteJournalEntry(journalId) {
        await axios.delete('http://localhost:3000/users/5db1abf4e12aa5442862e8a6/journals', { data: { journalId: journalId } })
            .then((res) => window.location.reload())
            .catch((error) => { alert(error) })
    }

    render() {
        if (this.state.hasJournals) {
            return (
                this.props.journals.map((journal) => {
                    return (
                        <React.Fragment>
                            <div className="standardBox">
                                <Row noGutters={true}>
                                    <p className="standardBox-title">{journal.date}</p>
                                    <div className="ml-auto">
                                        <Button className="button-delete mx-auto" onClick={this.handleShow}>
                                            Delete
                                        </Button>
                                    </div>
                                </Row>
                                <hr />
                                <Row noGutters={true} className="my-3">
                                    {journal.entry}
                                </Row>
                                <hr />
                                Physical Activity Level: {journal.physicalActivityLevel}
                                <JournalProgressBar title="Stress" rating={journal.stressRating} />
                                <JournalProgressBar title="Depression" rating={journal.depressionRating} />
                                <JournalProgressBar title="Anxiety" rating={journal.anxietyRating} />
                            </div >
                            <Modal show={this.state.modalShow} onHide={this.handleClose} centered>
                                <Modal.Body className="m-3">
                                    <Row noGutters={true}>
                                        <p className="standardBox-title">Confirmation</p>
                                        <span className="ml-auto"><i class="fas fa-times" onClick={this.handleClose}></i></span>
                                    </Row>
                                    <Row noGutters={true} className="mt-3 mb-4">
                                        <p style={{ fontFamily: "SFProDisplay-Regular" }}>
                                            Are you sure you want to delete this journal? This action cannot be undone and you will be unable to recover any data.
                                        </p>
                                    </Row>
                                    <Row noGutters={true}>
                                        <Button className="button-delete" onClick={() => this.deleteJournalEntry(journal._id)}>Yes, delete it!</Button>
                                    </Row>
                                </Modal.Body>
                            </Modal>
                        </React.Fragment>
                    )
                })
            )
        }
    }
}