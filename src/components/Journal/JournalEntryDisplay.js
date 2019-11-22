import React, { Component } from 'react';
import { Table, Row, Col, Button, Accordion, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class JournalEntryDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journals: [],
            hasJournals: true,
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