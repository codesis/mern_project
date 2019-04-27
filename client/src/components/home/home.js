import React, { Component } from 'react'
import './home.css'
import header from './bgContact.jpg'

export default class Index extends Component {
    render() {
        return (
            <div className="content">
            <br/>
            <p className="welc">Välkommen!</p>
               <div className="header">
                   <img src={header} alt="header" style={{width:800, borderRadius: 400/2 }}/>
                   <form className="search">
                     <div className="input-select">
                     <select data-trigger="" name="choices-single-defaul">
                     <option placeholder="">Kategori</option>
                     <option>Frukost</option>
                     <option>Lunch</option>
                     <option>Middag</option>
                     <option>Dessert</option>
                     <option>Barnfavoriter</option>
                     <option>Special</option>
                   </select>
                     </div>
                     <input type="search" placeholder="  Sök recept"></input>
                     <button class="btn-search" type="button" style={{borderRadius: 200/2}}><i class="fas fa-search"></i></button>
                     </form>
                </div>
                <div className="searchbar">
                    <p>This is going to be the searchbar</p>
                </div>
            </div>
        )
    }
}