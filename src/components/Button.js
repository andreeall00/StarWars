import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button type={props.type} value={props.value} onClick={props.onClick} className={props.className}>
            {props.label}
        </button>
    )
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string
}

export default Button