import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    focus: {
        outline: "none",
        boxShadow: [0, 0, 8, "#c2c2c2"]
    }
})

const Input = (props) => {
    const classes = useStyles()
    return (
        <div className={props.className}>
            <label>
                {props.label}&nbsp;
            </label>
            <input
                name={props.name}
                type="text"
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                autoComplete="off"
            />
        </div>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string
}

export default Input