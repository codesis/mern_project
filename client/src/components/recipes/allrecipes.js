import React, { Component } from 'react'
import axios from 'axios'
import './allrecipes.css'
import { Link } from 'react-router-dom'
import FilterResults from 'react-filter-search'
import header from '../home/bgContact.jpg'

/**
 * Recipes List holds all the recipes that exists in the
 * database. There's also a function to search for a specific recipe.
 */
export default class RecipesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            value: ''
        }
    }

    componentDidMount() {
        axios.get('/recept')
        .then(res => {
            console.log(res)
            this.setState({ data: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    handleChange = event => {
        const { value } = event.target
        this.setState({value})
        }
    
    render() {
        const { data, value } = this.state
        return (
            <div>
            <form className="search">
            <button className="btn-search" type="button" style={{borderStyle: "none"}}><i className="fas fa-search"></i></button>
            <input type="search" style={{borderStyle: "none"}} value={value} onChange={this.handleChange} placeholder="Sök recept eller kategori här.."/>
            </form>
            <div className="recipe-list">
            <FilterResults
            value={value}
            data={data}
            renderResults={results => (
                <div>
                {results.map(el => (
                    <div className="gallery" key={el._id}>
                    <Link to={"/recept/"+el._id} className="nav-link">
                    <img alt="tillfällig bild" src={header} width="600" height="400"/>
                    <div className="r-titel">{el.recipe_title}</div>
                    <div className="r-cat">{el.recipe_cat}</div>
                    </Link>
                  </div>
                ))}
                </div>
            )}
            />
            </div>
            </div>
        )
    }
}