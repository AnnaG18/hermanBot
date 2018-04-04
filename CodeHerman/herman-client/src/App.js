import React, { Component } from 'react';
import {Chat} from 'botframework-webchat';
import logo from './logo.svg';
import './App.css';

const direct_line_secret = process.env.DIRECT_LINE_SECRET;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="App-intro">
          <Chat directLine={{ secret: direct_line_secret }} user={{ id: 'user_id', name: 'user_name' }}/>
        </main>
      </div>
    );
  }
}

export default App;
