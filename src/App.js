import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import BetMoney from './components/BetMoney.js'
import PlayerCard from './components/PlayerCard.js'


function App() {
  return (
    <GeistProvider>
      <CssBaseline/>
      <div className="App">
        <header className="App-header" >
          <Header/>
          <BetMoney/>
          <div className='PlayerCardStyle'>
            <PlayerCard/>
            <PlayerCard/>
          </div>
        </header>
      </div>
    </GeistProvider>
  );
}

export default App;
