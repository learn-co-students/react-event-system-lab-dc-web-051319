import React, { Component } from 'react';

class Keypad extends Component {
   eventHandler = () => console.log('Entering password...')
    
   render() { 
      return (
         <input onKeyUp={this.eventHandler} type="password"/>
      )
   }
}
 
export default Keypad;