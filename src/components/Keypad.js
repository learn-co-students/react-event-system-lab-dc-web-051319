import React, {Component} from 'react';

export default class Keypad extends Component{


    putPassword = () => console.log('Entering password...')
    render(){
        return(
            <div>
            <input type="password" 
            onKeyUp={this.putPassword}/>
            </div> 
            
        )
    }
}