// Mr. Burns has requested us to build a new keypad component for the nuclear plant, since the last one was way too complicated for his employees to use. We'll keep things super simple instead, and use an <input type="password" /> field to capture input. Here's how to complete the exercise:

// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.

// function ActionLink() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }
  
//     return (
//       <a href="#" onClick={handleClick}>
//         Click me
//       </a>
//     );
//   }

import React, {Component} from 'react' 
class Keypad extends Component {

    handleClick = () => {
        console.log('Entering password...')
    }

    render(){
        
        return(
            <div>
                <input type="password" onKeyUp={this.handleClick}/>
            </div>
        )
    }
}

export default Keypad
// changeState = () => {
//     this.setState({color: "#333"})
//  }

//  render(){
//      return (

//          <div onClick={this.changeState}  className="cell" style={{backgroundColor: this.state.color}}></div>

//      )
//  }

