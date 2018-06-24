import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

// CSS
import "../styles/pages/Gateway.less";

// Images
const gatewayImage1 = require("../media/gateway/1.jpg");
const gatewayImage2 = require("../media/gateway/2.jpg");
const gatewayImage3 = require("../media/gateway/3.jpg");
const gatewayImage4 = require("../media/gateway/4.jpg");
const gatewayImage5 = require("../media/gateway/5.jpg");
const gatewayImage6 = require("../media/gateway/6.jpg");
const gatewayImage7 = require("../media/gateway/7.jpg");

export default class Gateway extends Component {
    render () {
        const images = [
            { original: gatewayImage1 },
            { original: gatewayImage2 },
            { original: gatewayImage3 },
            { original: gatewayImage4 },
            { original: gatewayImage5 },
            { original: gatewayImage6 },
            { original: gatewayImage7 },
        ];
        return (
            <div className={"gateway-page page"}>
                <div className={"gateway-page-button"}>
                    <div className={"gateway-page-name"}>
                        HASCUP - ARCHITECTURE
                    </div>
                    <div className={"gateway-page-desc"}>
                        ARCHITECTURE, URBAN DESIGN, FURNITURE
                    </div>
                    <div className={"gateway-page-map"}>
                        <div className={"gateway-page-map-button"}>
                            <div className={"gateway-page-map-button-enter"}>
                                <Link to={"/home"}>ENTER</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"gateway-page-gallery"}>
                    <ImageGallery 
                        autoPlay=             { true }
                        items=                { images }
                        showFullscreenButton= { false }
                        showPlayButton=       { false }
                        showNav=              { false }
                        showThumbnails=       { false }
                    />
                </div>
            </div>
        );
    }
}
