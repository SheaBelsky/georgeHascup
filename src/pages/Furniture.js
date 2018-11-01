import React, { Component } from "react";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";
// CSS
import "../styles/pages/furniture.less";

// Images
let images = [];
for (let i = 1; i < 197; i++) {
    let newI;
    // i = i < 10  ? `00${i}` : i;
    // i = i < 100 ? `0${i}` : 1;
    if (i < 10) {
        newI = `00${i}`;
    }
    else if (i >= 10 && i < 100) {
        newI = `0${i}`;
    }
    else {
        newI = i;
    }
    images.push({
        original: require(`../media/furn/furn${newI}.jpg`),
        key: `furn${newI}.jpg`
    });
}

class Furniture extends Component {
    render () {
        return (
            <div>
                <Navigation 
                    navigationSubtitle="Furniture"
                />
                <div className={"furn-page page"}>
                    <VerticalImageLadder images={images} width={5}/>
                </div>
            </div>
        );
    }
} 

export default Furniture;
