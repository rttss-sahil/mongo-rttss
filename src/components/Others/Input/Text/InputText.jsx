import React from 'react'
import './InputText.css'

function InputText(props) {
    return (
        <div className="input__text">
            <label htmlFor={props.name}>{props.label}
                <span className="error_text">{props.error && <div>{props.errorText || '*'}</div>}</span>
            </label>
            <input
                type="text"
                style={props.error ? { borderColor: '#b93c0a' } : {}}
                onChange={e => props.handleChange(e)}
                name={props.name}
                onFocus={e => props.focusHandler(e)}
                onBlur={e => props.blurHandler(e)}
            />
        </div>
    )
}

export default InputText
