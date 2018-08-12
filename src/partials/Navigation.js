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

// PDFs
const hascupComplete = require("../media/profile/hascupComplete.pdf");
const hascupMonogram = require("../media/profile/hascupMonogram.pdf");
const hascupVilla = require("../media/profile/hascupVilla.pdf");

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
                    renderCustomControls= { this.customControls }
                />
                <div className={"nav-name"}>
                    <Link to={"/home"}>HASCUP ARCHITECTURE</Link>
                </div>
                <div className={"nav-container"}>
                    <ul className={"left-nav"}>
                        <li>
                            <Link to={"/residential"}>Residential</Link>
                        </li>
                        <Square />
                        <li>
                            <Link to={"/public"}>Public Realm</Link>
                        </li>
                        <Square />
                        <li>
                            <Link to={"/industrial"}>Industrial</Link>
                        </li>
                        <Square />
                        <li>
                            <Link to={"/furniture"}>Furniture</Link>
                        </li>
                        <Square />
                        <li>
                            <Link to={"#"}>Profile/Contact</Link>
                        </li>
                    </ul>
                    <ul className={"right-nav"}>
                        <li>
                            <a href={hascupComplete} target={"blank"}>Complete Works</a>
                        </li>
                        <Square />
                        <li>
                            <a href={hascupMonogram} target={"blank"}>Monogram</a>
                        </li>
                        <Square />
                        <li>
                            <a href={hascupVilla} target={"blank"}>Villa Adrianica</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function Square() {
    return (
        <div className={"square"}>
            ■
        </div>
    );
}

export default Navigation;
