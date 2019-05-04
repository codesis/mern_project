import React, { Component } from 'react'
import axios from 'axios'


export default class CreateRecipes extends Component {
    constructor(props) {
        super(props)

        this.onChangeRecipeTitle = this.onChangeRecipeTitle.bind(this)
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this)
        this.onChangeRecipeHowTo = this.onChangeRecipeHowTo.bind(this)
        this.onChangeRecipeImage = this.onChangeRecipeImage.bind(this)
        this.onChangeRecipeNutrValue = this.onChangeRecipeNutrValue.bind(this)
        this.onChangeRecipeCat = this.onChangeRecipeCat.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            recipe_title: '',
            recipe_ingredients: [],
            recipe_howTo: '',
            recipe_image: '',
            recipe_nutrValue: '',
            recipe_cat: ''
        }
    }

    componentDidMount() {
        this.fetchOptions()
    }

    fetchOptions() {
        fetch('data/livsmedel.json')
        .then(res => res.json())
        .then(res=> this.setState({ recipe_ingredients: res }))
    }

    onChangeRecipeTitle(e) {
        this.setState({
            recipe_title: e.target.value
        })
    }
    onChangeRecipeIngredients(e) {
        this.setState({
            recipe_ingredients: e.target.value
        })
    }
    onChangeRecipeHowTo(e) {
        this.setState({
            recipe_howTo: e.target.value
        })
    }
    onChangeRecipeImage(e) {
        this.setState({
            recipe_image: e.target.value
        })
    }
    onChangeRecipeNutrValue(e) {
        this.setState({
            recipe_nutrValue: e.target.value
        })
    }
    onChangeRecipeCat(e) {
        this.setState({
            recipe_cat: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()

        console.log('Form submitted')
        console.log(`Recipe title: ${this.state.recipe_title}`)
        console.log(`Recipe category: ${this.state.recipe_cat}`)

        const newRecipe = {
            recipe_title: this.state.recipe_title,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_howTo: this.state.recipe_howTo,
            recipe_image: this.state.recipe_image,
            recipe_nutrValue: this.state.recipe_nutrValue,
            recipe_cat: this.state.recipe_cat
        }

        axios.post('/skapa', newRecipe)
        .then(res => console.log(res.data))

        this.setState({
            recipe_title: '',
            recipe_ingredients: [],
            recipe_howTo: '',
            recipe_image: '',
            recipe_nutrValue: '',
            recipe_cat: ''
        })
    }
    render() {
        return (
            <div className="content">
            <h3>Skapa nytt recept</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title: </label>
                    <input type="text" 
                        className="form-control" 
                        value={this.state.recipe_title} 
                        onChange={this.onChangeRecipeTitle} 
                        />
                </div>
                <div className="form-group">
                <label>Ingredienser: </label>
                <select multiple={true} onChange={this.onChangeRecipeIngredients}>
                {this.state.recipe_ingredients.map(function(ingredient, index) {
                    return <option value={ingredient.Livsmedelsnamn} key={index}>{ingredient.Livsmedelsnamn}</option>
                })}
                </select>
                </div>
                <div className="form-group">
                <label>Tillvägagångssätt</label>
                <input type="text"
                       className="form-control"
                       value={this.state.recipe_howTo}
                       onChange={this.onChangeRecipeHowTo}
                       />
                <div className="form-group">
                <label>Bild</label>
                <input type="file"
                       className="form-control"
                       value={this.state.recipe_image}
                       onChange={this.onChangeRecipeImage}
                       />
                <div className="form-group">
                <label>Näringsvärde på total måltid: </label>
                <input type="text" className="form-nutr"
                   value={this.state.recipe_nutrValue}
                   onChange={this.onChangeRecipeNutrValue}
                   />
                <div className="form-group">
                    <div className="form-check">
                <label>Kategori: </label>
                <input type="radio"
                       className="form-check-input"
                       name="catOptions"
                       id="frukost"
                       value="Frukost"
                       checked={this.state.recipe_cat==='Frukost'}
                       onChange={this.onChangeRecipeCat}
                       />
                       <label>Frukost</label>
                </div>
                <div className="form-check">
                    <input type="radio"
                           className="form-check-input"
                           name="catOptions"
                           id="lunch"
                           value="Lunch"    
                           checked={this.state.recipe_cat==='Lunch'}
                           onChange={this.onChangeRecipeCat}
                           />
                    <label>Lunch</label>
                </div>
                <div className="form-check">
                <input type="radio"
                       className="form-check-input"
                       name="catOptions"
                       id="middag"
                       value="Middag"
                       checked={this.state.recipe_cat==='Middag'}
                       onChange={this.onChangeRecipeCat}
                       />
                       <label>Middag</label>
                </div>
                <div className="form-check">
                <input type="radio"
                       className="form-check-input"
                       name="catOptions"
                       id="barnfavoriter"
                       value="Barnfavoriter"
                       checked={this.state.recipe_cat==='Barnfavoriter'}
                       onChange={this.onChangeRecipeCat}
                       />
                       <label>Barnfavoriter</label>
                </div>
                <div className="form-check">
                <input type="radio"
                       className="form-check-input"
                       name="catOptions"
                       id="dessert"
                       value="Dessert"
                       checked={this.state.recipe_cat==='Dessert'}
                       onChange={this.onChangeRecipeCat}
                       />
                       <label>Dessert</label>
                </div>
                <div className="form-check">
                <label>Kategori: </label>
                <input type="radio"
                       className="form-check-input"
                       name="catOptions"
                       id="special"
                       value="Special"
                       checked={this.state.recipe_cat==='Special'}
                       onChange={this.onChangeRecipeCat}
                       />
                       <label>Special</label>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div className="form-group">
                <input type="submit" value="Skapa recept" className="btn-btn-primary" />
                </div>
            </form>
            </div>
        )
    }
}

// <input type="checkbox" 
// className="form-control"
// value={this.state.recipe_ingredients}
// onChange={this.onChangeRecipeIngredients}
// />
