import './App.css';
import Header from './components/Header';
import Command from './components/Command';
import List from './components/List';
import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from './store'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div style={{
        backgroundColor: '#131a22',
        color: '#dbdcdd'
      }}>
        <Header></Header>
        <Command></Command>
        <hr />
        <List></List>
        <div id="container" className="chart"></div>
      </div>
      </Provider>
    );
  }
}

