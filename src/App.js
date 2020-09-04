import React, { useState } from 'react';

import './App.css';
import Header from "./components/Header.js";
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import BetMoney from './components/BetMoney.js'
import PlayerCard from './components/PlayerCard.js'


function App() {
  const [potMoney, setPotMoney] = useState(9999)
  const [player1Money, setPlayer1Money] = useState(100)
  const [player2Money, setPlayer2Money] = useState(100)

  function resetPotMoney(){
    setPotMoney(0);
  }

  // player 1 bet (-100 from p1, +100 to pot)
  function player1Bet() {
    if (player1Money > 0) {
      // -100 from p1
      let newPlayer1Money = player1Money - 100;
      setPlayer1Money(newPlayer1Money);

      // +100 to pot
      let newPotMoney = potMoney + 100
      setPotMoney(newPotMoney);
    }
    // else do nothing
  }

  // player 2 bet (-100 from p2, +100 to pot)
  function player2Bet() {
    if (player2Money > 0) {
      // -100 from p1
      let newPlayer2Money = player2Money - 100;
      setPlayer2Money(newPlayer2Money);

      // +100 to pot
      let newPotMoney = potMoney + 100
      setPotMoney(newPotMoney);
    }
    // else do nothing
  }

  // player 1 add (+100 to p1)
  function addP1(){
    let newPlayer1Money = player1Money + 100;
    setPlayer1Money(newPlayer1Money)
  }

  // player 2 add (+100 to p2)
  function addP2(){
    let newPlayer2Money = player2Money + 100;
    setPlayer2Money(newPlayer2Money)
  }


  // player 1 win pot (potMoney all goes to p1)
  function p1WinPot(){
    let newPlayer1Money = player1Money + potMoney
    setPlayer1Money(newPlayer1Money)
    setPotMoney(0)
  }

  // player 2 win pot (potMoney all goes to p2)
  function p2WinPot(){
    let newPlayer2Money = player2Money + potMoney
    setPlayer2Money(newPlayer2Money)
    setPotMoney(0)
  }

  return (
    <GeistProvider>
      <CssBaseline/>
      <div className="App">
        <header className="App-header" >
          <Header/>
          <BetMoney amount={potMoney} resetPot={resetPotMoney}/>
          <div className='PlayerCardStyle'>
            <PlayerCard
              pMoney={player1Money} 
              betMoney={player1Bet} 
              add100={addP1} 
              winMoney={p1WinPot}
            />
            <PlayerCard 
              pMoney={player2Money} 
              betMoney={player2Bet} 
              add100={addP2} 
              winMoney={p2WinPot}
            />
          </div>
        </header>
      </div>
    </GeistProvider>
  );
}

export default App;
