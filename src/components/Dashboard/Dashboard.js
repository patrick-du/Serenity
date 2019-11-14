import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Loader from '../Loader';

// Bootstrap Imports
import { Container, Row, Col } from 'react-bootstrap';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    if (!this.state.isReady) {
      return (
        <Row noGutters={true}>
          <Col>
            <Loader />
          </Col>
        </Row>
      )
    } else if (this.state.isReady) {
      return (
        <Row noGutters={true}>
          <Col>
          </Col>
        </Row>
      )
    }
  }
}


