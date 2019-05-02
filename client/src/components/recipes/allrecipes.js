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
            <button className="btn-search" type="submit" style={{borderStyle: "none"}}><i className="fas fa-search"></i></button>
            <input type="text" style={{borderStyle: "none"}} value={value} onChange={this.handleChange} placeholder="Sök recept eller kategori här.."/>
            </form>
            <div className="recipe-list">
            <FilterResults
            value={value}
            data={data}
            renderResults={results => (
                <div>
                {results.map(el => (
                    <div className="gallery">
                    <img src={el.recipe_image} alt="receptbild" width="600" height="400"></img>
                    <div className="r-titel">{el.recipe_title}</div>
                    <div className="r-cat">{el.recipe_cat}</div>
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

//            <div className="input-select">
// <select id="cat-select">
// <option placeholder="">Kategori</option>
// <option value={value==="frukost"} onChange={this.handleChange}>Frukost</option>
// <option value="lunch">Lunch</option>
// <option value="middag">Middag</option>
// <option value="dessert">Dessert</option>
// <option value="barnfavoriter">Barnfavoriter</option>
// <option value="special">Special</option>
// </select>
// </div>
