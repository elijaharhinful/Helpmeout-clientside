import React from 'react';
import Modal from 'react-modal';
import { motion , AnimatePresence} from 'framer-motion';
import CloseCircleDark from './assets/images/icons/close-circle-dark.svg';
import Kite from './assets/images/gifs/kite.gif'

const VideoModal = ({ isOpen, closeModal }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="modal"
        >
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel=""
            >
                <button className="close" onClick={closeModal}><img src={CloseCircleDark} alt="success-kite" /></button>
                <img className="kite" src={Kite} alt="success-kite" />
                <div className='modal__data'>
                    <p className='sent'>Your video link has been sent to <b>johnmark@gmail.com</b></p>
                    <p className='view'>Would you need to view this video later?  <br />Save to your account now!</p>
                    <a href="#" className='button button-small save'>Save Video</a>
                    <p className='create'>Don’t have an account? <a href="#">Create account</a></p>
                </div>
            </Modal>
        </motion.div>

    );
};

export default VideoModal;
