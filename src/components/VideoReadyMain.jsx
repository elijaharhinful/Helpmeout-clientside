import React from 'react';
import Modal from 'react-modal';
import { AnimatePresence } from 'framer-motion';
import VideoModal from './VideoModal';
import Edit from './assets/images/icons/edit.svg';
import Copy from './assets/images/icons/copy.svg';
import Facebook from './assets/images/icons/facebook.svg';
import Whatsapp from './assets/images/icons/whatsapp.svg';
import Telegram from './assets/images/icons/telegram.svg';
import Settings from './assets/images/icons/setting.svg';
import Volume from './assets/images/icons/volume-high.svg';
import Play from './assets/images/icons/pause,play.svg';
import ArrowDown from './assets/images/icons/arrow-down.svg';


function VideoReadyMain() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <main className='video__main'>
            <div className="left">
                <h3>Your video is ready!</h3>
                <div className="video__name">
                    <p>Name</p>
                    <div>
                        <h5>Untitled_Video_20232509</h5>
                        <img src={Edit} alt="edit" />
                    </div>
                </div>
                <div className="email">
                    <input name='email' placeholder='enter email of receiver' />
                    <button className='button button--small' onClick={openModal}>Send</button>
                </div>
                <div className="video__url">
                    <label>Video Url</label>
                    <br></br>
                    <input name='video_url' placeholder='https://www.helpmeout/Untitled_Video_20232509' />
                    <button className='button button--small'><img src={Copy} alt="copy" />Send</button>
                </div>
                <div className="share__video">
                    <a href="#" className='button-hollow'><img src={Facebook} alt="facebook" />Facebook</a>
                    <a href="#" className='button-hollow'><img src={Whatsapp} alt="Whatsapp" />Whatsapp</a>
                    <a href="#" className='button-hollow'><img src={Telegram} alt="Telegram" />Telegram</a>
                </div>
            </div>
            <div className="right">
                <div className="video__player"></div>
                <div className="transcript">
                    <h5>Transcript</h5>
                    <select>
                        <option value="english">English</option>
                        <option value="french">French</option>
                    </select>
                    <div className="transcript__body">
                        <div>
                            <div className="timestamp">0.01</div>
                            <div className="transcript__content">First step. Open Facebook on your desktop or mobile device and
                                locate "Marketplace" in the left-hand menu or at the top of the
                            </div>
                        </div>
                        <div><div className="timestamp">0.15</div>
                            <div className="transcript__content">First step. Open Facebook on your desktop or mobile device and
                                locate "Marketplace" in the left-hand menu or at the top of the
                            </div></div>
                        <div>
                            <div className="timestamp">0.30</div>
                            <div className="transcript__content">First step. Open Facebook on your desktop or mobile device and
                                locate "Marketplace" in the left-hand menu or at the top of the
                            </div>
                        </div>
                        <div>
                            <div className="timestamp">0.30</div>
                            <div className="transcript__content">First step. Open Facebook on your desktop or mobile device and
                                locate "Marketplace" in the left-hand menu or at the top of the
                            </div>
                        </div>
                        <div>
                            <div className="timestamp">0.30</div>
                            <div className="transcript__content">First step. Open Facebook on your desktop or mobile device and
                                locate "Marketplace" in the left-hand menu or at the top of the
                            </div>
                        </div>
                        <div>
                            <div className="timestamp">0.30</div>
                            <div className="transcript__content">First step. Open Facebook on your desktop or mobile device and
                                locate "Marketplace" in the left-hand menu or at the top of the
                            </div>
                        </div>
                        <div>
                            <div className="timestamp">0.30</div>
                            <div className="transcript__content">First step. Open Facebook on your desktop or mobile device and
                                locate "Marketplace" in the left-hand menu or at the top of the
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <AnimatePresence>
                {modalIsOpen && <VideoModal isOpen={modalIsOpen} closeModal={closeModal} />}
            </AnimatePresence>
        </main>
    )
}

export default VideoReadyMain;