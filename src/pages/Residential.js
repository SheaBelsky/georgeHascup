import React, { Component } from "react";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";

// CSS
import "../styles/pages/Residential.less";

// Images
const imageNames = ["Abrams", "Booth", "Corning tennis", "Cowie", "Dicicco", "Dyckman", "Krumhansel", "Miller", "Randel",
    "Sampson", "Sears", "Terasaki", "Wilson"];
let images = [];
imageNames.forEach((curImageName) => {
    const lowerCaseName = curImageName.replace(/ /g, "").toLowerCase();
    images.push({
        key: lowerCaseName,
        original: require(`../media/res/${lowerCaseName}/${lowerCaseName}01.jpg`),
        link: `gallery/${lowerCaseName}/`,
        map: require(`../media/res/${lowerCaseName}/${lowerCaseName}Map.png`),
        name: curImageName
    });
});

class Residential extends Component {
    render () {
        return (
            <div>
                <Navigation />
                <div className={"res-page page"}>
                    <VerticalImageLadder images={images} type="residentialHome"/>
                </div>
            </div>
        );
    }
}

export default Residential;
