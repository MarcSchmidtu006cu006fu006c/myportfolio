import React from "react";


export default function Home () {
    const mapHref = "https://www.google.com/maps/place/Calgary,+AB/@51.0272883,-114.3680132,10z/data=!3m1!4b1!4m5!3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831";

    return (<>
        <body>
        <div className="home-media">
            <h1 className="home-howdy" id="home-howdy">Howdy, </h1>
        <div className="home-about">
            <h2>My name is Marc Schmidt I'm a software developer from <a target="-black" href={mapHref}>Calgary Alberta</a>, thank you for taking the time to check out my site</h2>
            <h3>Check out some of my recent work or use my contact information for dark web purposes</h3>
            </div>
            </div>
        </body>
        </>
    )
}