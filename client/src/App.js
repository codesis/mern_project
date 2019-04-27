import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Index from './components/home/home'
import RecipesList from './components/recipes/allrecipes'
import EachRecipe from './components/recipes/recipe'
import CreateRecipes from './components/recipes/createrecipes'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Register from './components/register/register'
import Login from './components/login/login'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar">
         <div className="navbar-collapse">
          <ul className="navbar-ul">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Hem</Link>
            </li>
            <li className="navbar-item">
            <Link to="/recept" className="nav-link">Recept</Link>
            </li>
            <li className="navbar-item">
            <Link to="/skapa" className="nav-link">Skapa recept</Link>
            </li>
            <li className="navbar-item">
            <Link to="/om" className="nav-link">Om sidan</Link>
            </li>
            <li className="navbar-item">
            <Link to="/kontakt" className="nav-link">Kontakt</Link>
            </li>
            <li className="navbar-item">
            <Link to="/registrera" className="nav-link">Ny användare</Link>
            </li>
            <li className="navbar-item">
            <Link to="/loggain" className="nav-link">Logga in</Link>
            </li>
          </ul>
         </div>
        </nav>
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
    )
  }
}

export default App;
