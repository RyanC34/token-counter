import React, {useState} from 'react'
import { Text, Input } from '@geist-ui/react';
import PlayerControls from './PlayerControls.js'
import '../App.css';

function PlayerCard(props) {
    // create a piece of state for the current name
    const [input, setInput] = useState('')
    const [name, setName] = useState('Player')

    var {
        pMoney, betMoney, add100, winMoney
    } = props;

    function enterNameHandler(e){
        if(e.key === 'Enter'){
            setName(input);
            setInput('')
        }
    }

    function nameHandler(e){
        setInput(e.target.value)
    }

    return (
        <div className='test-class'>
            {/* onChange, modify the state. Set value of Input equal to state. */}
            <Input value={input} onChange={nameHandler} onKeyPress={enterNameHandler} placeholder='Enter New Name'/>
            <Text h2>{name}</Text>
            <Text h3>{pMoney}</Text>
            <PlayerControls betMoney={betMoney} add100={add100} winMoney={winMoney}/>
        </div>
    )
}

export default PlayerCard
