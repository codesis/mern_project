import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import data from './livsmedel.json'
import './createrecipes.css'
// the imports below holds the ingredients component
import MultiSelect from '@kenshooui/react-multi-select'
import '@kenshooui/react-multi-select/dist/style.css'
// import NumericInput from 'react-numeric-input'

/**
 * Create Recipes holds the page for creating recipes.
 * Data is fetched from the json file livsmedel
 * Chosen ingredients are added to the array selectedItems
 * On submit the data that is sent is title, the chosen ingredients,
 * chosen category and the text on how to make the recipe
 * The recipe is saved to the database
 */
class CreateRecipes extends Component {
    constructor(props) {
        super(props)

        this.onChangeRecipeTitle = this.onChangeRecipeTitle.bind(this)
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this)
        this.onChangeIngredientsAmount = this.onChangeIngredientsAmount.bind(this)
        this.onChangeRecipeHowTo = this.onChangeRecipeHowTo.bind(this)
        this.onChangeRecipeCat = this.onChangeRecipeCat.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
        this.state = {
            recipe_title: '',
            recipe_ingredients: data,
            recipe_howTo: '',
            recipe_cat: '',
            selectedItems: [],
            messages: {
                noneSelectedMessage: '',
                searchPlaceholder: 'Sök ingrediens...',
                clearAllMessage: 'Rensa listan',
                selectedMessage: 'valda'
            }
        }
    }

    onChangeRecipeTitle(e) {
        this.setState({
            recipe_title: e.target.value
        })
    }
    onChangeRecipeIngredients(selectedItems) {
        this.setState({ selectedItems })
    }
    // for editing how much of each ingredient the user needs for the recipe
    onChangeIngredientsAmount = idx => e => {
        const newAmount = 
        this.state.selectedItems.map((item, sidx) => {
            if (idx !== sidx) return item
            return { ...item, amount: e.target.value}
        })

        this.setState({
            selectedItems: newAmount
        })
    }
    onChangeRecipeHowTo(e) {
        this.setState({
            recipe_howTo: e.target.value
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

        const { user } = this.props.auth

        const newRecipe = {
            recipe_creator: user.id,
            recipe_title: this.state.recipe_title,
            recipe_ingredients: this.state.selectedItems,
            recipe_howTo: this.state.recipe_howTo,
            recipe_cat: this.state.recipe_cat
        }

        axios.post('/recept/skapa', newRecipe)
        .then(res => console.log(res.data))

        this.setState({
            recipe_title: '',
            recipe_ingredients: [],
            recipe_howTo: '',
            recipe_cat: '',
            selectedItems: []
        })
    }
    render() {
        return (
            <div className="create-recipe">
            <h3>Skapa nytt recept</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Titel: </label>
                    <input type="text" 
                        className="form-control" 
                        value={this.state.recipe_title} 
                        onChange={this.onChangeRecipeTitle} 
                        />
                </div>
                <div className="form-group">
                <label>Ingredienser: </label>
                <div className="custom-select">
                <MultiSelect
                messages={this.state.messages}
                showSelectAll={false}
                items={this.state.recipe_ingredients}
                selectedItems={this.state.selectedItems}
                onChange={this.onChangeRecipeIngredients}
                />
                </div>
                <label>Mängd per ingrediens: </label>
                <tbody>
                {this.state.selectedItems.map((item, idx) => {
                    return (
                        <tr key={idx}>
                        <th>{item.label}</th>
                        <td><input type="text"
                        value={item.amount}
                        onChange={this.onChangeIngredientsAmount(idx)}
                        />
                        </td>
                        </tr>
                    )})}
                </tbody>
                </div>
                <div className="form-group">
                <label>Tillvägagångssätt</label>
                <br></br>
                <textarea
                       className="form-control"
                       rows="5"
                       cols="50"
                       value={this.state.recipe_howTo}
                       onChange={this.onChangeRecipeHowTo}
                       placeholder="Skriv gärna i nummerordning.."
                       />
                <hr/>
                <div className="form-group">
                <label>Näringsvärde på total måltid:
                <table className="nutr-table">
                <thead>
                <tr>
                <th>Ingrediens</th>
                <th>Kolhydrater (g)</th>
                <th>Fett (g)</th>
                <th>Protein (g)</th>
                <th>Fiber totalt (g)</th>
                <th>Sockerarter (g)</th>
                <th>Mättat fett (g)</th>
                <th>Kolesterol (mg)</th>
                <th>Vitamin A (µg)</th>
                <th>Betakaroten (µg)</th>
                <th>Vitamin D (µg)</th>
                <th>Vitamin E (mg)</th>
                <th>Vitamin K (µg)</th>
                <th>Tiamin (mg)</th>
                <th>Vitamin B2 (mg)</th>
                <th>Vitamin C (mg)</th>
                <th>Niacin (mg)</th>
                <th>Vitamin B6 (mg)</th>
                <th>Vitamin B12 (µg)</th>
                <th>Folat (µg)</th>
                <th>Fosfor (mg)</th>
                <th>Jod (µg)</th>
                <th>Järn (mg)</th>
                <th>Kalcium (mg)</th>
                <th>Kalium (mg)</th>
                <th>Magnesium (mg)</th>
                <th>Natrium (mg)</th>
                <th>Salt (g)</th>
                <th>Selen (µg)</th>
                <th>Zink (mg)</th>
                </tr>
                </thead>
                <tbody>
                {this.state.selectedItems.map((item, index) => {
                    return (
                        <tr key={index}>
                        <td>{item.label}</td>
                        <td>{item.carbs}</td>
                        <td>{item.Fett}</td>
                        <td>{item.Protein}</td>
                        <td>{item.Fiber}</td>
                        <td>{item.Socker}</td>
                        <td>{item.MättatFett}</td>
                        <td>{item.Kolesterol}</td>
                        <td>{item.VitA}</td>
                        <td>{item.BetaKaroten}</td>
                        <td>{item.VitD}</td>
                        <td>{item.VitE}</td>
                        <td>{item.VitK}</td>
                        <td>{item.Tiamin}</td>
                        <td>{item.Riboflavin}</td>
                        <td>{item.VitC}</td>
                        <td>{item.Niacin}</td>
                        <td>{item.VitB6}</td>
                        <td>{item.VitB12}</td>
                        <td>{item.Folat}</td>
                        <td>{item.Fosfor}</td>
                        <td>{item.Jod}</td>
                        <td>{item.Järn}</td>
                        <td>{item.Kalcium}</td>
                        <td>{item.Kalium}</td>
                        <td>{item.Magnesium}</td>
                        <td>{item.Natrium}</td>
                        <td>{item.Salt}</td>
                        <td>{item.Selen}</td>
                        <td>{item.Zink}</td>
                        </tr>  
                    )
                    })}
                    </tbody>
                </table>
                </label>
                <div className="form-group">
                    <div className="form-check">
                <label id="category">Kategori</label>
                <br/>
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
                <div className="form-group">
                <input type="submit" value="Skapa recept" className="btn-btn-primary" />
                </div>
            </form>
            </div>
        )
    }
}

CreateRecipes.propTypes = {
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth: state.auth
  })
  
  export default connect(mapStateToProps)(CreateRecipes)