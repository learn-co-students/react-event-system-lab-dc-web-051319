// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    onFocus = () => {
        console.log("Good!")
    }

    onBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button onBlur={this.onBlur} onFocus={this.onFocus}>
                Button
            </button>
        )
    }
}

export default EyesOnMe