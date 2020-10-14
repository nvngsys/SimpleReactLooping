/**
 * Jacks Changes to react build template
 * Changing the default method call in ./App to use my
 * .js file of ./Profile
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Profile from './Profile';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Profile />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
