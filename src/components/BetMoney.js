import React from 'react'
import { Button, Text } from '@geist-ui/react';

function BetMoney(props) {
    let displayMoneyAmount = props.amount;
    return (
        <div>
            <Text h3>{displayMoneyAmount}</Text>
            <Button auto type="error" onClick={props.resetPot}>New Game</Button>
        </div>
    )
}

export default BetMoney;
