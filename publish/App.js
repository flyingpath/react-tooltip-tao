import React from 'react';
import './App.css';

import ReactTooltip from './src/ReactTooltip'

function App() {
  return (
    <div className="demo">
      <div className = 'top' >
        Learn React
        <ReactTooltip position='right'>
          5678
        </ReactTooltip>
      </div>
      <div className = 'bottom' >
        Learn React
        <ReactTooltip position='right'>
          12344444444444
        </ReactTooltip>
      </div>
      <div className = 'left' >
        Learn React
        <ReactTooltip position='right'>
          12344444444444
        </ReactTooltip>
      </div>
      <div className = 'right' >
        Learn React
        <ReactTooltip position='right'>
          12344444444444
        </ReactTooltip>
      </div>
    </div>
  )
}

export default App;
