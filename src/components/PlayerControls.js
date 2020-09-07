import React from 'react'
import { Button } from '@geist-ui/react';
import '../App.css'


function PlayerControls(props) {
    var{
        betMoney, add100, winMoney
    } = props;

    return (
        <div className='PlayerControlBox'>
            <div className='TopBox'>
                <Button className="ButtonSpace" auto type='error' onClick={betMoney}>Bet(-100) </Button>
                <Button className="ButtonSpace" auto type='secondary' onClick={add100}>Add(+100)</Button>
            </div>
            
            <Button className="ButtonSpace" auto type='success' onClick={winMoney}>Win Pot</Button>
        </div>
    )
}

export default PlayerControls

