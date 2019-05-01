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
                     <select data-trigger="" name="kategori">
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
                     <button className="btn-search" type="submit" style={{borderRadius: 200/2}}><i className="fas fa-search"></i></button>
                     </form>
                </div>
                <br/>
                <div className="gallery">
                  <img src={header} alt="frukost" width="600" height="400"></img>
                  <div className="r-titel">Här står frukostens titel</div>
                </div>
                <div className="gallery">
                  <img src={header} alt="lunch" width="600" height="400"></img>
                  <div className="r-titel">Här står lunchens titel</div>
                </div>
                <div className="gallery">
                  <img src={header} alt="middag" width="600" height="400"></img>
                  <div className="r-titel">Här står middagens titel</div>
                </div>                
                <div className="gallery">
                  <img src={header} alt="dessert" width="600" height="400"></img>
                  <div className="r-titel">Här står dessertens titel</div>
                </div>
                <div className="gallery">
                  <img src={header} alt="barnfavoriter" width="600" height="400"></img>
                  <div className="r-titel">Här står barnfavons titel</div>
                </div>
                <div className="gallery">
                 <img src={header} alt="special" width="200" height="400"></img>
                 <div className="r-titel">Här står specialens titel</div>
                </div>
            </div>
        )
    }
}