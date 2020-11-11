import React, { Component } from "react";
import "./about.css";
import selfie from "./selfie.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="content">
        <br />
        <div className="about">
          <div style={{ marginTop: "4rem" }} className="aboutRow">
            <p>
              <span>
                Denna applikation skapades av mig, Emma Källström, då jag läste
                kursen 1DV430 under min utbildning till Webbprogrammerare på
                Linnéuniversitetet.
              </span>
            </p>
            <img
              src={selfie}
              alt="selfie"
              style={{ width: 200, borderRadius: 150 / 2 }}
            ></img>
            <p>
              <span>
                Om du saknar någon ingrediens eller en funktion på sidan, är det
                bara att ta kontakt med mig. Ett formulär finner du på
                Kontakt-sidan.
              </span>
            </p>
            <p className="footer">
              <span>
                I denna applikation har jag använt mig dels utav
                Livsmedelsverkets databas (version 2017-12-15), men även Finelis
                för att komplettera Livsmedelsverkets version.
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
