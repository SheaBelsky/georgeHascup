import React, { Component } from "react";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";

// CSS
import "../styles/pages/Residential.less";

// Images
const imageNames = ["big red barn", "chamber commerce", "childcare", "ciaschi", "corning bridge", "corning pavilion", "folk art guild", "golf", "holiday inn", "ithaca hotel", "mental health", "plantations", "rpi engineering", "tc hospital", "youth bureau"];
let images = [];
imageNames.forEach((curImageName) => {
    const lowerCaseName = curImageName.replace(/ /g, "").toLowerCase();
    images.push({
        key: lowerCaseName,
        original: require(`../media/pub/${lowerCaseName}/${lowerCaseName}00.jpg`),
        link: `gallery/${lowerCaseName}/`,
        map: require(`../media/pub/${lowerCaseName}/${lowerCaseName}Map.png`),
        name: curImageName
    });
});


class Public extends Component {
    render () {
        return (
            <div>
                <Navigation 
                    navigationSubtitle="Public Realm"
                />
                <div className={"res-page page"}>
                    <VerticalImageLadder images={images} startIndex={0} type="landing" />
                </div>
            </div>
        );
    }
}

export default Public;
