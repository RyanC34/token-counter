import React from 'react'
import { Text, Input } from '@geist-ui/react';
import PlayerControls from './PlayerControls.js'
import '../App.css';

function PlayerCard(props) {

    var {
        pMoney, betMoney, add100, winMoney
    } = props;

    return (
        <div className='test-class'>
            <Input placeholder='Enter New Name' />
            <Text h2>Player 1</Text>
            <Text h3>{pMoney}</Text>
            <PlayerControls betMoney={betMoney} add100={add100} winMoney={winMoney}/>
        </div>
    )
}

export default PlayerCard
