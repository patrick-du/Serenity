import React, { Component } from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from "axios";
import Swal from 'sweetalert2'

export default class CreateNewJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            entry: '',
            stressRating: 0,
            depressionRating: 0,
            anxietyRating: 0,
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

    newJournalEntryModal = (e) => {
        let success = false
        Swal.mixin({
            confirmButtonText: 'Next',
            showCancelButton: true,
            progressSteps: ['1', '2', '3', '4'],
        }).queue([
            { title: 'How was your day?', input: 'textarea', inputPlaceholder: 'Required...' },
            { title: 'Stress Rating', input: 'range', inputValue: 50 },
            { title: 'Depression Rating', input: 'range', inputValue: 50 },
            { title: 'Anxiety Rating', input: 'range', inputValue: 50 }
        ]).then((result) => {
            if (result.value) {
                let journalEntry = {
                    entry: result.value[0],
                    stressRating: result.value[1],
                    depressionRating: result.value[2],
                    anxietyRating: result.value[3]
                }
                Swal.fire({
                    title: 'Your Entry',
                    html: `${journalEntry.entry} <br/> Stress: ${journalEntry.stressRating} <br/> Depression: ${journalEntry.depressionRating} <br/> Anxiety: ${journalEntry.anxietyRating}`,
                    showCancelButton: true,
                    confirmButtonText: 'Submit',
                    preConfirm: async (createNewEntry) => {
                        await axios.post('http://localhost:3000/users/5db1abf4e12aa5442862e8a6/journals', journalEntry)
                            .then((res) => { success = true })
                            .catch((error) => { success = false })
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                }).then(() => {
                    if (success == true) {
                        Swal.fire({
                            icon: 'success',
                            title: `Entry created!`
                        }).then((result) => {
                            window.location.reload()
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: `Entry failed!`
                        }).then((result) => {
                            window.location.reload()
                        })
                    }
                })
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="standardBox">
                    <Button className="buttonPrimaryDarken" onClick={this.newJournalEntryModal}>
                        NEW ENTRY <i class="ml-2 fas fa-long-arrow-alt-right"></i>
                    </Button>
                    
                </div >
                
            </React.Fragment>

        )
    }
}
