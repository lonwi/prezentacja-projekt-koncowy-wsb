import React, { Component } from 'react';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';

import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Slide6 from './Slide6';
import Slide7 from './Slide7';
import Slide8 from './Slide8';
import Slide9 from './Slide9';
import Slide10 from './Slide10';

const anchors = ['witam', 'agenda', 'preview', 'wybor-projektu', 'wykorzystane-narzedzia', 'prezentacja-projektu', 'dalszy-rozwoj', 'podsumowanie', 'podziekowania', 'linki'];
const navigationTooltips = ['Wstęp', 'Agenda', 'Preview', 'Wybór projektu', 'Wykorzystane narzędzia', 'Prezentacja projektu', 'Dalszy rozwój', 'Podsumowanie', 'Podziękowania', 'Linki'];
const backgroundColors = ['#112f44', '#1d3a4e', '#1d3a4e', '#2a4558', '#365061', '#435b6b', '#4f6675', '#5c717f', '#687c89', '#758793', '#82929d', '#8e9ca6', '#9ba7b0;']

class Slides extends Component {

    onLeave(origin: any, destination: any, direction: any) {
        console.log("Leaving section " + origin.index);
    }
    afterLoad(origin: any, destination: any, direction: any) {
        console.log("After load: " + destination.index);
    }

    render() {
        return (
            <div>
                {/* <SlideNav /> */}
                <ReactFullpage
                    anchors={anchors}
                    navigation
                    navigationTooltips={navigationTooltips}
                    sectionsColor={backgroundColors}
                    scrollOverflow={true}
                    onLeave={this.onLeave.bind(this)}
                    afterLoad={this.afterLoad.bind(this)}
                    render={() => {
                        return (
                            <ReactFullpage.Wrapper>
                                <Slide1 />
                                <Slide2 />
                                <Slide3 />
                                <Slide9 />
                                <Slide4 />
                                <Slide5 />
                                <Slide6 />
                                <Slide7 />
                                <Slide8 />
                                <Slide10 />

                            </ReactFullpage.Wrapper>
                        );
                    }}
                />

            </div>
        )
    }
}
export default Slides;