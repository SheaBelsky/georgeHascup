import React, { Component } from "react";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";

// CSS
import "../styles/pages/Residential.less";

// Images
const imageNames = ["bigredbarn", "chambercommerce", "childcare", "ciaschi", "corningbridge", "corningpavilion",
    "folkartguild", "golf", "holidayinn", "ithacahotel", "mentalhealth", "plantations", "rpiengineering",
    "tchospital", "youthbureau"];
let images = [];
imageNames.forEach((curImageName) => {
    const lowerCaseName = curImageName.toLowerCase();
    images.push({
        key: lowerCaseName,
        original: require(`../media/pub/${lowerCaseName}/${lowerCaseName}01.jpg`),
        link: `gallery/${lowerCaseName}/`,
    });
});

class Industrial extends Component {
    render () {
        return (
            <div>
                <Navigation />
                <div className={"res-page page"}>
                    <VerticalImageLadder images={images} />
                </div>
            </div>
        );
    }
}

export default Industrial;
