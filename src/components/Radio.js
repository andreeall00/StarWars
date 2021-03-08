import React from 'react'
import PropTypes from 'prop-types'

const Radio = (props) => {
    return (
        <label>
            <input
                type="radio"
                value={props.value}
                name={props.name}
                checked={props.current===props.value}
                onChange={props.onChange}
            />
            {props.label}
        </label>
    )
}

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string
}

export default Radio