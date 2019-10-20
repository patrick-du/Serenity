import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class ExerciseDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            isReady: false
        };
    }

    // NOT WORKING
    async deleteExercise() {
        await fetch(`http://localhost:3000/users/${this.props._id}/exercises/delete`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            body: {
                exerciseId: this.props.exercises._id
            }
        })
            .then(response => console.log(response.json()))
            .catch(error => { console.log(error) });
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
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Delete</th>
                        <th><i class="fas fa-plus-circle" onClick={this.newExercise} /></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.exercises.map((exercise) => {
                        return (
                            <tr>
                                <td> {exercise.name ? exercise.name : "-"} </td>
                                <td> {exercise.sets ? exercise.sets : "-"} </td>
                                <td> {exercise.reps ? exercise.reps : "-"} </td>
                                {/*  <td> <i class="fas fa-cross" onClick={this.deleteExercise} /></td>*/}

                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        )
    }
}
