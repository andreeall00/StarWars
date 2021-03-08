import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Search from '../../components/Search/Search.js'
import './SearchList.css'

export default class SearchList extends Component {
    render(){
        return (
            <div className="searchList">
                <div className={this.props.isChecked ? "searchList-dark" : "searchList-light"}>
                    <ul>
                        <li><Link to="/search/character">{this.props.t("searchCharacter")}</Link></li>
                        <li><Link to="/search/planets">{this.props.t("searchPlanet")}</Link></li>
                        <li><Link to="/search/starships">{this.props.t("searchStarship")}</Link></li>
                    </ul>
                    <hr/>
                </div>
                <Route path="/search/character" render={()=><Search item='people' label={this.props.t("character")} t={this.props.t}/>}/>
                <Route path="/search/planets" render={()=><Search item='planets' label={this.props.t("planet")} t={this.props.t}/>}/>
                <Route path="/search/starships" render={()=><Search item='starships' label={this.props.t("starship")} t={this.props.t}/>}/>
            </div>
        );
    }
}