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

const typeNameMap = {
    "ind": "Industrial",
    "pub": "Public Realm",
    "res": "Residential",
};

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navFixed: false
        };
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
        // Manually call the function after load to determine if the nav needs to be fixed
        this.handleScroll();
    }
    
    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    }
    
    handleScroll = (event) => {
        // Deermine if the nav is already fixed to the page
        const { navFixed } = this.state;
        // Save the element we're wanting to scroll 
        const el = document.querySelector(".nav-container");
        // Get the current scroll position of the window
        const pageY = window.scrollY;
        // If we've scrolled into the area where the top image gallery is supposed to be, un-fix the navigation
        if (pageY <= 100) {
            this.setState({
                navFixed: false
            });
        }
        // If we've scrolled past the top of the navigation and it isn't already fixed, stick it
        if (el.getBoundingClientRect().top <= 0 && navFixed !== true) {
            this.setState({
                navFixed: true
            });
        }
    }

    render() {
        const { 
            navigationSubtitle,
            pageType
        } = this.props;
        const { navFixed } = this.state;
        const navClass = navFixed
            ? "nav--fixed"
            : "";
        const navContainerStyle = navFixed 
            ? { position: "fixed", top: 0 }
            : { position: "static" };
        const destination = typeNameMap[pageType];
        return (
            <div 
                className={`nav ${navClass}`}
            >
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
                <div 
                    className={"nav-container"} 
                    style={navContainerStyle}
                >
                    <div className={"nav-name"}>
                        <Link to={"/home"}>HASCUP ARCHITECTURE</Link>
                    </div>
                    <div className={"nav-links"}>
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
                                <Link to={"/chairs"}>500 Chairs</Link>
                            </li>
                            <Square />
                            <li>
                                <Link to={"/corningGlass"}>Corning Glass</Link>
                            </li>
                            <Square />
                            <li>
                                <Link to={"/profile"}>Profile</Link>
                            </li>
                            <li>
                                <a href={hascupMonogram} target={"blank"}>Complete Works</a>
                            </li>
                            <Square />
                            <li>
                                <a href={hascupComplete} target={"blank"}>Monogram</a>
                            </li>
                            <Square />
                            <li>
                                <a href={hascupVilla} target={"blank"}>Villa Adrianica</a>
                            </li>
                        </ul>
                    </div>
                    <div className="subtitle">
                        {
                            pageType && 
                            <Link to={`/${destination.split(" ")[0].toLowerCase()}`}>
                                Return to {destination}
                            </Link>
                        }
                        {
                            navigationSubtitle &&
                            <span className="subtitle-text">
                                {navigationSubtitle}
                            </span>
                        }
                    </div>
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
