import React, {Component} from 'react'
import './Switch.css'

export default class Switch extends Component {
    render() {
        return (
            <label  className={this.props.isChecked ? "label-switch-dark" : "label-switch-light"}>
                <input 
                    name="isChecked"
                    type="checkbox"
                    checked={this.props.isChecked}
                    onChange={this.props.onChange}
                    className="switch"
                />
                <div>
                    <div></div>
                </div>
                {this.props.isChecked ? this.props.labelIsChecked : this.props.labelIsNotChecked}
            </label>
        );
    }
}