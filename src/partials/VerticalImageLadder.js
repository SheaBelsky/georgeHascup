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
        changeImage(e.target.src);
    }
    handleMouseLeave = () => {
        const { resetImage } = this.props;
        resetImage();
    }
    render() {
        const { src: imageSrc } = this.props;
        return (
            <div 
                className="image-thumbnail"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <img src={imageSrc} />
            </div>
        );
    }
}

class VerticalImageLadder extends Component {
    changeImage = (newImage) => {
        this.setState({
            image: newImage
        });
    }

    resetImage = () => {
        this.setState({
            image: null
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            image: null
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
        console.log(this.state.image);
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
                </div>
            </div>
        );
    }
}

VerticalImageLadder.propTypes = {
    images: PropTypes.array.isRequired
};

export default VerticalImageLadder;
