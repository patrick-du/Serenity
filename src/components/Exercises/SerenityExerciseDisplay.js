import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

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
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>equipmentType</th>
                        <th>createdBy</th>
                        <th><i class="fas fa-plus-circle" onClick={this.newExercise} /></th>
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

        )
    }
}
