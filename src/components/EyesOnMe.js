// Code EyesOnMe Component Here
import React from "react"

export default class EyesOnMe extends React.Component{
    good = ()=>{
        console.log("Good!")
    }
    eyes = ()=>{console.log("Hey! Eyes on me!")}
    render(){
        return(
            <div>
                <button onFocus={this.good} onBlur={this.eyes}></button>
            </div>
        )
    }
}

// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'