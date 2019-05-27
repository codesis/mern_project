import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

/**
 * Dashboard is the page where users go when they sign in.
 * Here they will be able to find their own created recipes
 * At the moment it is also only possible to sign out when
 * on this page. 
 * The signed in users also get here when they click on the
 * "Ny användare" or "Logga in"
 */
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    const { user } = this.props.auth

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hej,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Här kommer Dina egna recept att finnas {" "}
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logga ut
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard)