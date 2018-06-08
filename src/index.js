// Node module imports
import React    from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// Component imports
import Gateway from "./pages/Gateway";
import Home    from "./pages/Home";

// CSS import
import "./styles/index.less";
import "react-image-gallery/styles/css/image-gallery.css";

// Other imports
//import RegisterServiceWorker from "./RegisterServiceWorker";

ReactDOM.render(
    <BrowserRouter>
        <div id={"page-container"}>
            <Route exact path={"/"}     component={ Gateway }></Route>
            <Route exact path={"/home"} component={ Home }></Route>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);

//RegisterServiceWorker();
