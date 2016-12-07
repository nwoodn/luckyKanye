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
        <link href="https://fonts.googleapis.com/css?family=Lato|Playfair+Display" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />  
        <nav>
          <Navigation />
        </nav>
        <main role="main">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
