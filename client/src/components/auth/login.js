import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
onSubmit = e => {
    e.preventDefault()
const userData = {
      email: this.state.email,
      password: this.state.password
    }
console.log(userData)
  }
render() {
    const { errors } = this.state
return (
      <div className='content'>
        <div style={{ marginTop: '4rem' }} className='row'>
          <div className='col s8 offset-s2'>
            <div className='col s12' style={{ paddingLeft: '11.250px' }}>
              <h2>
                <b>Logga in</b> nedan
              </h2>
              <p className='grey-text text-darken-1'>
                Har du inget konto? <Link to='/registrera' style={{ color: '#cda34f' }}>Registrera dig här..</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id='email'
                  type='email'
                  placeholder='email'
                />
                <label htmlFor='email'>Email</label>
              </div>
              <div className='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id='password'
                  type='password'
                  placeholder="lösenord"
                />
                <label htmlFor='password'>Lösenord</label>
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
                  Logga in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}