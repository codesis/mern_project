import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import header from "./header.jpg";

import Index from "./components/home/home";
import RecipesList from "./components/recipes/allrecipes";
import EachRecipe from "./components/recipes/recipe";
import CreateRecipes from "./components/recipes/createrecipes";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Navbar from "./components/layout/navbar";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep the user signed in
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // decode token and get user info
  const decoded = jwt_decode(token);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000; // to get ms
  if (decoded.exp < currentTime) {
    // Sign out user
    store.dispatch(logoutUser());
    // redirect to sign in
    window.location.href = "./loggain";
  }
}
/**
 * App holds all routes. The secure ones are the create recipes page and
 * the dashboard, where signed in users go when they sign in. These two
 * pages are private which means unauthorized guests wont get access to them,
 * if they try they get redirected.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <div className="headerDiv">
              <Link to="/">
                <img src={header} alt="header" className="header" />
              </Link>
            </div>{" "}
            <Navbar />
            <br />
            <Route path="/" exact component={Index} />{" "}
            <Route path="/recept" exact component={RecipesList} />{" "}
            <Route path="/recept/:id" component={EachRecipe} />{" "}
            <Route path="/om" exact component={About} />{" "}
            <Route path="/kontakt" exact component={Contact} />{" "}
            <Route path="/registrera" exact component={Register} />{" "}
            <Route path="/loggain" exact component={Login} />{" "}
            <Switch>
              <PrivateRoute path="/skapa" exact component={CreateRecipes} />{" "}
              <PrivateRoute path="/dashboard" component={Dashboard} />{" "}
            </Switch>{" "}
          </div>{" "}
        </Router>{" "}
      </Provider>
    );
  }
}

export default App;
