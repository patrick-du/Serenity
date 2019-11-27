import React, { Component } from 'react';
import { Table, Row, Col, Button, Accordion, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from "axios";
import Swal from 'sweetalert2';

export default class JournalEntryDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journals: [],
            hasJournals: true,
        };
    }

    deleteJournalEntryModal = (journalId) => {
        let success = false
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            preConfirm: async (deleteEntry) => {
                await axios.delete('http://localhost:3000/users/5db1abf4e12aa5442862e8a6/journals', { data: {journalId: journalId} })
                    .then((res) => { success = true })
                    .catch((error) => { success = false })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then(() => {
            if (success == true) {
                Swal.fire({
                    icon: 'success',
                    title: `Successfully deleted!`,
                }).then((result) => {
                    window.location.reload()
                })
            }
        })
    }

    render() {
        if (this.state.hasJournals) {
            {
                return (
                    this.props.journals.map((journal) => {
                        return (
                            <div className="standardBox">
                                <Row noGutters={true}>
                                    <Col><p className="JED-date">{journal.date}</p></Col>
                                    <Col className="text-right">
                                        <Button className="buttonPrimaryDarken" onClick={() => this.deleteJournalEntryModal(journal._id)}>
                                            <i class="fas fa-times"></i>
                                        </Button>
                                    </Col>
                                </Row>
                                <hr />
                                <Row noGutters={true} className="my-2 ">
                                    {journal.entry}
                                </Row>
                                <hr />
                                <Row noGutters={true}>
                                    <div>
                                        Stress: {journal.stressRating} | Depression: {journal.depressionRating} | Anxiety: {journal.anxietyRating}
                                    </div>
                                </Row>
                            </div >
                        )


                    }))
            }


        }
    }
}