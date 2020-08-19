import React from "react";
import Footer from "./Footer";

function Contact(props) {
    return (
        <div>
            <main className="container">
                <div className="col-sm-9 bg-white mt-4 p-4">
                    <h1>Contact Me</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-9 d-flex justify-content-center">

                            <p>E-mail Me: </p> <a id="emailLink" href="mailto: mar0099887@gmail.com">  mar0099887@gmail.com</a>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 d-flex justify-content-center">
                            <a href="https://github.com/Mar009" target="_blank">
                                <img src="https://img.icons8.com/fluent/48/000000/github.png" />
                            </a>
                            <a href="https://www.linkedin.com/in/marisa-diaz-9271b2141/" target="_blank">
                                <img src="https://img.icons8.com/material/48/000000/linkedin--v1.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
 

    )
}

export default Contact; 