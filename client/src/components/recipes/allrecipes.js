import React, { Component } from 'react'
import axios from 'axios'
import './allrecipes.css'
import FilterResults from 'react-filter-search'

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

    // recipeList() {
    //     return this.state.recipes.map((recipe) => {
    //         return <Recipe recipe={recipe} key={recipe._id} />
    //     })
    // }

    handleChange = event => {
        const { value } = event.target
        this.setState({value})
        }
    
    render() {
        const { data, value } = this.state
        return (
            <div>
            <h3>Alla recept</h3>
            <form className="search">
            <div className="input-select">
            <select id="cat-select">
            <option value="frukost">Frukost</option>
            <option value="lunch">Lunch</option>
            <option value="middag">Middag</option>
            <option value="dessert">Dessert</option>
            <option value="barnfavoriter">Barnfavoriter</option>
            <option value="special">Special</option>
          </select>
            </div>
            <input type="search" value={value} onChange={this.handleChange}/>
            <button className="btn-search" type="submit" style={{borderRadius: 200/2}}><i className="fas fa-search"></i></button>
            </form>        
            <FilterResults
            value={value}
            data={data}
            renderResults={results => (
                <div>
                {results.map(el => (
                    <div>
                    <span>{el.recipe_title}</span>
                    <span>{el.recipe_image}</span>
                    <span>{el.recipe_cat}</span>
                </div>
                ))}
                </div>
            )}
            />
            </div>
        )
    }
}