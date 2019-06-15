import React, { Component } from 'react';

export default class Slide5 extends Component {
    render() {
        return (
            <section className="section">
                <div className="section-title">
                    Wybrane Funkcje Aplikacji
                </div>
                <div className="slide">
                    <h1>Responsywność</h1>
                </div>
                <div className="slide">
                    <h1>Animowane Intro</h1>
                    <p>Losowe generowanie gwiazd tla</p>
                    <p>Animowane Intro wykorzystujace przejscia oraz animacje css</p>
                </div>
                <div className="slide">
                    <h1>Angular Router</h1>
                </div>
                <div className="slide">
                    <h1>Integracja API</h1>
                    <h3>swapi.co</h3>
                    <h3>themoviedb.org</h3>
                </div>
                <div className="slide">
                    <h1>Wykorzystanie InfiniteScroll</h1>
                </div>
                <div className="slide">
                    <h3>Cache</h3>
                </div>
            </section>
        )
    }
}
