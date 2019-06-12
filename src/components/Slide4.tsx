import React, { Component } from 'react';

export default class Slide4 extends Component {
    render() {
        return (
            <section className="section">
                <div className="section-title">
                    Funkcje Aplikacji
                </div>
                <div className="slide">
                    <h3>Intro</h3>
                    Losowe generowanie gwiazd tla
                    Animowane Intro
                </div>
                <div className="slide">
                    <h3>Integracja API</h3>
                    Swapi oraz themoviedb
                </div>
                <div className="slide">
                    <h3>Angular Router</h3>
                </div>
                <div className="slide">
                    <h3>InfiniteScroll</h3>
                    Ladowanie dodatkowych elementow
                </div>
                <div className="slide">
                    <h3>Cache</h3>
                    Ladowanie dodatkowych elementow
                </div>
            </section>
        )
    }
}
