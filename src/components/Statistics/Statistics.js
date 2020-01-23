import React, { Component } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Chartist from 'chartist';
import axios from 'axios';
import FadeIn from 'react-fade-in';
import $ from 'jquery';
import StatisticsTrendChart from './StatisticsTrendChart';

export default class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stressTrend: [],
            depressionTrend: [],
            anxietyTrend: [],
        };
    }

    async getAllTrends() {
        axios.get(`http://localhost:3000/users/5db1abf4e12aa5442862e8a6/statistics/trends`)
            .then((res) => {
                console.log(res.data)
                this.setState({ 
                    stressTrend: res.data.stressArr,
                    depressionTrend: res.data.depressionArr,
                    anxietyTrend: res.data.anxietyArr
                })
                console.log(this.state)
                this.generateChart("#chartAll", [this.state.stressTrend, this.state.depressionTrend, this.state.anxietyTrend])
                this.generateChart("#chartStress", [this.state.stressTrend])
                this.generateChart("#chartDepression", [this.state.depressionTrend])
                this.generateChart("#chartAnxiety", [this.state.anxietyTrend])
            })
            .catch((e) => {
                alert("bye")
                console.log(e)
            })
    }

    generateChart(idSelector, data) {
        new Chartist.Line(idSelector, {
            labels: ['Entries'],
            series: data
        }, {
            high: 100,
            low: 0,
            axisY: {
                onlyInteger: true,
                referenceValue: 5
            },
            axisX: {
                // We can disable the grid for this axis
                showGrid: false,
                // and also don't show the label
                showLabel: false
              },
            fullWidth: true,
        });
    }

    hideCharts(chartIdArr) {
        chartIdArr.forEach(chart => $(chart).css("display","none"))
    }

    componentDidMount() {
        this.getAllTrends();
    }

    render() {
        return (
            <FadeIn delay={150} transitionDuration={300}>
            <div className="standardBox">
                <Row>
                    <Col>
                        <p className="standardBox-title">Statistics and Trends</p>
                    </Col>
                    <Col className="text-right">
                    </Col>
                </Row>
            </div>
            <StatisticsTrendChart name="Trends of Stress, Depression, Anxiety" chartId="chartAll"/>
            <StatisticsTrendChart name="Trends of Stress" chartId="chartStress"/>
            <StatisticsTrendChart name="Trends of Depression" chartId="chartDepression"/>
            <StatisticsTrendChart name="Trends of Anxiety" chartId="chartAnxiety"/>
           
            </FadeIn>

        )
    }
}