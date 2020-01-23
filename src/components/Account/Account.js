import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import FadeIn from 'react-fade-in';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            accountDetails: ''
        }
    }

    componentDidMount() {
        this.getSpecificUser();
    }

    getSpecificUser = () => {
        axios.get(`http://localhost:3000/users/5db1abf4e12aa5442862e8a6`)
            .then((res) => {
                this.setState({ accountDetails: res.data });
            })
            .catch((e) => {
                alert(e)
            })
    }
    
    logout = () => {
        localStorage.removeItem('jwtToken');
        this.props.history.push("/");
        window.location.reload();
    }

    render() {
        return (
            <FadeIn delay={150} transitionDuration={300}>
            <div className="standardBox">
                <Row>
                    <Col>
                        <p className="standardBox-title">Personal Information</p>
                    </Col>
                    <Col className="text-right">
                    </Col>
                </Row>
                <Row noGutters={true} className="AccountDetails-Row">
                    <Col>
                        <p className="AccountDetails-Heading">Name</p>
                        <p className="AccountDetails-Info">{this.state.accountDetails.name}</p>
                    </Col>
                </Row>
                <Row noGutters={true} className="AccountDetails-Row">
                    <Col>
                        <p className="AccountDetails-Heading">User ID</p>
                        <p className="AccountDetails-Info">{this.state.accountDetails._id} </p>
                    </Col>
                </Row>
                <Row noGutters={true} className="AccountDetails-Row">
                    <Col>
                        <p className="AccountDetails-Heading">Email</p>
                        <p className="AccountDetails-Info">{this.state.accountDetails.email} </p>
                    </Col>
                </Row>
                <Row noGutters={true} className="AccountDetails-Row">
                    <Col>
                        <p className="AccountDetails-Heading">Password</p>
                        <p className="AccountDetails-Info">{this.state.accountDetails.password} </p>
                    </Col>
                </Row>
                <Row noGutters={true} className="AccountDetails-Row">
                    <Col>
                        <p className="AccountDetails-Heading">Creation Date</p>
                        <p className="AccountDetails-Info">{this.state.accountDetails.createdOn} </p>
                    </Col>
                </Row>
                {localStorage.getItem('jwtToken') &&
                    <Button className="button-delete mt-3" onClick={() => this.logout()}>Logout</Button>
                }

            </div>
            </FadeIn>
        )
    }
}