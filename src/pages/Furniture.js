import React, { Component } from "react";
import ReactPaginate from "react-paginate";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";
// CSS
import "../styles/pages/furniture.less";

const numberOfImages = 197;
const numberOfImagesPerPage = 50;

// Images
let images = [];
for (let i = 1; i < numberOfImages; i++) {
    let newI;
    // i = i < 10  ? `00${i}` : i;
    // i = i < 100 ? `0${i}` : 1;
    if (i < 10) {
        newI = `00${i}`;
    }
    else if (i >= 10 && i < 100) {
        newI = `0${i}`;
    }
    else {
        newI = i;
    }
    images.push({
        original: require(`../media/furn/furn${newI}.jpg`),
        key: `furn${newI}.jpg`
    });
}

class Furniture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: images.slice(0, numberOfImagesPerPage),
            offset: 0
        };
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * numberOfImagesPerPage);
    
        this.setState({
            images: images.slice(offset, offset + numberOfImagesPerPage),
            offset: offset
        });
    }

    render () {
        const { 
            images: slicedImages,
            offset
        } = this.state;
        const numberOfPages = Math.ceil(numberOfImages / numberOfImagesPerPage);
        return (
            <div>
                <Navigation 
                    navigationSubtitle="Furniture"
                />
                <div className={"furn-page page"}>
                    <VerticalImageLadder 
                        allImages={images}
                        images={slicedImages} 
                        offset={offset}
                        type={"gallery"}
                    >
                        <ReactPaginate 
                            pageCount={numberOfPages}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            previousLabel={"previous"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            onPageChange={this.handlePageClick}
                        />
                    </VerticalImageLadder>
                </div>
            </div>
        );
    }
} 

export default Furniture;
