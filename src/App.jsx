import './App.css';
import Header from './components/Header';
import Tradition from './components/Tradition';
import Nlp from './components/Nlp'
import List from './components/List';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="body">
        <Header></Header>
        <Tradition></Tradition>
        <Nlp></Nlp>
        <hr/>
        <List></List>
        <div id="container" className="chart"></div>
      </div>
    );
  }
}

