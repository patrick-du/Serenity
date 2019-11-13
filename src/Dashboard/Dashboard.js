import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Bootstrap Imports
import { Container, Row, Col } from 'react-bootstrap';

// Dashboard Component Imports
import SideNav from './components/SideNav/SideNav';
import Journal from './components/Journal/Journal';
import Exercises from './components/Exercises/Exercises';
import Community from './components/Community/Community';
import Account from './components/Account/Account';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Loader.css';
import './components/SideNav/SideNav.css';
import './components/Journal/Journal.css';
import './components/Exercises/Exercises.css';
import './components/Community/Community.css'
import './components/Account/Account.css';
import './App.css';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      
       <Router>
         <Container className="appDash" fluid={true}>
           <Row noGutters={true}>
             <Col sm={2} md={2} lg={2}>
               <SideNav />
             </Col>
             <Col sm={10} md={10} lg={10} className="rightCol overflow-auto">
               <Switch>
                 <Route exact path="/dashboard/journal" component={Journal} />
                 <Route exact path="/dashboard/exercises" component={Exercises} />
                 <Route exact path="/dashboard/community" component={Community} />
                 <Route exact path="/dashboard/account" component={Account} />
               </Switch>
             </Col>
           </Row>
         </Container>
       </Router>
    )
  }
}


