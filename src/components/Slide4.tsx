import React, { Component } from 'react';
import IonicLogo from './../assets/ionic.png';
import AngularLogo from './../assets/angular.png';
import PWALogo from './../assets/pwa.png';

export default class Slide4 extends Component {
    render() {
        return (
            <section className="section">
                <h1>Wykorzystane Narzędzia</h1>
                <div className="logos">
                    <img src={AngularLogo} alt="Angular"/>
                    <img src={PWALogo} alt="PWA"/>
                    <img src={IonicLogo} alt="Ionic"/>
                </div>
                <h3>Progresywna Aplikacja Internetowa</h3>
                <h3>Angular oraz Ionic</h3>
                <h4>TypeScript, Sass</h4>
                <p></p>Zeit, Visual Studio Code, Cmder
            </section>
        )
    }
}
