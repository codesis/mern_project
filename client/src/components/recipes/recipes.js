import React, { Component } from 'react';
import './recipes.css'

class Recipes extends Component {
    constructor () {
        super()
        this.state = {
            recipes: []
        }
    }
    componentDidMount() {
        fetch('/api/recipes')
        .then(res => res.json())
        .then(recipes => this.setState({recipes}, () => console.log('Recipes fetched..', recipes)))
    }
  render() {
      return (
    <div>
    <h2>Recipes</h2>
    <ul>
    {this.state.recipes.map(recipe => 
        <li key={recipe.id}>{ recipe.firstName } { recipe.lastName } </li>
    )}
    </ul>
    </div>
  );
 }
}

export default Recipes;
