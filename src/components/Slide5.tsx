import React, { Component } from 'react';

export default class Slide5 extends Component {
    render() {
        return (
            <section className="section">
                <div className="section-title">
                    Wybrane Funkcje Aplikacji
                </div>
                <div className="slide">
                    <h3>Responsywnosc</h3>
                    <p>Dopasowanie interfejsu do wielu urządzeń</p>
                </div>
                <div className="slide">
                    <h3>Intro</h3>
                    <p>Losowe generowanie gwiazd tla</p>
                    <p>Animowane Intro wykorzystujace przejscia oraz animacje css</p>
                </div>
                <div className="slide">
                    <h3>Angular Router</h3>
                    Prezentowanie compnentow na podstawie sciezki url
                    Przekazywanie parametrów do pobieranie wlasciwych danych
                </div>
                <div className="slide">
                    <h3>Integracja API</h3>
                    Swapi oraz themoviedb, pobieranie dodatkowych danych
                </div>
                <div className="slide">
                    <h3>InfiniteScroll</h3>
                    Ladowanie dodatkowych elementow
                </div>
                <div className="slide">
                    <h3>Cache</h3>
                    Szybsze ponowne ladowanie danych
                    Mniejsze wykorzystanie internetu
                </div>
            </section>
        )
    }
}
