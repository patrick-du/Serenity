import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './fonts/SFProDisplay-UltraLight.ttf'
import './fonts/SFProDisplay-Light.ttf'
import './fonts/SFProDisplay-Regular.ttf'
import './fonts/SFProDisplay-Medium.ttf'
import './fonts/SFProDisplay-Bold.ttf'
import './fonts/PlayfairDisplay-Regular.ttf'
import './fonts/PlayfairDisplay-Bold.ttf'

import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
