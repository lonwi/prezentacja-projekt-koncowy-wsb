import React, { Component } from 'react';
import IonicLogo from './../assets/ionic.png';
import AngularLogo from './../assets/angular.png';
import PWALogo from './../assets/pwa.png';

export default class Slide3 extends Component {
    render() {
        return (
            <section className="section">
                <h1>Aplikacja Internetowa z użyciem REST API</h1>
                <div className="logos">
                    <img src={AngularLogo} alt="Angular"/>
                    <img src={PWALogo} alt="PWA"/>
                    <img src={IonicLogo} alt="Ionic"/>
                </div>
                <h3>Progresywna Aplikacja Internetowa</h3>
                <h3>Angular oraz Ionic</h3>
            </section>
        )
    }
}
