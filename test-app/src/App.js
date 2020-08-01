import React from 'react';
import Header from './layout/Header';
import Activity from './layout/Activity';
import Photos from './potos/Photo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Header />
          <Activity />
        </>
        
      </header>
    </div>
  );
}

export default App;
