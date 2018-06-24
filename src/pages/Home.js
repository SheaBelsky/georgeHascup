import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

import Navigation from "./../partials/Navigation";

// CSS
import "../styles/pages/Home.less";

class Home extends Component {
    render () {
        return (
            <div>
                <Navigation />
                <div className={"home-page page"}>
                    <div className={"home-splash"}>
                    </div>
                </div>
            </div>
           
        );
    }
} 

export default Home;
