import React, { Component } from 'react';
import { Table, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class UserExerciseDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            hasExercises: true,
        };
    }

    newExercise = () => {
        alert('hi')
    }

    render() {
        if (this.state.hasExercises) {
            return (
                <div className="standardBox">
                    <Accordion defaultActiveKey="0">
                        <Row noGutters={true}>
                            <Col><p className="rightColTitle">Exercise Collection</p></Col>
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
                        </Row>
                        <Accordion.Collapse eventKey="0">
                            <Table className=" mt-3 mb-5">
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
                                                <td> {exercise.equipmentType ? exercise.equipmentType : "-"} </td>
                                                <td> {exercise.primaryMuscles ? exercise.primaryMuscles: "-"} </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Accordion.Collapse>
                    </Accordion>
                </div>
            )
        } else if (!this.state.hasExercises) {
            return (
                <div className="standardBox">
                    <Row noGutters={true}>
                        <Col><p className="rightColTitle">Add your first exercise! </p></Col>
                        <Col className="text-right">
                            <Link to="/newExercise">
                                <Button className="buttonOutlineSuccess">
                                    <i class="fas fa-plus"></i>
                                </Button>
                            </Link>
                        </Col>
                        
                    </Row>
                </div>
            )
        }

    }
}
