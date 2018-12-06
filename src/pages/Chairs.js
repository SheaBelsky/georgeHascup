import React, { Component } from "react";
import ReactPaginate from "react-paginate";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";
// CSS
import "../styles/pages/Chairs.less";

const numImagesPerPage = 50;

// Images
let images = [];
for (let i = 1; i < 508; i++) {
    let newI;
    // i = i < 10  ? `00${i}` : i;
    // i = i < 100 ? `0${i}` : 1;
    if (i < 10) {
        newI = `0000${i}`;
    }
    else if (i >= 10 && i < 100) {
        newI = `000${i}`;
    }
    else {
        newI = `00${i}`;
    }
    images.push({
        original: require(`../media/chairs/chairs_${newI}.jpg`),
        key: `chairs_${newI}.jpg`
    });
}

class Chairs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: images.slice(0, numImagesPerPage),
            offset: 0
        };
        console.log(images.length);
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * numImagesPerPage);
    
        this.setState({
            images: images.slice(offset, offset + numImagesPerPage)
        });
        
    }

    render () {
        const { 
            images: slicedImages 
        } = this.state;
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
                            pageCount={11}
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
