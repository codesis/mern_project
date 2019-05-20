import React, { Component } from 'react'
import axios from 'axios'
import header from '../home/bgContact.jpg'
import './recipe.css'

export default class EachRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe_title: '',
            recipe_image: '',
            recipe_ingredients: [],
            recipe_howTo: '',
            recipe_nutrValue: '',
            recipe_cat: ''
        }
    }

    componentDidMount() {
        axios.get('/recept/'+this.props.match.params.id)
        .then(res => {
            console.log(res)
            this.setState({ 
                recipe_title: res.data.recipe_title,
                recipe_ingredients: res.data.recipe_ingredients,
                recipe_howTo: res.data.recipe_howTo,
                recipe_nutrValue: res.data.recipe_nutrValue,
                recipe_cat: res.data.recipe_cat
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // will be changed, this is not final
    render() {
        return (
            <div className="content">
            <h3>Valt recept</h3>
            <div className="recipe-div">
              <p className="recipe-title">Titel: {this.state.recipe_title}</p>
              <img alt="tillfällig bild" src={header} width="600" height="400"/>
              <p className="recipe-ingr">Ingredienslista: {this.state.recipe_ingredients.map((item) => 
                  <li key={item.id}>{item.label}</li>
              )}</p>
              <p className="recipe-how">Tillvägagångssätt: {this.state.recipe_howTo}</p>
              <p className="recipe-nutr">Näringsvärden: {this.state.recipe_nutrValue}</p>
              <p className="recipe-cat">Kategori: {this.state.recipe_cat}</p>
            </div>
            </div>
        )
    }
}