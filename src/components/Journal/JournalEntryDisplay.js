import React, { Component } from 'react';
import { Table, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class JournalEntryDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journals: [],
            hasJournals: true
        };
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
                                        <Link to="/newExercise" >
                                            <i class="fas fa-edit"></i>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row noGutters={true} className="my-2 p-3">
                                    {journal.entryBody}
                                </Row>
                                <Row noGutters={true}>
                                    <div className="mt-2 mb-2">
                                        {journal.rating}
                                    </div>
                                </Row>
                            </div >
                        )


                    }))
            }


        }
    }
}
