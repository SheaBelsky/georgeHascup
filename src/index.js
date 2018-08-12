// Node module imports
import React    from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

// Component imports
import PageGallery from "./pages/PageGallery";

import Furniture   from "./pages/Furniture";
import Gateway     from "./pages/Gateway";
import Home        from "./pages/Home";
import Industrial  from "./pages/Industrial";
import Public      from "./pages/Public";
import Residential from "./pages/Residential";

// CSS import
import "./styles/index.less";
import "react-image-gallery/styles/css/image-gallery.css";

// Other imports
//import RegisterServiceWorker from "./RegisterServiceWorker";

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div id={"page-container"}>
            <Route exact path={"/"}                         component={ Gateway }></Route>
            <Route exact path={"/home"}                     component={ Home }></Route>
            <Route exact path={"/furniture"}                component={ Furniture }></Route>
            <Route exact path={"/industrial/"}              component={ Industrial }></Route>
            <Route exact path={"/public/"}                  component={ Public }></Route>
            <Route exact path={"/residential/"}             component={ Residential }></Route>
            <Route exact path={"/:pagetype/gallery/:key"}   component={ PageGallery }></Route>
        </div>
    </HashRouter>,
    document.getElementById("root")
);

//RegisterServiceWorker();
