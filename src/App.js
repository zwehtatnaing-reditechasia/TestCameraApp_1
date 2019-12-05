import React from 'react';
import logo from './logo.svg';
import './App.css';
import StuffingContainer from './stuffingContainer/stuffingContainer'
import StuffingContainerDynamic from './stuffingContainerDynamic/stuffingContainerDynamic'

function App() {
  return (
    <div className="App" style={{padding: 15}}>
      <StuffingContainerDynamic />
    </div>
  );
}

export default App;
