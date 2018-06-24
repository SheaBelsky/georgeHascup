import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

import "../styles/partials/Navigation.less";

// Images
const homeImage1 = require("../media/home/drivingpanorama_half.jpg");
const homeImage2 = require("../media/home/fingerlakes_crop_1.jpg");
const homeImage3 = require("../media/home/fingerlakes_crop_2.jpg");
const homeImage4 = require("../media/home/fingerlakes_crop_3.jpg");
const homeImage5 = require("../media/home/lakepanorama_half.jpg");

const images = [
    { original: homeImage1 },
    { original: homeImage2 },
    { original: homeImage3 },
    { original: homeImage4 },
    { original: homeImage5 }
];

class Navigation extends Component {
    render() {
        return (
            <div className={"nav"}>
                <ImageGallery
                    autoPlay=             { true }
                    additionalClass=      { "nav-gallery" }
                    items=                { images }
                    showFullscreenButton= { false }
                    showPlayButton=       { false }
                    showNav=              { false }
                    showThumbnails=       { false }
                />
                <div className={"nav-name"}>
                    HASCUP ARCHITECTURE
                </div>
                <div className={"nav-container"}>
                    <ul>
                        <li>
                            <Link to={"#"}>Residential</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Public Realm</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Industrial</Link>
                        </li>
                        <li>
                            <Link to={"/furniture"}>Furniture</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Profile/Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navigation;
