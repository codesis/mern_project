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
        this.state = {
            search: '',
            recipes: []}
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
        return this.state.recipes.map((recipe) => {
            return <Recipe recipe={recipe} key={recipe._id} />
        })
    }

    updateSearch(event) {
        this.setState({search: event.target.value})
        }
    
    render() {
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
            <input type="search" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
            <button className="btn-search" type="submit" style={{borderRadius: 200/2}}><i className="fas fa-search"></i></button>
            </form>        
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