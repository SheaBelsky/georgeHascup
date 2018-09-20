import React, { Component } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";

import "../styles/partials/VerticalImageLadder.less";

class VerticalImage extends Component {
    handleMouseEnter = (e) => {
        const { changeImage, image, type } = this.props;
        const { map } = image;
        const { target: element } = e;
        let newElement = element.childNodes.length > 0
            ? element.childNodes[0]
            : element;
        const { name, src } = newElement;
        if (type === "residentialHome") {
            changeImage(name, map);
        }
        else {
            changeImage(name, src);
        }
    }
    handleMouseLeave = () => {
        const { resetImage } = this.props;
        resetImage();
    }
    render() {
        const { 
            image: {
                name, 
                link, 
                original: src
            } 
        } = this.props;
        const imageLink = typeof link !== "undefined"
            ? `${window.location}/${link}`
            : undefined;
        return (
            <a 
                className="image-thumbnail"
                onMouseEnter={this.handleMouseEnter}
                href={imageLink}
                key={src}
            >
                <img alt={name} src={src} key={src}/>
                <div className="image-label">{name}</div>
            </a>
        );
    }
}

class VerticalImageLadder extends Component {
    changeImage = (label, src) => {
        this.setState({
            image: src,
            label: label
        });
    }

    resetImage = () => {
        this.setState({
            image: null,
            label: null
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            label: null
        };
    }

    render() {
        const { images, type } = this.props;
        return (
            <div className={"vertical-image-container"}>
                <div className={"vertical-image-ladder"}>
                    {
                        images.map((image) => {
                            return (
                                <VerticalImage 
                                    image={image}
                                    resetImage={this.resetImage}
                                    changeImage={this.changeImage}
                                    type={type}
                                />
                            );
                        })
                    }
                </div>
                <div className={"image-preview"}>
                    {this.state.image !== null &&
                        <img src={this.state.image} />
                    }
                    <div className={"image-preview-label"}>
                        {this.state.label !== null && this.state.label}
                    </div>
                </div>
            </div>
        );
    }
}

VerticalImageLadder.propTypes = {
    images: PropTypes.array.isRequired
};

export default VerticalImageLadder;
