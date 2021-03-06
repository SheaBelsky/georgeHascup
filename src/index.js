// Node module imports
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

// Component imports
import PageGallery from "./pages/PageGallery";

import Chairs from "./pages/Chairs";
import CorningGlass from "./pages/CorningGlass";
import Furniture from "./pages/Furniture";
import Gateway from "./pages/Gateway";
import Home from "./pages/Home";
import Industrial from "./pages/Industrial";
import Profile from "./pages/Profile";
import Public from "./pages/Public";
import Residential from "./pages/Residential";

// CSS import
import "./styles/index.less";
import "react-image-gallery/styles/css/image-gallery.css";

// Other imports
//import RegisterServiceWorker from "./RegisterServiceWorker";

// TODO: Render nav outside of the router so the image gallery doesn't jump from one page to the next
// Need to do something special with home page where it won't render

// HTTPS redirect
if (location.hostname === "www.georgehascup.com" && location.protocol !== "https:") {
    location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div id={"page-container"}>
            <Route exact path={"/"} component={ Gateway }></Route>
            <Route exact path={"/home"} component={ Home }></Route>
            <Route exact path={"/chairs"} component={ Chairs }></Route>
            <Route exact path={"/corningGlass"} component={ CorningGlass }></Route>
            <Route exact path={"/furniture"} component={ Furniture }></Route>
            <Route exact path={"/industrial/"} component={ Industrial }></Route>
            <Route exact path={"/profile/"} component={ Profile }></Route>
            <Route exact path={"/public/"} component={ Public }></Route>
            <Route exact path={"/residential/"} component={ Residential }></Route>
            <Route exact path={"/:pagetype/gallery/:key"} component={ PageGallery }></Route>
        </div>
    </HashRouter>,
    document.getElementById("root")
);

//RegisterServiceWorker();
