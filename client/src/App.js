import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from './components/recipes/recipes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Recipes />
    </div>
  );
}

export default App;
