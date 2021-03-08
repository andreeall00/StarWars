import React, { Component } from 'react'
import Loading from '../Loading.js'
import Input from '../Input.js'
import './Search.css'


const Person = (props) => {
    return (
        <div>
            <h1>{props.t("name")}: {props.ch["name"]}</h1>
            <p>
                {props.t("gender")}: {props.ch["gender"]}
                <br />
                {props.t("height")}: {props.ch["height"]}
                <br />
                {props.t("yearBirth")}: {props.ch["birth_year"]}
            </p>
        </div> 
        )
}

const Planet = (props) => {
    return (
        <div>
            <h1>{props.t("name")}: {props.ch["name"]}</h1>
            <p>
                {props.t("climate")}: {props.ch["climate"]}
                <br />
                {props.t("terrain")}: {props.ch["terrain"]}
                <br />
                {props.t("population")}: {props.ch["population"]}
            </p>
        </div> 
        )
}

const Starship = (props) => {
    return (
        <div>
            <h1>{props.t("name")}: {props.ch["name"]}</h1>
            <p>
                {props.t("model")}: {props.ch["model"]}
                <br />
                {props.t("manufacturer")}: {props.ch["manufacturer"]}
                <br />
                {props.t("starshipClass")}: {props.ch["starship_class"]}
            </p>
        </div> 
        )
}

export default class Search extends Component {
    static displayName = Search.name
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            name: "",
            entity: [{}]
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value, loading: true })
        const ch = "https://swapi.dev/api/" + this.props.item + "/?search=" + value
        fetch(ch)
            .then(response => response.json())
            .then(data => this.setState({ entity: data["results"], loading: false }))
    }
    render() {
        const object=this.props.item === "people" ? <Person ch={this.state.entity[0]} t={this.props.t}/> : 
        this.props.item === "planets" ? <Planet ch={this.state.entity[0]} t={this.props.t}/> : 
        <Starship ch={this.state.entity[0]} t={this.props.t}/>
        return (
            <div className="search">
                <Input name="name" value={this.state.entity.name} onChange={this.handleChange} label={this.props.label} placeholder={this.props.t("enterName")}/>
                {
                    this.state.loading ? <Loading /> :
                        this.state.name === "" ? <h1>{this.props.t("choose")} {this.props.label}</h1> :
                            this.state.entity.length === 0 ? <h1>{this.props.t("doesn'tExist")}</h1> :
                                object
                }
            </div>
            )
    }
}