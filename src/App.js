import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import Project from './Components/Project/Project'

class App extends Component {


  render() {
    return (
      <div style={{color: '#424242'}}>
        <Nav />
        <Project />
      </div>
    );
  }
}

export default App;
