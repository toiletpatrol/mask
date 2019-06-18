import React, { Component } from 'react';
import InputMask from "react-input-mask";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value: "",
  };
  onChange = (e) => {
    this.setState({value: e.target.value});
    console.log("CHANGE", e.target.value);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <InputMask value={this.state.value} onChange={this.onChange} />
        </p>
      </div>
    );
  }
}

export default App;
