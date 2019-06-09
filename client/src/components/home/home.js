import React, { Component } from 'react'
import './home.css'
import example from './demoImg.jpg'

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
            <p className="welc"></p>
                <br/>
                <div className="gallery-home">
                  <img src={example} alt="frukost" width="600" height="400"/>
                  <div className="r-titel">Här står frukostens titel</div>
                </div>
                <div className="gallery-home">
                  <img src={example} alt="lunch" width="600" height="400"/>
                  <div className="r-titel">Här står lunchens titel</div>
                </div>
                <div className="gallery-home">
                  <img src={example} alt="middag" width="600" height="400"/>
                  <div className="r-titel">Här står middagens titel</div>
                </div>                
                <div className="gallery-home">
                  <img src={example} alt="dessert" width="600" height="400"/>
                  <div className="r-titel">Här står dessertens titel</div>
                </div>
                <div className="gallery-home">
                  <img src={example} alt="barnfavoriter" width="600" height="400"/>
                  <div className="r-titel">Här står barnfavons titel</div>
                </div>
                <div className="gallery-home">
                 <img src={example} alt="special" width="200" height="400"/>
                 <div className="r-titel">Här står specialens titel</div>
                </div>
            </div>
        )
    }
}