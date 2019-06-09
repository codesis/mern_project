import React, { Component } from 'react';
import axios from 'axios';
import './contact.css'

class Contact extends Component {
    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Skicka meddelande'
    }
    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('/kontakt', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Message not sent')
        })
      }

      resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }

    render() {
        return(
            <div className="row">
            <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
            <label className="message" htmlFor="message-input">Ert meddelande</label>
            <br></br>
            <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Var god skriv ert meddelande i denna ruta" value={this.state.message} required/>
            <br></br>
            <label className="message-name" htmlFor="message-name">Ert namn</label>
            <input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name" type="text" placeholder="Ert namn" value={this.state.name}/>
          
            <label className="message-email" htmlFor="message-email">Er email</label>
            <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email" type="email" placeholder="Er email" required value={this.state.email} />
          
            <div className="button--container">
                <button type="submit" className="button-email">{ this.state.buttonText }</button>
            </div>
          </form>      
          </div>  
        )
    }
}

export default Contact;