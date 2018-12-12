import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import PropTypes from "prop-types";
import "react-image-lightbox/style.css"; 
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
        if (type === "landing") {
            changeImage(name, map);
        }
        else {
            changeImage(name, src);
        }
    }
    handleImageClick = () => {
        const { 
            imageIndex,
            openLightbox
        } = this.props;
        openLightbox(imageIndex);
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
            },
            type
        } = this.props;
        let imageLink;
        if (typeof link !== "undefined") {
            if (window.location.href.indexOf("corningGlass") !== -1) {
                imageLink = `${link}`;
            }
            else {
                imageLink = `${window.location}/${link}`;
            }
        }
        else {
            imageLink = undefined;
        }
        return (
            <a
                className={`image-thumbnail`}
                onMouseEnter={type === "landing" ? this.handleMouseEnter : undefined}
                onClick={type === "gallery" ? this.handleImageClick : undefined}
                href={type === "landing" ? imageLink : undefined}
            >
                <img alt={name} src={src} />
                <div className="image-label">{name}</div>
            </a>
        );
    }
}

class VerticalImageLadder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            label: null,
            lightboxIndex: 0,
            lightboxOpen: false
        };
    }

    changeImage = (label, src) => {
        this.setState({
            image: src,
            label
        });
    }

    resetImage = () => {
        this.setState({
            image: null,
            label: null
        });
    }

    openLightbox = (imageIndex) => {
        console.log(imageIndex);
        this.setState({
            lightboxIndex: imageIndex,
            lightboxOpen: true
        });
    }

    render() {
        const { 
            allImages = this.props.images,
            children,
            images,
            offset,
            type,
        } = this.props;
        const {
            lightboxIndex,
            lightboxOpen
        } = this.state;
        return (
            <div className={"vertical-image-container"}>
                <div className={`vertical-image-ladder vertical-image-ladder--${type}`}>
                    {
                        images.map((image, index) => {
                            console.log(offset, index);
                            return (
                                <VerticalImage
                                    changeImage={this.changeImage}
                                    image={image}
                                    key={offset + index}
                                    imageIndex={offset + index}
                                    openLightbox={this.openLightbox}
                                    resetImage={this.resetImage}
                                    type={type}
                                />
                            );
                        })
                    }
                    <div className="pagination">
                        {typeof children === "object" && children}
                    </div>
                </div>
                {
                    type !== "gallery" && this.state.image && 
                        <div className={`image-preview${type === "landing" ? " map" : ""}`}>
                            {this.state.image !== null &&
                                <img src={this.state.image} />
                            }
                            <div className={"image-preview-label"}>
                                {this.state.label !== null && this.state.label}
                            </div>
                        </div>
                }
                {lightboxOpen === true && (
                    <Lightbox
                        mainSrc={allImages[lightboxIndex]["original"]}
                        nextSrc={allImages[(lightboxIndex + 1) % allImages.length]["original"]}
                        prevSrc={allImages[(lightboxIndex + allImages.length - 1) % allImages.length]["original"]}
                        onCloseRequest={() => this.setState({ lightboxOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                lightboxIndex: (lightboxIndex + allImages.length - 1) % allImages.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                lightboxIndex: (lightboxIndex + 1) % allImages.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

VerticalImageLadder.propTypes = {
    images: PropTypes.array.isRequired
};

export default VerticalImageLadder;
