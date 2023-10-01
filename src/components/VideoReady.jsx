import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import VideoReadyMain from "./VideoReadyMain";


function VideoReady() {
    return (
        <div className="ready__container">
            <Header />
            <VideoReadyMain />
            <div className="save__video">
                <h5>To ensure the availability and privacy of your video,
                    <br></br>
                    we recommend saving it to your account.</h5>
                <a href="#" className="button button--small">Save Video</a>
                <p>Don’t have an account? <a href="#">Create account</a></p>
            </div>
            <Footer />
        </div>
    )
}
export default VideoReady;