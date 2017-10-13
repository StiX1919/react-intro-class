import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const myArray = [{name: 'spencer'}, {name: 'farmer joe'}]
    const myBool = false;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {myBool || <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>}
        {
          myArray.map(val => <p>{val.name}</p>)
        }
      </div>
    );
  }
}

export default App;
