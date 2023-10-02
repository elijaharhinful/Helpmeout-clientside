import React from "react";
import { Link } from "react-router-dom";
import HelpMeOutLogo from './assets/images/logos/HelpMeOutLogo.svg';
import Facebook from './assets/images/icons/facebook.svg';
import Google from './assets/images/icons/google.svg';


function Login() {
    return (
        <div className="login__container">
            <nav>
                <Link to="/">
                <div className="nav__logo">
                    <img src={HelpMeOutLogo} alt="HelpMeOut" className="logo" /> <span>HelpMeOut</span>
                </div>
                </Link>
            </nav>
            <div className="login">
                <div className="top">
                    <div className="head">
                        <h2>Log in or Sign up</h2>
                        <p>Joins millions of other in sharing successful <br></br>
                            moves on <span>HelpMeOut</span></p>
                    </div>
                    <div className="auth">
                        <a href="/" className="button button--large">Continue with Google <img src={Google} alt="google" /></a>
                        <a href="/" className="button button--large"><img src={Facebook} alt="facebook" />Continue with Facebook</a>
                    </div>
                </div>
                <div className="horizontal__line">
                    <div className="line"></div>
                    <div className="or">or</div>
                    <div className="line"></div>
                </div>
                <div className="bottom">
                    <form>
                        <label>Email
                        </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your email address"
                        />
                        <label>Password
                        </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your Password"
                        />
                        <br />
                        <button className="button button--large">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;