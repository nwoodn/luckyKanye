import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Events from './Events';

import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>#Kanye2020</h2>
        </div>
        <About/>
        <Events/>
      </div>
    );
  }
}

export default App;
