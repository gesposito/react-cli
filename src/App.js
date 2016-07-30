import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import CardList from './Card/CardList';

class App extends Component {
  componentDidMount() {
    const js = document.getElementById('github-cards');
    if (!js) { return; }
    js.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
  }

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <a href="https://github.com/facebookincubator/create-react-app">
            <img src={logo} className="App-logo" alt="built with create-react-" />
          </a>
        </section>

        <section className="App-wrapper container-fluid">
          <CardList />
        </section>
      </div>
    );
  }
}

export default App;
