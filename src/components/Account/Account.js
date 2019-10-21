import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export default class Profile extends Component {
    render() {
        return (
            <Row noGutters={true}>
                Profile
                user picture
                user profile (update info)
                log out button
             </Row>
        )
    }
}