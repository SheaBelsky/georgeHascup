import React, { Component } from "react";
import PropTypes from "prop-types";

import "../styles/partials/VerticalImageLadder.less";

class Column extends Component {
    render() {
        const { images } = this.props;
        return (
            <div className={"image-column"}>
                {
                    images.map((curImage) => {
                        return (
                            <img className="image-thumbnail" key={curImage.key} src={curImage.original} />
                        );
                    })
                }
            </div>
        );
    }
}

class VerticalImageLadder extends Component {
    render() {
        const { images } = this.props;
        const incrementor = images.length / 2;
        let splitImages = [];
        for (let i = 0; i < images.length; i += incrementor) {
            splitImages.push(images.slice(i, i + incrementor));
        }
        let columnNum = 0;
        return (
            <div className={"vertical-image-ladder"}>
                {
                    splitImages.map((curColumn) => {
                        columnNum++;
                        return (
                            <Column key={columnNum} images={curColumn} />
                        );
                    })
                }
            </div>
        );
    }
}

VerticalImageLadder.propTypes = {
    images: PropTypes.array.isRequired
};

export default VerticalImageLadder;
