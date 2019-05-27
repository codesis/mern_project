import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
/**
 * Private Route makes sure the user is authenticated when
 * trying to access private pages, such as the create recipes
 * If not authenticated, the user is redirected to the sign in page
 */
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/loggain" />
      )
    }
  />
)

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute);