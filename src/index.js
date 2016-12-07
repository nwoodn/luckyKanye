import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Quiz from './Quiz'; 
import Home from "./Home";
import Events from './Events';
import About from './About';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'; 

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
     <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="quiz" component={Quiz} />
      <Route path="events" component={Events} />
      <Route path="about" component={About} />
     </Route>
  </Router>, 

  document.getElementById('root')
);
