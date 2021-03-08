import React, {Suspense} from 'react'
import Navbar from './components/Navbar/Navbar.js'
import Dropdown from './components/Dropdown/Dropdown.js'
import Switch from './components/Switch/Switch.js'
import './App.css'
import Loading from './components/Loading.js'
import { withNamespaces } from 'react-i18next'
import i18n from './i18n.js'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
    mySwitch: {
        position: "absolute",
        right: 5,
        top: 20
    },
    myDropdown: {
        position: "fixed",
        right: 20,
        bottom: 5
    }
})


const SwitchDiv = ({children}) => {
    const classes = useStyles()
    return <div className={classes.mySwitch}>{children}</div>
}


const DropdownDiv = ({children}) => {
    const classes = useStyles()
    return <div className={classes.myDropdown}>{children}</div>
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: JSON.parse(localStorage.getItem("isChecked")) || false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event) {
        const {name, checked} = event.target
        this.setState({[name]: checked})
        localStorage.setItem("isChecked", JSON.stringify(checked));
    }
    handleClick(value) {
        i18n.changeLanguage(value)
        localStorage.setItem("language", JSON.stringify(value));
    }
    render() {
        return (
            <Suspense fallback={<Loading/>}>
                <Navbar isChecked={this.state.isChecked} t={this.props.t} />
                <SwitchDiv>
                    <Switch isChecked={this.state.isChecked} onChange={this.handleChange} labelIsChecked={this.props.t("lightMode")} labelIsNotChecked={this.props.t("darkMode")}/>                    
                </SwitchDiv>
                <DropdownDiv>
                    <Dropdown isChecked={this.state.isChecked} t={this.props.t} onClick={this.handleClick}/>
                </DropdownDiv>
            </Suspense>
        );
    }
}

export default withNamespaces()(App);
