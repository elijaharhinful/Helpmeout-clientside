import React from 'react';
import { Link } from 'react-router-dom';
import HelpMeOutLogo from './assets/images/logos/HelpMeOutLogo.svg';

import HowItWorks from './HowItWorks';


function Header() {
    return (
        <nav>
            <div className="nav__logo">
                <img src={HelpMeOutLogo} alt="HelpMeOut" className="logo" /> <span>HelpMeOut</span>
            </div>
            <div className="nav__list">
                <ul>
                    <li>Features</li>
                    <Link to="/how-it-works"><li>How It Works</li></Link>
                </ul>
            </div>
            <div className="nav__started">Get Started</div>
        </nav>
    )
}

export default Header;