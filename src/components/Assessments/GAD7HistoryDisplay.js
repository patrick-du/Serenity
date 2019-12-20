import React, { Component } from 'react'
import { Row, Col, Button, Table, Modal } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';

export default class GAD7HistoryDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryId: "",
            GAD7Entries: [],
            modalShow: false,
        };
    }

    componentDidMount() {
        this.getGAD7Entry();
    }

    handleClose = () => {
        this.setState({ modalShow: false });
    }

    handleShowAndSetEntryId = (entryId) => {
        this.setState({
            modalShow: true,
            entryId: entryId
        });
    }

    async getGAD7Entry() {
        await axios.get(`http://localhost:3000/users/5db1abf4e12aa5442862e8a6/assessments/GAD7`)
            .then((res) => {
                this.setState({ GAD7Entries: res.data });
            })
            .catch((e) => {
                alert(e)
            })
    }

    async deleteGAD7Entry() {
        console.log(this.state);
        await axios.delete(`http://localhost:3000/users/5db1abf4e12aa5442862e8a6/assessments/GAD7`, { data: { entryId: this.state.entryId } })
            .then((res) => window.location.reload())
            .catch((error) => { alert(error) })
    }

    render() {
        return (
            <React.Fragment>
                <p className="my-3 ml-2">Currently, there are {this.state.GAD7Entries.length} GAD-7 entries.</p>
                <hr/>
                <Table responsive borderless>
                    <thead>
                        <tr>
                            <th width={"20%"}>Date</th>
                            <th width={"15%"}>Score</th>
                            <th width={"50%"}>Severity of Depression</th>
                            <th width={"10%"}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.GAD7Entries.map((entry) => {
                            return (
                                <React.Fragment>
                                    <tr>
                                        <td>{entry.date}</td>
                                        <td>{entry.score}</td>
                                        <td>{entry.level}</td>
                                        <td>
                                            <Button className="button-delete" onClick={() => this.handleShowAndSetEntryId(entry._id)}>
                                                Delete
                                        </Button>

                                        </td>
                                    </tr>
                                </React.Fragment>
                            )
                        })}
                    </tbody>
                </Table>
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
                            <Button className="button-delete" onClick={() => this.deleteGAD7Entry()}>Yes, delete it!</Button>
                        </Row>
                    </Modal.Body>
                </Modal>
            </React.Fragment>

        )
    }
}