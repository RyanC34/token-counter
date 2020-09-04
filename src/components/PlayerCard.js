import React from 'react'
import { Text, Input } from '@geist-ui/react';
import PlayerControls from './PlayerControls.js'
import '../App.css';

function PlayerCard(props) {

    return (
        <div className='test-class'>
            <Input placeholder='Enter New Name' />
            <Text h2>Player 1</Text>
            <Text h3>{props.pMoney}</Text>
            <PlayerControls/>
        </div>
    )
}

export default PlayerCard
