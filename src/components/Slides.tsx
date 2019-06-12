import React, { Component } from 'react'
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';

const anchors = ["firstPage", "secondPage", "thirdPage"];

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
                    navigationTooltips={anchors}
                    sectionsColor={["#112f44", "#1d3a4e", "#2a4558", "#365061", "#435b6b", "#4f6675", "#5c717f", "#687c89", "#758793", "#82929d", "#8e9ca6", "#9ba7b0;"]}
                    scrollOverflow={true}
                    onLeave={this.onLeave.bind(this)}
                    afterLoad={this.afterLoad.bind(this)}
                    render={() => {
                        return (
                            <ReactFullpage.Wrapper>
                                <Slide1 />
                                <Slide2 />
                                <Slide3 />
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />

            </div>
        )
    }
}
export default Slides;