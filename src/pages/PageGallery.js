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
                    fullName: "Abrams Residence",
                    num: 7,
                    type: "res"
                },
                "bigredbarn": {
                    fullName: "Big Red Barn",
                    num: 7,
                    type: "pub"
                },
                "booth": {
                    fullName: "Booth Residence",
                    num: 7,
                    type: "res"
                },
                "chambercommerce": {
                    fullName: "Ithaca Chamber of Commerce",
                    num: 6,
                    type: "pub",
                },
                "childcare": {
                    fullName: "Ithaca Childcare Center",
                    num: 5,
                    type: "pub",
                },
                "ciaschi": {
                    fullName: "Ciaschi Building",
                    num: 2,
                    type: "pub",
                },
                "corningbridge": {
                    fullName: "Corning Museum of Glass Bridge",
                    num: 6,
                    type: "pub",
                },
                "corningpavilion": {
                    fullName: "Corning Museum of Glass Welcome Pavillion",
                    num: 10,
                    type: "pub",
                },
                "corningtennis": {
                    fullName: "Corning Tennis Center and Guest House",
                    num: 23,
                    type: "res"
                },
                "cowie": {
                    fullName: "Cowie Residence",
                    num: 9,
                    type: "res"
                },
                "dicicco": {
                    fullName: "Dicicco Residence",
                    num: 10,
                    type: "res"
                },
                "dyckman": {
                    fullName: "Dyckman Residence",
                    num: 10,
                    type: "res"
                },
                "folkartguild": {
                    fullName: "Folk Art Guild",
                    num: 6,
                    type: "pub",
                },
                "golf": {
                    fullName: "Golf Center Outhouse",
                    num: 4,
                    type: "pub",
                },
                "holidayinn": {
                    fullName: "Ithaca Holiday Inn",
                    num: 6,
                    type: "pub",
                },
                "ithacahotel": {
                    fullName: "Ithaca Hotel",
                    num: 14,
                    type: "pub",
                },
                "lakesource": {
                    fullName: "Lakesource Heating Plant",
                    num: 9,
                    type: "ind"
                },
                "krumhansel": {
                    fullName: "Krumhansel Residence",
                    num: 1,
                    type: "res"
                },
                "mentalhealth": {
                    fullName: "Mental Health Bureau",
                    num: 13,
                    type: "pub",
                },
                "miller": {
                    fullName: "Miller Residence",
                    num: 36,
                    type: "res"
                },
                "plantations": {
                    fullName: "Cornell Plantations (Botanical Gardens) Welcome Center",
                    num: 7,
                    type: "pub",
                },
                "powerplant": {
                    fullName: "Power Plant",
                    num: 11,
                    type: "ind"
                },
                "randel": {
                    fullName: "Randel Residence",
                    num: 12,
                    type: "res"
                },
                "rpiengineering": {
                    fullName: "RPI Engineering Building",
                    num: 9,
                    type: "pub",
                },
                "sampson": {
                    fullName: "Sampson Residence",
                    num: 2,
                    type: "res"
                },
                "sears": {
                    fullName: "Sears Residence",
                    num: 13,
                    type: "res"
                },
                "tchospital": {
                    fullName: "Tompkins County Hospital",
                    num: 2,
                    type: "pub",
                },
                "terasaki": {
                    fullName: "Terasaki Residence",
                    num: 6,
                    type: "res"
                },
                "wilson": {
                    fullName: "Wilson Residence",
                    num: 4,
                    type: "res"
                },
                "youthbureau": {
                    fullName: "Ithaca Youth Bureau",
                    num: 7,
                    type: "pub",
                },
            }
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
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
                for (let i = 1; i <= num; i++) {
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
        let images, name, type;
        if (typeof key !== "undefined") {
            const curImage = imageMap[key];
            images = curImage.images;
            name = curImage.fullName;
            type = curImage.type;
        }
        else {
            images = imageMap.default;
        }
        return (
            <div>
                <Navigation 
                    navigationSubtitle={name}
                    pageType={type}
                />
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
