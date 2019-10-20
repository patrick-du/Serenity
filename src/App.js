import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Dashboard from './Dashboard';
import Authentication from './components/Authentication/Authentication';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';

import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
    };
  }

  render() {
    if (this.state.isAuthenticated) {
      return (
        <Dashboard />
      )
    } else {
      return (
        <Router>
          <Container className="app" fluid={true}>
            <Row noGutters={true}>
              <Col sm={2} md={2} lg={2} />
              <Col sm={8} md={8} lg={8}>
                <div className="authBox">
                  <Switch>
                    <Route exact path="/" component={Authentication} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                  </Switch>
                </div>
              </Col>
              <Col sm={2} md={2} lg={2} />

            </Row>
          </Container>
        </Router>

      )
    }
  }
}


