import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import Navigation from "./../partials/Navigation";

// CSS
import "../styles/pages/furniture.less";

// Images
let images = [];
for (let i = 1; i < 85; i++) {
    i = i < 10 ? `0${i}` : i;
    images.push({
        original: require(`../media/furn/${i}_01.jpg`),
        thumbnail: require(`../media/furn/${i}_01Thumb.jpg`)
    });
}

class Home extends Component {
    render () {
        return (
            <div>
                <Navigation />
                <div className={"furn-page page"}>
                
                    <div className={"furniture-gallery-container"}>
                        <ImageGallery
                            autoPlay=             { false }
                            additionalClass=      { "furniture-gallery" }
                            items=                { images }
                            showFullscreenButton= { false }
                            showPlayButton=       { false }
                            showNav=              { true }
                            showThumbnails=       { true }
                        />
                    </div>
                </div>
            </div>
        );
    }
} 

export default Home;
