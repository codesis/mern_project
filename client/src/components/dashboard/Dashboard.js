import React, { Component } from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import FilterResults from 'react-filter-search'
import header from '../home/bgContact.jpg'


/**
 * Dashboard is the page where users go when they sign in.
 * Here they will be able to find their own created recipes
 * At the moment it is also only possible to sign out when
 * on this page. 
 * The signed in users also get here when they click on the
 * "Ny användare" or "Logga in"
 */
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        value: ''
    }
}

  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
  }

  componentDidMount() {
    axios.get('/recept/dashboard')
    .then(res => {
        console.log(res)
        this.setState({ 
          data: res.data
        })
    })
    .catch((err) => {
        console.log(err)
    })
  }

  handleChange = event => {
  const { value } = event.target
  this.setState({value})
  }


  render() {
    const { user } = this.props.auth
    const { data, value } = this.state

    return (
      <div>
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hej,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Här kommer Dina egna recept så småningom att finnas {" "}
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
            <div className="recipe-list">
            <FilterResults
            value={value}
            data={data}
            renderResults={results => (
                <div>
                {results.map(el => (
                    <div className="gallery" key={el._id}>
                    <Link to={"/recept/"+el._id} className="nav-link">
                    <img alt="tillfällig bild" src={header} width="600" height="400"/>
                    <div className="r-titel">{el.recipe_title}</div>
                    <div className="r-cat">{el.recipe_cat}</div>
                    </Link>
                  </div>
                ))}
                </div>
            )}
            />
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