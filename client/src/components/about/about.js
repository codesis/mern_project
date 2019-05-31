import React, { Component } from 'react'
import './about.css'
import selfie from './selfie.jpg'

export default class About extends Component {
    render() {
        return (
            <div className="content">
            <br/>
            <div className="about">
            <div style={{ marginTop: '4rem' }} className='row'>
            <span><p>Denna applikation skapades av mig, Emma Källström, då jag
            läste kursen 1DV430 under min utbildning till Webbprogrammerare
            på Linnéuniversitetet.</p>
            </span>
            <img src={selfie} alt="selfie" style={{width:200, borderRadius: 150/2 }}></img>
            <span><p>Om du saknar någon ingrediens eller en funktion på sidan, är det
            bara att ta kontakt med mig. Ett formulär finner du på Kontakt-sidan.</p>
            </span>
            </div>
            </div>
            </div>
        )
    }
}