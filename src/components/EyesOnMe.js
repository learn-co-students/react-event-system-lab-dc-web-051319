import React from 'react'

// Code EyesOnMe Component Here

class EyesOnMe extends React.Component {

    focus = () => {
        console.log('Good!')
    }

    blur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return(

            <div>
                     
                <button
                    onFocus={this.focus}
                    onBlur={this.blur}
                >
                
                Button
                
                </button>
            
            </div>

        )
    }
}

export default EyesOnMe