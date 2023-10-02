import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { AnimatePresence } from 'framer-motion';
import VideoModal from './VideoModal';
import VideoReadyMain from "./VideoReadyMain";


function VideoReady() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="ready__container">
            <Header />
            <VideoReadyMain />
            <div className="save__video">
                <h5>To ensure the availability and privacy of your video,
                    <br></br>
                    we recommend saving it to your account.</h5>
                <a className="button button--small" onClick={openModal}>Save Video</a>
                <p>Don’t have an account? <a href="#">Create account</a></p>

                <AnimatePresence>
                    {modalIsOpen && <VideoModal isOpen={modalIsOpen} closeModal={closeModal} />}
                </AnimatePresence>
            </div>
            <Footer />
        </div>
    )
}
export default VideoReady;