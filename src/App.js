import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import UserAuth from './components/UserAuth';
import Dashboard from './components/Dashboard';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    padding: '100px 100px'
  }
})

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to="/">User Auth</Link> </li>
            <li> <Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        <Switch>
        <Route path="/">
            <UserAuth/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App" >
    //   <header className="App-header">
    //   </header>
    // </div>
  );
}


