import React, { Component } from 'react';
import QuoteGenerator from './components/quote-generator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ron Swanson</h1>
        <QuoteGenerator />
      </div>
    );
  }
}

export default App;
