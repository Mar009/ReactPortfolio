import React from "react";
import Projects from "./Projects"
import LandingPg from "./LandingPg";

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Marisa Diaz</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick = {LandingPg}>Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick= {Projects}>Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <script type = "text/javascript" src= "./components/Contact.js"></script> */}
        </div>
    )
}

export default Header;