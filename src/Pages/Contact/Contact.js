import React, {Component} from 'react'
import './Contact.css'
import Input from '../../components/Input.js'
import Radio from '../../components/Radio.js'
import Textarea from '../../components/Textarea.js'
import Button from '../../components/Button.js'


export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state={
            firstName: "",
            lastName: "",
            gender: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    handleReset() {
        this.setState({
            firstName: "",
            lastName: "",
            gender: "",
            message: ""
        })
    }
    handleClick(event) {
        event.preventDefault()
        alert(this.props.t("submitedMessage"))
        this.handleReset();
    }
    render() {
        return (
            <div>
                <div className="form">
                    <form>
                        <Input 
                            name="firstName" 
                            value={this.state.firstName} 
                            label={this.props.t("firstName")}
                            placeholder={this.props.t("firstName")}
                            onChange={this.handleChange}
                            className="input-label-div"
                        />
                        <br/>
                        <Input 
                            name="lastName" 
                            value={this.state.lastName} 
                            label={this.props.t("lastName")}
                            placeholder={this.props.t("lastName")}
                            onChange={this.handleChange}
                            className="input-label-div"
                        />
                        <br/>
                        <Textarea 
                            name="message" 
                            value={this.state.message} 
                            label={this.props.t("message")}
                            placeholder={this.props.t("message")}
                            onChange={this.handleChange}
                            className="textarea-label-div"
                        />
                        <br/>
                        <Radio 
                            name="gender" 
                            label={this.props.t("male")}
                            current={this.state.gender} 
                            value="male" 
                            onChange={this.handleChange}
                        />
                        <Radio 
                            name="gender" 
                            label={this.props.t("female")}
                            current={this.state.gender} 
                            value="female"
                            onChange={this.handleChange}
                        />
                        <br/>
                        <Button
                            className="button1"
                            onClick={this.handleClick} 
                            type="submit" 
                            value="Submit" 
                            label={this.props.t("submit")}
                        />
                        <Button 
                            className="button2"
                            onClick={this.handleReset} 
                            type="reset" 
                            value="Reset" 
                            label={this.props.t("reset")}
                        />
                    </form>
                </div>
                <hr className="contact-hr"/>
                {
                    console.log(this.state.firstName),
                    console.log(this.state.lastName),
                    console.log(this.state.gender),
                    console.log(this.state.message)
                }
            </div>
        )
    }
}
