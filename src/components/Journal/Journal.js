import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";

import SectionTitle from "../Reusable/SectionTitle";
import CreateNewJournal from "../Journal/CreateNewJournal";
import JournalEntryDisplay from "../Journal/JournalEntryDisplay";
import Loader from "../Reusable/Loader";
import FadeIn from "react-fade-in";

export default class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journalEntries: [],
      isReady: false,
      userJournalsExist: false
    };
  }

  async getUserJournals() {
    axios
      .get(`http://localhost:3000/users/5db1abf4e12aa5442862e8a6/journals`)
      .then(res => {
        setTimeout(
          () => this.setState({ journalEntries: res.data, isReady: true }),
          200
        );
      })
      .catch(e => {
        console.log(e);
      });
  }

  async getJWT() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
  }

  componentDidMount() {
    this.getJWT();
    this.getUserJournals();
  }

  render() {
    // if (!this.state.isReady) {
    //     return (
    //         <FadeIn>

    //         <p>...</p>
    //         <p>...</p>
    //         <p>...</p>
    //         <p>...</p>
    //         <p>...</p>
    //         <p>...</p>
    //         <p>...</p>
    //         <p>...</p>
    //         </FadeIn>

    //     )
    // } else if (this.state.isReady) {
    return (
      <Row noGutters={true}>
        <Col>
          <FadeIn delay={150} transitionDuration={300}>
            <CreateNewJournal />
            <JournalEntryDisplay journals={this.state.journalEntries} />
          </FadeIn>
        </Col>
      </Row>
    );
  }
}
