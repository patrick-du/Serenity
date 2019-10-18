import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import CreateNewExercise from './CreateNewExercise';
import DeleteExercise from './DeleteExercise';

export default class ExerciseDisplay extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Delete</th>
                        <th><CreateNewExercise/></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.exercises.map((exercise) => {
                        return (
                            <tr>
                                <td> {exercise.name ? exercise.name : "-"} </td>
                                <td> {exercise.sets ? exercise.sets : "-"} </td>
                                <td> {exercise.reps ? exercise.reps : "-"} </td>
                                <td> <DeleteExercise exercise={exercise}/></td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        )
    }
}
