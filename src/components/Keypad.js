import React from 'react'
import { throws } from 'assert';

// Code Keypad Component Here

class Keypad extends React.Component {
   
    handleEvent = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <div>
            
                <input
                type='password'
                onKeyUp={this.handleEvent}
                />

            </div>
        )
    }
}

export default Keypad