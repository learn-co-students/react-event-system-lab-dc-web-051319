// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{
  
  onFocusEventText = () => {
    console.log("Good!");
  }

  onBlurEventText = () => {
    console.log("Hey! Eyes on me!");
  }

  render(){
    return(
      <button onFocus = {this.onFocusEventText} onBlur = {this.onBlurEventText}/>
    )
  }
}
export default EyesOnMe
