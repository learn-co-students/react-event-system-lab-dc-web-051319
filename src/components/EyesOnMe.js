// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    handleFocus(){
        console.log('Good!')
    }

    handleBlur(){
        console.log('Hey! Eyes on me!')
    }

    render(){
        return (
            <div>
                <button onBlur={this.handleBlur} onFocus={this.handleFocus} ></button>
            </div>
        )
    }
}

export default EyesOnMe