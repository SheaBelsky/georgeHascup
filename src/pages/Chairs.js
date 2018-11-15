import React, { Component } from "react";
import ReactPaginate from "react-paginate";

import Navigation from "./../partials/Navigation";
import VerticalImageLadder from "./../partials/VerticalImageLadder";
// CSS
import "../styles/pages/Chairs.less";

// Images
let images = [];
for (let i = 1; i < 117; i++) {
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
        original: require(`../media/chairs/chairs${newI}.jpg`),
        key: `chairs${newI}.jpg`
    });
}

class Chairs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: images.slice(0, 5),
            offset: 0
        };
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 5);
        console.log(selected);
    
        this.setState({
            images: images.slice(offset, offset + 5)
        });
    }

    render () {
        const { 
            images: slicedImages 
        } = this.state;
        console.log(slicedImages);
        return (
            <div>
                <Navigation 
                    navigationSubtitle="500 Chairs"
                />
                <div className={"chairs-page page"}>
                    <VerticalImageLadder images={slicedImages} width={1}>
                        <ReactPaginate 
                            pageCount={24}
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
