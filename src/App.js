import React, { Component } from 'react';
import Navigation from './Navigation';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        <Navigation />
      </div>
    );
  }
}

export default App;
