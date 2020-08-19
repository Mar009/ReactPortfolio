import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function LandingPg(props) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="col-sm-9 bg-white mt-4 p-4">
                    <h1>About Me</h1>
                    <hr />
                    <div>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E35AQGAuS3atUIODg/profile-framedphoto-shrink_200_200/0?e=1597881600&v=beta&t=5txNYLDiyUktQznyj8abQMhnX4KvSSHyPH9g_gBCzrc" alt= "Me"
                            className="profilePhoto mr-4" />
                        <p>A student of UT's Full-Stack Bootcamp.  </p>
                        <p>I'm from lockhart, TX and I just recently graduated from Texas State with Magna cum Laude in Business MGMT. Being from the BBQ capital of Texas, it means I'm very picky about my BBQ.
                            In my free time I design knives. I also make them but I'm not forging yet, especially now in the Texas summer. I also do leatherwork and you can find examples of it in my portfolio.  </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPg;