import React from 'react'
import './InputSubmit.css'
function InputSubmit(props) {
    return (
        <input disabled={props.disabled || false} type="submit" value="Enter" onClick={e => props.handleSubmit(e)} />
    )
}

export default InputSubmit
