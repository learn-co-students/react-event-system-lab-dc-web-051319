import React, {Component} from 'react';

export default class EyesOnMe extends Component{

    focusing = () => {console.log('Good!')}
    bluring = () => {console.log('Hey! Eyes on me!')}
    render(){
        return (
            <div>
            <button 
            onFocus={this.focusing}
            onBlur={this.bluring} 
            />
            </div>
        )
    }

}