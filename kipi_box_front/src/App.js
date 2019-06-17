import React from 'react';
import './App.css';
import PanelContainer from './components/container/panelContainer/panelContainer';
import HeaderContainer from './components/container/headerContainer/headerContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <PanelContainer/>
    </div>
  );
}

export default App;
