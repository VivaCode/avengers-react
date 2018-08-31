import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor() {
    super ();
    this.state = {
      avengers: ['Thor', 'Loki', 'Ironman', 'Captain America', 'Hulk', 'Black Widow', 'Hawkeye', 'Scarlet Witch']
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Emily</h1>
        </header>
        <p className="App-intro">
          {this.state.avengers.map(avengers => <div>{avengers}</div>)}
        </p>
      </div>
    );
  }
}

export default App;
