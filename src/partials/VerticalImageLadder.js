import React, { Component } from "react";
import PropTypes from "prop-types";

import "../styles/partials/VerticalImageLadder.less";

class VerticalColumn extends Component {
    render() {
        const { changeImage, images, resetImage } = this.props;
        return (
            <div className={"image-column"}>
                {
                    images.map((curImage) => {
                        return (
                            <VerticalImage 
                                key={curImage.key}
                                label={curImage.key}
                                src={curImage.original} 
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
        const { label, src: imageSrc } = this.props;
        return (
            <div 
                className="image-thumbnail"
                onMouseEnter={this.handleMouseEnter}
                //onMouseLeave={this.handleMouseLeave}
            >
                <img alt={label} src={imageSrc} />
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
