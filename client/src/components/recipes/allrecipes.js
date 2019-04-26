import React, { Component } from 'react'
import axios from 'axios'
import './allrecipes.css'
import { Link } from "react-router-dom";

const Recipe = props => (
    <tr>
        <td>{props.recipe.recipe_title}</td>
        <td>{props.recipe.recipe_image}</td>
        <td>{props.recipe.recipe_cat}</td>
        <td>
           <Link to={"/recept/"+props.recipe._id}>Läs mer</Link>
        </td>
    </tr>
)
export default class RecipesList extends Component {

    constructor(props) {
        super(props)
        this.state = {recipes: []}
    }

    componentDidMount() {
        axios.get('/recept')
        .then(res => {
            console.log(res)
            this.setState({ recipes: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    recipeList() {
        return this.state.recipes.map(function(recipe, i) {
            return <Recipe recipe={recipe} key={i} />
        })
    }
    
    render() {
        return (
            <div>
            <h3>Alla recept</h3>
            <table className="recept-table" style={{ marginTop: 20}} >
               <thead>
                  <tr>
                   <th>Title</th>
                   <th>Bild</th>
                   <th>Kategori</th>
                  </tr>
               </thead>
               <tbody>
               { this.recipeList() }
               </tbody>
            </table>
            </div>
        )
    }
}