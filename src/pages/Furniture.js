import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

// CSS
//import "../styles/pages/furniture.less";

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
            <div className={"furn-page page"}>
                <ImageGallery
                    autoPlay=             { true }
                    className=            { "furniture-gallery" }
                    items=                { images }
                    showFullscreenButton= { false }
                    showPlayButton=       { false }
                    showNav=              { true }
                    showThumbnails=       { true }
                />
            </div>
        );
    }
} 

export default Home;
