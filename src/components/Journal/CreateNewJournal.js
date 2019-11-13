import React, { Component } from 'react';
import { Table, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class CreateNewJournal extends Component {
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
                                <Accordion defaultActiveKey="0">
                                    <Row noGutters={true}>
                                        <Col><p className="rightColTitle">{journal.date}</p></Col>
                                        <Col className="text-right">
                                            <Link to="/newExercise" >
                                                <Button className="buttonOutlineSuccess mr-3">
                                                    <i class="fas fa-plus"></i>
                                                </Button>
                                            </Link>

                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                                <Button className="buttonOutline">
                                                    <i class="fas fa-chevron-down"></i>
                                                </Button>
                                            </Accordion.Toggle>
                                        </Col>
                                        <Accordion.Collapse eventKey="0">
                                            <div className="p-4 mt-3 mb-5">
                                                {journal.body}
                                            </div>
                                        </Accordion.Collapse>

                                    </Row>
                                </Accordion>
                            </div >
                        )


                    }))
            }


        }
    }
}
