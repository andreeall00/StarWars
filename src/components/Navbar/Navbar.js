import React, {Component} from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import SearchList from '../../Pages/SearchList/SearchList.js'
import Home from '../../Pages/Home/Home'
import Contact from '../../Pages/Contact/Contact'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav className={this.props.isChecked ? "navigation-dark" : "navigation-light"}>
                    <ul>
                        <li><Link to='/'>{this.props.t("home")}</Link></li>
                        <li><Link to='/search'>{this.props.t("search")}</Link></li>
                        <li><Link to='/contact'>{this.props.t("contact")}</Link></li>
                    </ul>
                    <hr/>
                </nav>
                <div className={this.props.isChecked ? "body-dark" : "body-light"}>
                    <Route exact path='/' render={() => <Home t={this.props.t}/>}/>
                    <Route path='/search' render={() => <SearchList isChecked={this.props.isChecked} t={this.props.t}/>}/>
                    <Route path='/contact' render={() => <Contact t={this.props.t}/>}/>
                </div>
            </BrowserRouter>
        );
    }
}