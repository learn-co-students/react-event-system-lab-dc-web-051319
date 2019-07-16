// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    handlerOnFocus = () => console.log('Good!')
    handleOnBlur = () => console.log('Hey! Eyes on me!')

    render(){
        return (

            <div>
                <button onFocus={this.handlerOnFocus} onBlur={this.handleOnBlur}></button>
            </div>

        )
    } 
}

export default EyesOnMe