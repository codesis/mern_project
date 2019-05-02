import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './auth.css'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
      this.props.registerUser(newUser, this.props.history)
  }

  render() {
    const { errors } = this.state
      return (
      <div className='content'>
      <div style={{ marginTop: '4rem' }} className='row'>
      <div className='reg-row'>
            <div className='col s12' style={{ paddingLeft: '11.250px' }}>
            <br/>
            <br/>
              <h2>
                <b>Registrera er</b> nedan
              </h2>
              <p>
                Har du redan ett konto? <Link to='/loggain' style={{ color: '#cda34f' }}>Logga in här..</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id='name'
                  type='text'
                  placeholder="namn"
                  className={classnames('', { invalid: errors.name })}
                />
                <label htmlFor='name'>Namn</label>
                <span className='red-text'>{errors.name}</span>
              </div>
              <div className='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id='email'
                  type='email'
                  placeholder="email"
                  className={classnames('', { invalid: errors.email })}
                />
                <label htmlFor='email'>Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id='password'
                  type='password'
                  placeholder="lösenord"
                  className={classnames('', { invalid: errors.password })}
                />
                <label htmlFor='password'>Lösenord</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id='password2'
                  type='password'
                  placeholder="repetera lösenord"
                  className={classnames('', { invalid: errors.password2 })}
                />
                <label htmlFor='password2'>Repetera lösenord</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className='col s12' style={{ paddingLeft: '11.250px' }}>
                <button
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem'
                  }}
                  type='submit'
                >
                  Registrera
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))