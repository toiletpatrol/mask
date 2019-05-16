import React, { Component } from 'react';
import InputMask from "react-input-mask";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <InputMask mask="+7 (999) 999-99-99" />
        </p>
      </div>
    );
  }
}

export default App;
