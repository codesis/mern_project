import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store'

import "./App.css";

import Index from './components/home/home'
import RecipesList from './components/recipes/allrecipes'
import EachRecipe from './components/recipes/recipe'
import CreateRecipes from './components/recipes/createrecipes'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Navbar from './components/layout/navbar'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="container">
      <Navbar />
        <br/>
       <Route path="/" exact component={Index} />
       <Route path="/recept" exact component={RecipesList} />
       <Route path="/recept/:id" component={EachRecipe} />
       <Route path="/skapa" exact component={CreateRecipes} />
       <Route path="/om" exact component={About} />
       <Route path="/kontakt" exact component={Contact} />
       <Route path="/registrera" exact component={Register} />
       <Route path="/loggain" exact component={Login} /> 
      </div>
      </Router>
      </Provider>
    )
  }
}

export default App
