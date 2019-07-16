import React from "react"

const handler = () => console.log("Entering password...")

function Keypad(props){
    return (
        <input onKeyUp={handler} type="password" />
    )
}

export default Keypad