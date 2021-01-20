import React from 'react'

const Button = ({text,onClick,disabled}) => {
    return (
        <button className={`button ${disabled ? 'disabled': ''}`} onClick={onClick}>
            {text}
        </button>
    )
}
Button.defaultProps = {
    text:'Tell me a joke'
}

export default Button
