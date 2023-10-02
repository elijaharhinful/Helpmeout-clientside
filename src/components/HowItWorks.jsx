import Header from './Header';
import Footer from './Footer';

import arrowForward from "../components/assets/images/icons/arrow-right.svg";
import woman from "../components/assets/images/img/woman.png";
import laptop from "../components/assets/images/img/laptop.png";
import elderly from "../components/assets/images/img/elderly.png";
import telegramWhite from "../components/assets/images/icons/telegram_white.svg"
import refreshSquare from "../components/assets/images/icons/refresh-square-2.svg"
import videoRepo from "../components/assets/images/img/Video_repo.png"
import rec from "../components/assets/images/img/rec.png";
import recordCircle from "../components/assets/images/icons/record-circle.svg";
import HeroImage from "../components/assets/images/img/hero-image.png"


function HowItWorks() {
    return (
        <>
            <Header />
            <div className='Hero'>
                <div className="hero__text">
                    <h1> Show Them</h1><br></br>
                    <h1>Don't Just Tell</h1>
                    <p>Help your friends and loved ones by creating <br></br>
                        and sending videos on how to get things done on a website.</p>
                    <a className='button button--large'>Install HelpMeOut <span><img src={arrowForward} alt="" /> </span></a>
                </div>
                <div className="hero__image">
                    <img src={HeroImage} alt="" />
                </div>
            </div>
            <div className="features">
                <div className="features__head">
                    <h2>Features</h2>
                    <p>Key Highlights of Our Extension</p>
                </div>
                <div className="features__body">
                    <div className="features__body--left">
                        <div className="item">
                            <div className="icon"><img src={recordCircle} alt="" /></div>
                            <div className="text">
                                <h3>Simple Screen Recording</h3>
                                <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon"><img src={telegramWhite} alt="" /></div>
                            <div className="text">
                                <h3>Easy-to-Share-URL</h3>
                                <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon"><img src={refreshSquare} alt="" /></div>
                            <div className="text">
                                <h3>Revisit Recordings</h3>
                                <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                            </div>
                        </div>

                    </div>
                    <div className="features__body--right"> <img src={videoRepo} alt="" /> </div>
                </div>
            </div>
            <div className="works">
                <div className="works__head">
                    <h2>How it works</h2>
                </div>
                <div className="works__body">
                    <div className="works__panel">
                        <div className="number"><h2>1</h2></div>
                        <h3>Record Screen</h3>
                        <div className='text'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</div>
                        <div className="image"><img src={rec}></img></div>
                    </div>
                    <div className="works__panel">
                        <div className="number"><h2>2</h2></div>
                        <h3>Share Your Recording</h3>
                        <div className='text'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</div>
                        <div className="image"><img src={rec}></img></div>
                    </div>
                    <div className="works__panel">
                        <div className="number"><h2>3</h2></div>
                        <h3>Learn Effortlessly </h3>
                        <div className='text'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</div>
                        <div className="image"> <img src={rec}></img> </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HowItWorks;