import React, { Component } from 'react';
import { Table, Row, Col, Button, Accordion } from 'react-bootstrap';

export default class SerenityExerciseDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            isReady: false
        };
    }

    newExercise = () => {
        alert('hi')
    }

    render() {
        return (
            <div className="standardBox my-5">
            <Accordion>
                <Row noGutters={true}>
                    <Col><p className="rightColTitle">Serenity Exercise Collection</p></Col>
                    <Col className="text-right">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                            <Button className="buttonOutline">
                                <i class="fas fa-chevron-down"></i>
                            </Button>
                        </Accordion.Toggle>
                    </Col>
                </Row>
                <Accordion.Collapse eventKey="0">

                    <Table className="p-4 mt-3 mb-5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Equipment</th>
                                <th>Primary Muscles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.exercises.map((exercise) => {
                                return (
                                    <tr>
                                        <td> {exercise.name ? exercise.name : "-"} </td>
                                        <td> {exercise.description ? exercise.description : "-"} </td>
                                        <td> {exercise.equipmentType ? exercise.equipmentType : "-"} </td>
                                        <td> {exercise.createdBy ? exercise.createdBy : "-"} </td>
                                        {/*  <td> <i class="fas fa-cross" onClick={this.deleteExercise} /></td>*/}

                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Accordion.Collapse>
            </Accordion>
            </div>
        )
    }
}
