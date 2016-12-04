import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Quiz from './Quiz'; 
import {Router, Route, hashHistory, IndexRoute} from 'react-router'; 
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  // <App />,
  <Router history={hashHistory}>
     <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="quiz" component={App} />
      {/*<Route path="events" component={Events} />
      <Route path="about" component={About} />*/}
     </Route>
  </Router>, 
  document.getElementById('root')
);
