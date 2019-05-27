import React, { Component } from 'react'
import './home.css'
import header from './bgContact.jpg'

/**
 * Index holding the index page, displaying
 * one recipe from each category. This feature is
 * not yet completed.
 */
export default class Index extends Component {
    render() {
        return (
            <div className="content">
            <br/>
            <p className="welc">Välkommen!</p>
               <div className="header">
                   <img src={header} alt="header" style={{width:800, borderRadius: 400/2 }}/>
                </div>
                <br/>
                <div className="gallery-home">
                  <img src={header} alt="frukost" width="600" height="400"/>
                  <div className="r-titel">Här står frukostens titel</div>
                </div>
                <div className="gallery-home">
                  <img src={header} alt="lunch" width="600" height="400"/>
                  <div className="r-titel">Här står lunchens titel</div>
                </div>
                <div className="gallery-home">
                  <img src={header} alt="middag" width="600" height="400"/>
                  <div className="r-titel">Här står middagens titel</div>
                </div>                
                <div className="gallery-home">
                  <img src={header} alt="dessert" width="600" height="400"/>
                  <div className="r-titel">Här står dessertens titel</div>
                </div>
                <div className="gallery-home">
                  <img src={header} alt="barnfavoriter" width="600" height="400"/>
                  <div className="r-titel">Här står barnfavons titel</div>
                </div>
                <div className="gallery-home">
                 <img src={header} alt="special" width="200" height="400"/>
                 <div className="r-titel">Här står specialens titel</div>
                </div>
            </div>
        )
    }
}