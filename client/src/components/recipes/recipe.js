import React, { Component } from 'react'
import axios from 'axios'
import './recipe.css'

const Recipe = props => (
    <tr>
      <td>{props.recipe.recipe_title}</td>
      <td>{props.recipe.recipe_image}</td>
      <td>{props.recipe.recipe_ingredients}</td>
      <td>{props.recipe.recipe_howTo}</td>
      <td>{props.recipe.recipe_nutrValue}</td>
      <td>{props.recipe.recipe_cat}</td>
    </tr>
)

export default class EachRecipe extends Component {

    constructor(props) {
        super(props)
        this.state = {recipes: []}
    }

    componentDidMount() {
        axios.get('/recept/'+this.props.match.params.id)
        .then(res => {
            console.log(res)
            this.setState({ recipes: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    recipeData() {
        return this.state.recipes.map(function(recipe, i) {
            return <Recipe recipe={recipe} key={i} />
        })
    }

    render() {
        return (
            <div>
            <h3>Valt recept</h3>
            <table className="recept-table" style={{ marginTop: 20}} >
               <thead>
                  <tr>
                   <th>Title</th>
                   <th>Bild</th>
                   <th>Kategori</th>
                  </tr>
               </thead>
               <tbody>
               { this.recipeData() }
               </tbody>
            </table>
            </div>
        )
    }
}