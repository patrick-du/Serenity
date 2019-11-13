import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Loader from '../Loader';


export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: true
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
                        <div>hi</div>
                    </Col>
                </Row>
            )
        }
    }
}
