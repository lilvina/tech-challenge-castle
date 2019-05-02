import React, { Component } from 'react';
//import logo from './logo.svg';
import MapContainer from '../src/components/MapContainer.js';
import Lists from '../src/components/Lists.js'
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />
        <Lists />
      </div>
    );
  }
}

export default App;
