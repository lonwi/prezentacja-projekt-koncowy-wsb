import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pl';

export default class Slide1 extends Component {
    render() {
        const currentData = moment().format('dddd, LL');
        return (
            <section className="section">
                <div className="section-header">
                    Wrocław, {currentData}
                </div>
                <h1>Prezentacja Projektu Końcowego</h1>
                <h2>Angular Star Wars API</h2>
                <div className="section-footer">
                    Student: <strong>Wojciech Bubółka</strong><br />
                    Kierunek: <strong>Programista Front-end</strong><br />
                    Uczelnia: <strong>WSB Wrocław</strong>
                </div>
            </section>
        )
    }
}
