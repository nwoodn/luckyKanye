import React, { Component } from 'react';
import Navigation from './Navigation';
import Quiz from './Quiz';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        <Navigation />
        <Quiz />
      </div>
    );
  }
}

export default App;
