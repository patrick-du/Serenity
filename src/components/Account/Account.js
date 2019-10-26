import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export default class Profile extends Component {
    logout = () => {
        localStorage.removeItem('jwtToken');
        this.props.history.push("/");
        window.location.reload();
    }

    render() {
        return (
            <Row noGutters={true}>
                Profile
                user picture

                user profile (update info)
                log out button
                {localStorage.getItem('jwtToken') &&
                    <button class="btn btn-danger" onClick={this.logout}>Logout</button>
                }
            </Row>
        )
    }
}