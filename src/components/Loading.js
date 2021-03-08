import React, { Component } from 'react'


export default class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Loading'
        }
    }
    componentDidMount() {
        const stopper = this.state.text + '...'
        this.interval = window.setInterval(() =>
            this.state.text === stopper ? this.setState({ text: 'Loading' }) :
                this.setState((prevState) => { const newText = prevState.text + '.'; return { text: newText } }),
            300
        )
    }
    componentWillUnmount() {
        window.clearInterval(this.interval)
    }
    render() {
        return (
            <p>{this.state.text}</p>
        )
    }
}