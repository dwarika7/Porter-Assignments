// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ShowListings from '../src/containers/shows/ShowsList'
import ShowDetails from '../src/containers/showDetails/showDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Component404 from '../src/components/404/Component404'

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

ReactDOM.render((
<Router>
    <Route component={ScrollToTop} />
    <Switch>
        <Route exact path="/" component={ShowListings} />
        <Route exact path="/show/:id" component={ShowDetails}/>
        <Route component={Component404} />
    </Switch>
</Router>), 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
