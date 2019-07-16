
import React, {Component} from 'react' 
class EyesOnMe extends Component {

    focusEvent = () => {
        console.log("Good!")
    }
    blurEvent = () => {
        console.log("Hey! Eyes on me!")
    }


    render(){
        
        return(
            <div>
          <button 
          onFocus={this.focusEvent} 
          onBlur={this.blurEvent} > 
          </button>
          </div>
        )
    }
}


// handleClick = () => {
//     console.log('Entering password...')
// }

// render(){
    
//     return(
//         <div>
//             <input type="password" onKeyUp={this.handleClick}/>
//         </div>
//     )
// }
// }

export default EyesOnMe


// 1. In the `components/EyesOnMe.js` file, create a `EyesOnMe` React component.
// 2. In that component, render a `button`.
// 3. On that `button`, add event handlers that listens for the `focus` and `blur` events.
// 4. When the `focus` event fires, use `console.log` to print out the text `'Good!'`.
// 5. When the `blur` event fires, use `console.log` to print out the text `'Hey! Eyes on me!'`.
// // changeState = () => {
//     this.setState({color: "#333"})
//  }

//  render(){
//      return (

//          <div onClick={this.changeState}  className="cell" style={{backgroundColor: this.state.color}}></div>

//      )
//  }

