import React from 'react'
import PropTypes from 'prop-types'

const Textarea = (props) => {
    return (
        <div className={props.className}>
            <label>
                {props.label}
            </label>
            <textarea
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                rows="4"
                cols="30"
            />
         </div>
    );
}

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Textarea