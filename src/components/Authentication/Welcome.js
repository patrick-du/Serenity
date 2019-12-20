import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';
import Loader from '../Reusable/Loader';
import Register from './Register';
import Login from './Login';
import './Welcome.css';
import $ from 'jquery';

export default class Welcome extends Component {
    constructor() {
        super();
        this.setLoginViewFromRegister = this.setLoginViewFromRegister.bind(this);
        this.state = {}
    }

    getJWTToken = () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    }

    authorizationCheck = () => {
        axios.get('http://localhost:3000/authCheck')
            .then(res => {
                console.log("Authorized.")
                this.props.history.push("/home");
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status === 401) {
                    this.props.history.push("/");
                }
            });
    }

    setRegisterView = () => {
        $("#box").fadeOut(200);
        $("#welcomeView").fadeOut(200);
        $("#box").fadeIn(400);
        $("#registerView").fadeIn(400);
    }

    setLoginView = () => {
        $("#box").fadeOut(200);
        $("#welcomeView").fadeOut(200);
        $("#box").fadeIn(400);
        $("#loginView").fadeIn(400);
    }

    setLoginViewFromRegister = () => {
        $("#box").fadeOut(200);
        $("#registerView").fadeOut(200);
        $("#box").fadeIn(400);
        $("#loginView").fadeIn(400);
    }

    componentDidMount = () => {

        this.getJWTToken();
        this.authorizationCheck();
    }

    render() {
        return (
            <React.Fragment>

                <div className="standardBox" id="box">

                    <div id="welcomeView">
                        <Row noGutters={true}>
                            <Col>
                                <p className="welcome-title">serenity</p>
                                <p className="mt-1">/səˈrenədē/</p>
                                <ButtonGroup className="mt-3 mb-5">
                                    <Button variant="outline-secondary" style={{ paddingTop: 0, paddingBottom: 0 }} disabled> noun </Button>
                                    <Button variant="outline-secondary" style={{ paddingTop: 0, paddingBottom: 0 }} disabled> plural</Button>
                                </ButtonGroup>
                                <div>
                                    <p className="welcome-definitionTitle">DEFINITIONS</p>
                                    <p className="welcome-definitionText">1.&nbsp;&nbsp;&nbsp; The state or quality of being serene, calm, or tranquil;</p>
                                    <p className="welcome-definitionText">2.&nbsp;&nbsp;&nbsp; <span className="welcome-definitionText2"><a href="https://patrickdu.com/work/fgfbrands" className="linkdec" target="_blank" >A social wellness app aimed to improve one's physical and mental wellbeing</a></span></p>
                                </div>
                                <div>
                                    <p className="welcome-definitionTitle mt-4">ORIGIN OF SERENITY</p>
                                    <p className="welcome-definitionText">1.&nbsp;&nbsp;&nbsp; 1400-50; late Middle English;</p>
                                    <p className="welcome-definitionText">2.&nbsp;&nbsp;&nbsp; 2019; <span className="welcome-definitionText2"><a href="https://patrickdu.com" className="linkdec" target="_blank" >Patrick Du</a></span>;</p>
                                </div>
                                <hr className="my-5" />
                                <div>
                                    <p className="standardBox-subTitle text-center">Welcome to Serenity</p>
                                    <Button className="button-create mx-auto mt-3" style={{ width: "100%" }} onClick={this.setRegisterView}>New User</Button>
                                    <Button className="button-login mx-auto mt-3" style={{ width: "100%" }} onClick={this.setLoginView}>Existing User</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div id="registerView">
                        <Register postRegister={this.setLoginViewFromRegister}/>
                    </div>

                    <div id="loginView">
                        <Login history={this.props.history}/>
                    </div>
                </div>

                {/* <div className="standardBox">
                    <Row noGutters={true}>
                        <Col>
                            <p className="text-center">
                                <a href="https://github.com/patrick-du" target="_blank" className="mr-5"><i class="fab fa-github icon0" /></a>
                                <a href="https://www.linkedin.com/in/patrick-du3/" target="_blank" className="mr-5" ><i class="fab fa-linkedin-in icon0 " /></a>
                                <a href="mailto:patrickduu@gmail.com"><i class="fas fa-paper-plane icon0" /></a>
                            </p>
                        </Col>
                    </Row>
                </div> */}
            </React.Fragment>


        )
    }
}