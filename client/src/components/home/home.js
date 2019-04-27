import React, { Component } from 'react'
import './home.css'
import header from './bgContact.jpg'

export default class Index extends Component {
    render() {
        return (
            <div className="content">
            <br/>
            <h3>Välkommen!</h3>
               <div className="header">
                   <img src={header} alt="header" />
                    <p>This is going to be the header</p>
                </div>
                <div className="searchbar">
                    <p>This is going to be the searchbar</p>
                </div>
            </div>
        )
    }
}