import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './fonts/SFProDisplay-UltraLight.ttf'
import './fonts/SFProDisplay-Light.ttf'
import './fonts/SFProDisplay-Regular.ttf'
import './fonts/SFProDisplay-Medium.ttf'
import './fonts/SFProDisplay-Bold.ttf'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Bootstrap Imports
import { Container, Row, Col } from 'react-bootstrap';

// Auth Component Imports
import Welcome from './components/Authentication/Welcome';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';

import App from './App';

ReactDOM.render(<App/>,
    // <Router>
    //     <Switch>
    //         <Route exact path="/dashboard" component={App} />
    //         <Route exact path="/" component={Welcome} />
    //         <Route exact path="/register" component={Register} />
    //         <Route exact path="/login" component={Login} />
    //     </Switch>
    // </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
