import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AvengersList from "./Components/AvengersList";


class App extends Component {
  constructor() {
    super ();
    this.state = {
      avengers: [
                {id:1,name:'Thor'}, 
                {id:2, name:'Loki'}, 
                {id:3,name:'Ironman'}, 
                {id:4, name:'Captain America'}, 
                {id:5, name:'Hulk'}, 
                {id:6, name:'Black Widow'}, 
                {id:7, name:'Hawkeye'}, 
                {id:8, name:'Scarlet Witch'}
              ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Emily</h1>
        </header>
          <AvengersList avengers={this.state.avengers}/>
      </div>
    );
  }
}

export default App;
