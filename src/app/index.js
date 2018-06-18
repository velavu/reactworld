import React from "react";
import { render } from "react-dom";

import { Header, HeaderNew } from "./components/Header";
import { Home } from "./components/Home";


class Myapp extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-offset-1">
                        <HeaderNew />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-offset-1">
                        <Home />
                    </div>
                </div>
            </div>

        );
    }
}

render(<Myapp/>, document.getElementById("app"));