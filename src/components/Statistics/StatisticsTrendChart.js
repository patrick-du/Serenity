import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import $ from 'jquery';

export default class StatisticsTrendChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stressTrend: [],
            depressionTrend: [],
            anxietyTrend: [],
        };
    }
    
    render() {
        return (         
            <div className="standardBox" id={this.props.id}>
                <Row noGutters={true}>
                    <p className="standardBox-text-subtitle">{this.props.name}</p>
                    <div className="ml-auto">
                        <Button className="button-cancel" onClick={() => $(`#${this.props.chartId}`).slideToggle("slow")}>Toggle</Button>
                    </div>
                </Row>
                <div class="ct-chart ct-golden-section mt-5" id={this.props.chartId}></div>
            </div>
        )    
    }
}