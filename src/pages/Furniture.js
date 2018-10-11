import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";
// CSS
import "../styles/pages/furniture.less";

// Images
let images = [];
for (let i = 1; i < 85; i++) {
    i = i < 10 ? `0${i}` : i;
    images.push({
        original: require(`../media/furn/${i}_01.jpg`),
        key: `${i}_01.jpg`
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
