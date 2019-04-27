import React, { Component } from 'react'
import axios from 'axios'
import './recipe.css'

export default class EachRecipe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipe_title: '',
            recipe_image: '',
            recipe_ingredients: '',
            recipe_howTo: '',
            recipe_nutrValue: '',
            recipe_cat: ''
        }
        console.log(this.state)
    }

    componentDidMount() {
        axios.get('/recept/'+this.props.match.params.id)
        .then(res => {
            console.log(res)
            this.setState({ 
                recipe_title: res.data.recipe_title,
                recipe_image: res.data.recipe_image,
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

    render() {
        return (
            <div>
            <h3>Valt recept</h3>
              <p value={this.state.recipe_title}>{this.state.recipe_title}</p>
              <p value={this.state.recipe_image}>{this.state.recipe_image}</p>
              <p value={this.state.recipe_ingredients}>{this.state.recipe_ingredients}</p>
              <p value={this.state.recipe_howTo}>{this.state.recipe_howTo}</p>
              <p value={this.state.recipe_nutrValue}>{this.state.recipe_nutrValue}</p>
              <p value={this.state.recipe_cat}>{this.state.recipe_cat}</p>
            </div>
        )
    }
}