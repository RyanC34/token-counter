import React from 'react'
import { Button } from '@geist-ui/react';
import '../App.css'

function PlayerControls() {
    return (
        <div className='PlayerControlBox'>
            <div className='TopBox'>
                <Button auto type='error'>Bet(-100)</Button>
                <Button auto type='secondary'>Add(+100)</Button>
            </div>
            
            <Button auto type='success'>Win Pot</Button>
        </div>
    )
}

export default PlayerControls

