import React, { Component } from 'react';
import KubraLoadingSvg from './components/KubraLoadingSvg'
import './css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <KubraLoadingSvg message={'Loading...'} />
      </div>
    );
  }
}

export default App;
