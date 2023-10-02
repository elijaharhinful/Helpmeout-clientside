import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import user from "./assets/images/icons/profile-circle.svg"
import arrowDown from "./assets/images/icons/arrow-down.svg"
import search from "./assets/images/icons/search-normal.svg"
import link from "./assets/images/icons/link.svg"
import more from "./assets/images/icons/more.svg"
import frame from "./assets/images/img/frame.png"
import { Link } from 'react-router-dom';
import HelpMeOutLogo from './assets/images/logos/HelpMeOutLogo.svg';



function VideoRepo() {
    return (
        <div className="repo__container">
            <nav>
                <Link to="/">
                    <div className="nav__logo">
                        <img src={HelpMeOutLogo} alt="HelpMeOut" className="logo" /> <span>HelpMeOut</span>
                    </div>
                </Link>
                <div className="nav__user">
                    <img src={user} alt="user" />
                    <p>John Mark</p>
                    <img src={arrowDown} alt="arrow-down" />
                </div>
            </nav>
            <div className="header">
                <div className="head">
                    <h2>Hello, John Mark</h2>
                    <p>Here are your recorded videos</p>
                </div>
                <div className="form">
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search for a particular video" />
                </div>
            </div>
            <hr />
            <div className="repo__body">
                <p className="recent">Recent files</p>
                <div className="repo__cards">
                    <div className="card">
                        <div className="frame"><img src={frame} alt="" /></div>

                        <div className="card--text">
                            <div className="card--title">
                                <h3>How To Create Facebook Ad Listing</h3>
                                <div className="icons">
                                    <img src={link} alt="" />
                                    <img src={more} alt="" />
                                </div>
                            </div>
                            <p>SEPTEMBER 23, 2023</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="frame"><img src={frame} alt="" /></div>

                        <div className="card--text">
                            <div className="card--title">
                                <h3>How To Create Facebook Ad Listing</h3>
                                <div className="icons">
                                    <img src={link} alt="" />
                                    <img src={more} alt="" />
                                </div>
                            </div>
                            <p>SEPTEMBER 23, 2023</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="frame"><img src={frame} alt="" /></div>

                        <div className="card--text">
                            <div className="card--title">
                                <h3>How To Create Facebook Ad Listing</h3>
                                <div className="icons">
                                    <img src={link} alt="" />
                                    <img src={more} alt="" />
                                </div>
                            </div>
                            <p>SEPTEMBER 23, 2023</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="frame"><img src={frame} alt="" /></div>

                        <div className="card--text">
                            <div className="card--title">
                                <h3>How To Create Facebook Ad Listing</h3>
                                <div className="icons">
                                    <img src={link} alt="" />
                                    <img src={more} alt="" />
                                </div>
                            </div>
                            <p>SEPTEMBER 23, 2023</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="frame"><img src={frame} alt="" /></div>

                        <div className="card--text">
                            <div className="card--title">
                                <h3>How To Create Facebook Ad Listing</h3>
                                <div className="icons">
                                    <img src={link} alt="" />
                                    <img src={more} alt="" />
                                </div>
                            </div>
                            <p>SEPTEMBER 23, 2023</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="frame"><img src={frame} alt="" /></div>

                        <div className="card--text">
                            <div className="card--title">
                                <h3>How To Create Facebook Ad Listing</h3>
                                <div className="icons">
                                    <img src={link} alt="" />
                                    <img src={more} alt="" />
                                </div>
                            </div>
                            <p>SEPTEMBER 23, 2023</p>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}
export default VideoRepo;