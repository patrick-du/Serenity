import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

export default function JournalProgressBar(props) {
    return (
        <div className="mt-3">
            <Row noGutters={true}>
                <Col><p className="JED-ProgressBar-Title">{props.title}</p></Col>
                <Col className="text-right mt-1">{props.rating}%</Col>
            </Row>
            <ProgressBar variant="test" className="JED-ProgressBar" now={props.rating}/>
        </div>

    )
}