import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export default class Workouts extends Component {
    render() {
        return(
            <Container className="middleCol">
                <Row>
                    Your Workouts
                </Row>
            </Container>       
        )
    }
}