import React, { Component } from 'react';
import Navigation from './Navigation';
import Quiz from './Quiz';
import logo from './logo.svg';
import './App.css';
import Events from './Events';

import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        <Navigation />
        <Quiz />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>#Kanye2020</h2>
        </div>
        <About/>
        <Events/>

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
