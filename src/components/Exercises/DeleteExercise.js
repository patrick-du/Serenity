import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class DeleteExercise extends Component {
    
    // async deleteExercise (exerciseId) {

    //     await fetch(`http://patrickdu-serenity-server.herokuapp.com/users/${exerciseId}/exercises/delete`, {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             "Accept": "*/*",
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then(response => console.log(response.json()))
    //     .catch(error => { console.log(error) });
    // }

    render() {
        return (
            <i class="fas fa-cross" onClick={this.deleteExercise(this.props.exercise._id)}/>

        )
    }
}
