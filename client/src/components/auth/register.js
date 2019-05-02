import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

export default class Register extends Component {
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
console.log(newUser)
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
                />
                <label htmlFor='name'>Namn</label>
              </div>
              <div className='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id='email'
                  type='email'
                  placeholder="email"
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
              <div className='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id='password2'
                  type='password'
                  placeholder="repetera lösenord"
                />
                <label htmlFor='password2'>Repetera lösenord</label>
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
