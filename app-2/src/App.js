import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      pets: [
        'dog',
        'cat',
        'hamster',
        'squid',
        'turtle'
      ]
    }
  }

  render() {
    let petsToDisplay = this.state.pets.map( (element, index) => {
      return(
        <h2 key= { index }>{ element }</h2>
      )
    })

  return (
    <div className = "App">
    { petsToDisplay }
    </div>
  );
  }
}

export default App;
