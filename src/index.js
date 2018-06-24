// Node module imports
import React    from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

// Component imports
import Furniture from "./pages/Furniture";
import Gateway   from "./pages/Gateway";
import Home      from "./pages/Home";

// CSS import
import "./styles/index.less";
import "react-image-gallery/styles/css/image-gallery.css";

// Other imports
//import RegisterServiceWorker from "./RegisterServiceWorker";

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div id={"page-container"}>
            <Route exact path={"/"}     component={ Gateway }></Route>
            <Route exact path={"/home"} component={ Home }></Route>
            <Route exact path={"/furniture"} component={ Furniture }></Route>
        </div>
    </HashRouter>,
    document.getElementById("root")
);

//RegisterServiceWorker();
