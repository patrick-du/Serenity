import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class CreateNewExercise extends Component {
    
    newExercise = () => {
        alert('hi')
    }

    render() {
        return (
            <i class="fas fa-plus-circle" onClick={this.newExercise}/>

        )
    }
}
