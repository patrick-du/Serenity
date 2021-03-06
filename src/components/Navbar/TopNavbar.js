import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default class TopNavbar extends Component {
    render() {
        return (
            <Navbar expand="md" className="p-0">
                <Navbar.Brand>Serenity.</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/journal" className="linkdec navLink">
                            <Nav.Link href="#journal">Journal</Nav.Link>
                        </Link>
                        <Link to="/assessments" className="linkdec navLink">
                            <Nav.Link href="#assessments">Assessments</Nav.Link>
                        </Link>
                        <Link to="/statistics" className="linkdec navLink">
                            <Nav.Link href="#statistics">Statistics</Nav.Link>
                        </Link>
                        <Link to="/account" className="linkdec navLink">
                            <Nav.Link href="#account">Account</Nav.Link>
                        </Link>

                    </Nav>


                </Navbar.Collapse>
            </Navbar>
        )
    }
}

