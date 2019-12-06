import React, { Component } from 'react';
import { Table, Row, Col, Button, Accordion, Modal, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import JournalProgressBar from './JournalProgressBar';
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
                await axios.delete('http://localhost:3000/users/5db1abf4e12aa5442862e8a6/journals', { data: { journalId: journalId } })
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
                                    <p className="JED-Date">{journal.date}</p>
                                    <div className="ml-auto">
                                        <Button className="button-delete mx-auto" onClick={() => this.deleteJournalEntryModal(journal._id)}>
                                            Delete
                                    </Button>
                                    </div>
                                </Row>
                                <hr />
                                <Row noGutters={true} className="my-2">
                                    {journal.entry}
                                </Row>
                                <hr />
                                Physical Activity Level: {journal.physicalActivityLevel}
                                <JournalProgressBar title="Stress" rating={journal.stressRating} />
                                <JournalProgressBar title="Depression" rating={journal.depressionRating} />
                                <JournalProgressBar title="Anxiety" rating={journal.anxietyRating} />


                            </div >
                        )


                    }))
            }


        }
    }
}