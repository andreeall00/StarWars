import React, {Component} from 'react'
import "./Dropdown.css"

export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.container = React.createRef();
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({open: false})
        }
    }
    handleClick(event) {
        this.setState(prevState => ({open: !prevState.open}))
    }
    render() {
        return(
            <div className="dropdown-container" ref={this.container}>
                <button className={this.props.isChecked ? "dropdown-button-dark" : "dropdown-button-light"} onClick={this.handleClick}>
                    {this.props.t("language")}
                </button>
                {this.state.open && ( 
                    <div className={this.props.isChecked ? "dropdown-dark" : "dropdown-light"}>
                        <ul>
                            <li onClick={() => this.props.onClick("ro")}>Ro <img className="li-img" src="https://image.flaticon.com/icons/svg/197/197587.svg" alt="Romania" width="20" height="20"/></li>
                            <li onClick={() => this.props.onClick("en")}>En <img className="li-img" src="https://image.flaticon.com/icons/svg/197/197374.svg" alt="England" width="20" height="20"/></li>
                            <li onClick={() => this.props.onClick("sp")}>Sp <img className="li-img" src="https://image.flaticon.com/icons/svg/197/197593.svg" alt="Spain" width="20" height="20"/></li>
                            <li onClick={() => this.props.onClick("fr")}>Fr <img className="li-img" src="https://image.flaticon.com/icons/svg/197/197560.svg" alt="France" width="20" height="20"/></li>
                        </ul>
                    </div>  
                )}       
            </div>
        );
    }
}