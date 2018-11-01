import React, { Component } from "react";
import Navigation from "./../partials/Navigation";

import "./../styles/pages/Profile.less";

import hascuparch from "./../media/profile/hascuparch.pdf";
import hascupfurn from "./../media/profile/hascupfurn.pdf";

import stripsarch from "./../media/profile/stripsarch.jpg";
import stripsfurn from "./../media/profile/stripsfurn.jpg";
import propic from "./../media/profile/propic.jpg";

class Profile extends Component {
    render() {
        return(
            <div>
                <Navigation 
                    navigationSubtitle="Profile"
                />
                <div className={"profile-page page"}>
                    <div className="column">
                        <img src={propic} alt="George Hascup profile picture" />
                        <h2>Cornell Office Address</h2>
                        <div>George E. Hascup, Jr.</div>
                        <div>Department of Architecture, Art & Planning</div>
                        <div>Cornell University 143 Sibley Hall</div>
                        <div>Ithaca, NY 14853-670</div>
                        <div>office: 607-273-9166</div>
                        <div><a href="mailto:geh8@cornell.edu">geh8@cornell.edu</a></div>

                        <h2>Personal Address</h2>
                        <div>Hascup Architecture</div>
                        <div>318 S. Geneva St.</div>
                        <div>Ithaca, NY 14850</div>
                        <div>cell: 607-379-0807</div>
                    </div>
                    <div className="column">
                        <div className="poster">
                            <img src={stripsarch} alt="George Hascup Architecture Work" />
                            <a href={hascuparch}>George Hascup Architecture Poster</a>
                        </div>
                        <div className="poster">
                            <img src={stripsfurn} alt="George Hascup Student Furniture Work" />
                            <a href={hascupfurn}>George Hascup Student Furniture Work</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
