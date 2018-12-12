import React, { Component } from "react";
import ReactPaginate from "react-paginate";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";
// CSS
import "../styles/pages/Chairs.less";

const numberOfImages = 109;
const numberOfImagesPerPage = 25;

// Images
let images = [];
for (let i = 1; i < numberOfImages; i++) {
    let newI;
    // i = i < 10  ? `00${i}` : i;
    // i = i < 100 ? `0${i}` : 1;
    if (i < 10) {
        newI = `000${i}`;
    }
    else if (i >= 10 && i < 100) {
        newI = `00${i}`;
    }
    else {
        newI = `0${i}`;
    }
    images.push({
        original: require(`../media/chairs/chairs${newI}.jpg`),
        key: `chairs${newI}.jpg`
    });
}

class Chairs extends Component {
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
            images: images.slice(offset, offset + numberOfImagesPerPage)
        });
        
    }

    render () {
        const { 
            images: slicedImages 
        } = this.state;
        const numberOfPages = Math.ceil(numberOfImages / numberOfImagesPerPage);
        return (
            <div>
                <Navigation 
                    navigationSubtitle="500 Chairs"
                />
                <div className={"chairs-page page"}>
                    <VerticalImageLadder 
                        allImages={images}
                        images={slicedImages} 
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

export default Chairs;
