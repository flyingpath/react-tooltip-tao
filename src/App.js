import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReactTooltip from './ReactTooltip'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          className="App-link"
          style={{position:'relative'}}
          onMouseEnter={()=>{console.log('onmouseovera')}}
        >
          Learn React
          <ReactTooltip />
        </div>
      </header>
    </div>
  );
}

export default App;
