import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#"> Home </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export class HeaderNew extends React.Component {
    render() {
        return (
            <div className="container">
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">

                       <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                        Bootstrap
                    </a>
                </nav>
            </div>
        );
    }
}