import React, { Component } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";

import "../styles/partials/VerticalImageLadder.less";

class VerticalImage extends Component {
    handleMouseEnter = (e) => {
        const { changeImage } = this.props;
        const { target: element } = e;
        const { alt, src } = element;
        changeImage(alt, src);
    }
    handleMouseLeave = () => {
        const { resetImage } = this.props;
        resetImage();
    }
    render() {
        const { image: {label, link, original: src} } = this.props;
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
                <img alt={label} src={src} key={src}/>
            </a>
        );
    }
}

class VerticalColumn extends Component {
    render() {
        const { changeImage, images, resetImage } = this.props;
        return (
            <div className={"image-column"}>
                {
                    images.map((image) => {
                        return (
                            <VerticalImage 
                                image={image}
                                resetImage={resetImage}
                                changeImage={changeImage}
                            />
                        );
                    })
                }
            </div>
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
        const { images } = this.props;
        const incrementor = images.length / 3;
        let splitImages = [];
        for (let i = 0; i < images.length; i += incrementor) {
            splitImages.push(images.slice(i, i + incrementor));
        }
        let columnNum = 0;
        return (
            <div className={"vertical-image-container"}>
                <div className={"vertical-image-ladder"}>
                    {
                        splitImages.map((curColumn) => {
                            columnNum++;
                            return (
                                <VerticalColumn 
                                    key={columnNum} 
                                    images={curColumn}
                                    resetImage={this.resetImage}
                                    changeImage={this.changeImage}
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
