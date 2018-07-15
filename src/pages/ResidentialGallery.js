import React, { Component } from "react";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";

// CSS
import "../styles/pages/Residential.less";

// Images
let imageMap = {
    "abrams": {
        num: 7
    },
    "booth": {
        num: 7
    },
    "corningtennis": {
        num: 23
    },
    "cowie": {
        num: 9
    },
    "dicicco": {
        num: 10
    },
    "dyckman": {
        num: 10
    },
    "krumhansel": {
        num: 1
    },
    "miller": {
        num: 15
    },
    "randel": {
        num: 12
    },
    "sampson": {
        num: 2
    },
    "sears": {
        num: 13
    },
    "terasaki": {
        num: 6
    },
    "wilson": {
        num: 4
    }
};
Object.keys(imageMap).forEach((curImageName) => {
    let curImage = imageMap[curImageName];
    const lowercase = curImageName;
    const num = curImage.num;
    curImage.images = [];
    for (let i = 1; i < num; i++) {
        const iString = i < 10 ? `0${i}` : `${i}`;
        curImage.images.push({
            key: lowercase,
            link: undefined,
            original: require(`../media/res/${lowercase}/${lowercase}${iString}.jpg`)
        });
    }
    if (!imageMap.default) {
        imageMap.default = [];
    }
    imageMap.default.push({
        key: lowercase,
        link: `/#/residential/${curImageName}/`,
        original: require(`../media/res/${lowercase}/${lowercase}01.jpg`)
    });
});

class Residential extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.match.params.key
        };
    }
    render () {
        const { key = undefined } = this.state;
        const images = typeof key !== "undefined" 
            ? imageMap[key].images
            : imageMap.default;
        return (
            <div>
                <Navigation />
                <div className={"res-page page"} key={key}>
                    <VerticalImageLadder images={images} />
                </div>
            </div>
        );
    }
}

export default Residential;
