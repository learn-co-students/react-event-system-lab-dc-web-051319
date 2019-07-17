// Code Keypad Component Here
import React from "react"

export default class Keypad extends React.Component{
    // constructor(){
    //     super()    
    // }

    print = () =>{
        console.log('Entering password...')
    }

    render(){
        return(
            <div>
                <input onKeyUp={this.print} type="password" ></input>
            </div>
        )
    }
}