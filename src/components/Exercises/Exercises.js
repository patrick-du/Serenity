import React, { Component } from 'react';
import { Container, Row, Form, } from 'react-bootstrap';



export default class Exercises extends Component {
    
    fetchExercises = () => {
        fetch('https://patrickdu-serenity-server.herokuapp.com/users/email/exercises', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: 'bossman@gmail.com'}),    
        })
        .then(data => {console.log(data)})
        .catch (error => {console.log(error)});
    }
        
    
    render() {
        return (
            <Container className="middleCol">
                <Row>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Search..." />
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        )
    }
}