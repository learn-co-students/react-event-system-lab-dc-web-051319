// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
  // constructor() {
  //
  // }

  handleInputPassword = () => console.log('Entering password...')


  render() {
    return (
      <div>
         <input
           type="password"
           onKeyUp={this.handleInputPassword}
         />
       </div>
    )
  }
}

export default Keypad
