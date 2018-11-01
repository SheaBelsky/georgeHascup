import React, { Component } from "react";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";
// CSS
// import "../styles/pages/CorningGlass.less";

// Images
const images = [
    {
        key: "corningbridge",
        original: require(`../media/pub/corningbridge/corningbridge00.jpg`),
        link: `#/public/gallery/corningbridge/`,
        map: require(`../media/pub/corningbridge/corningbridgeMap.png`),
        name: "Corning Bridge"
    },
    {
        key: "corningpavilion",
        original: require(`../media/pub/corningpavilion/corningpavilion00.jpg`),
        link: `#/public/gallery/corningpavilion/`,
        map: require(`../media/pub/corningpavilion/corningpavilionMap.png`),
        name: "Corning Pavillion"
    },
    {
        key: "corningtennis",
        original: require(`../media/res/corningtennis/corningtennis01.jpg`),
        link: `#/residential/gallery/corningtennis/`,
        map: require(`../media/res/corningtennis/corningtennisMap.png`),
        name: "Corning Tennis"
    },
];

class CorningGlass extends Component {
    render () {
        return (
            <div>
                <Navigation 
                    navigationSubtitle="Corning Glass"
                />
                <div className={"glass-page page"}>
                    <VerticalImageLadder images={images} type="landing"/>
                </div>
            </div>
        );
    }
} 

export default CorningGlass;
