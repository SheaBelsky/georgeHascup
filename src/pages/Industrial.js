import React, { Component } from "react";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";

// CSS
import "../styles/pages/Residential.less";

// Images
const imageNames = ["Lakesource", "PowerPlant"];
let images = [];
imageNames.forEach((curImageName) => {
    const lowerCaseName = curImageName.toLowerCase();
    images.push({
        key: lowerCaseName,
        original: require(`../media/ind/${lowerCaseName}/${lowerCaseName}01.jpg`),
        link: `gallery/${lowerCaseName}/`,
        name: curImageName
    });
});

class Industrial extends Component {
    render () {
        return (
            <div>
                <Navigation 
                    navigationSubtitle="Industrial"
                />
                <div className={"res-page page"}>
                    <VerticalImageLadder images={images} type="landing" />
                </div>
            </div>
        );
    }
}

export default Industrial;
