import React, { Component } from "react";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";

// CSS
import "../styles/pages/Residential.less";

class PageGallery extends Component {
    constructor(props) {
        super(props);

        // Set up state variables
        const { 
            key,
            pagetype
        } = this.props.match.params;

        this.state = {
            key,
            pagetype,
            pagetypeShort: pagetype.substr(0, 3),
            imageMap: {
                "abrams": {
                    num: 7,
                    type: "res"
                },
                "bigredbarn": {
                    num: 7,
                    type: "pub"
                },
                "booth": {
                    num: 7,
                    type: "res"
                },
                "chambercommerce": {
                    num: 6,
                    type: "pub",
                },
                "childcare": {
                    num: 5,
                    type: "pub",
                },
                "ciaschi": {
                    num: 2,
                    type: "pub",
                },
                "corningbridge": {
                    num: 6,
                    type: "pub",
                },
                "corningpavilion": {
                    num: 10,
                    type: "pub",
                },
                "corningtennis": {
                    num: 23,
                    type: "res"
                },
                "cowie": {
                    num: 9,
                    type: "res"
                },
                "dicicco": {
                    num: 10,
                    type: "res"
                },
                "dyckman": {
                    num: 10,
                    type: "res"
                },
                "folkartguild": {
                    num: 6,
                    type: "pub",
                },
                "golf": {
                    num: 4,
                    type: "pub",
                },
                "holidayinn": {
                    num: 6,
                    type: "pub",
                },
                "childcare": {
                    num: 5,
                    type: "pub",
                },
                "lakesource": {
                    num: 9,
                    type: "ind"
                },
                "krumhansel": {
                    num: 1,
                    type: "res"
                },
                "mentalhealth": {
                    num: 13,
                    type: "pub",
                },
                "miller": {
                    num: 15,
                    type: "res"
                },
                "plantations": {
                    num: 7,
                    type: "pub",
                },
                "powerplant": {
                    num: 11,
                    type: "ind"
                },
                "randel": {
                    num: 12,
                    type: "res"
                },
                "rpiengineering": {
                    num: 9,
                    type: "pub",
                },
                "sampson": {
                    num: 2,
                    type: "res"
                },
                "sears": {
                    num: 13,
                    type: "res"
                },
                "tchospital": {
                    num: 2,
                    type: "pub",
                },
                "terasaki": {
                    num: 6,
                    type: "res"
                },
                "wilson": {
                    num: 4,
                    type: "res"
                },
                "youthbureau": {
                    num: 7,
                    type: "pub",
                },
            }
        };
    }
    componentDidMount() {
        const {
            key,
            imageMap,
            pagetype,
            pagetypeShort
        } = this.state;

        const imageMapCopy = Object.assign(imageMap);
        // Calculate which images we need and acquire them
        Object.keys(imageMapCopy).forEach((curImageName) => {
            let curImage = imageMapCopy[curImageName];
            if (curImage.type === pagetypeShort) {
                const lowercase = curImageName;
                const num = curImage.num;
                curImage.images = [];
                for (let i = 1; i < num; i++) {
                    const iString = i < 10 ? `0${i}` : `${i}`;
                    curImage.images.push({
                        key: lowercase,
                        link: undefined,
                        original: require(`../media/${pagetypeShort}/${lowercase}/${lowercase}${iString}.jpg`)
                    });
                }
                if (!imageMapCopy.default) {
                    imageMapCopy.default = [];
                }
                imageMapCopy.default.push({
                    key: lowercase,
                    link: `/#/${pagetype}/${curImageName}/`,
                    original: require(`../media/${pagetypeShort}/${lowercase}/${lowercase}01.jpg`)
                });
            }
        });
        this.setState({
            imageMap: imageMapCopy
        });
    }
    render () {
        const { 
            key,
            imageMap
        } = this.state;
        const images = typeof key !== "undefined" 
            ? imageMap[key].images
            : imageMap.default;
        return (
            <div>
                <Navigation />
                <div className={"res-page page"} key={key}>
                    {
                        typeof images === "object" &&
                            <VerticalImageLadder images={images} />
                    }
                </div>
            </div>
        );
    }
}

export default PageGallery;
