import React from 'react';
import HelpMeOutLogo from './assets/images/logos/HelpMeOutLogo.svg';


function Header() {
    return (
        <nav>
            <div className="nav__logo">
                <img src={HelpMeOutLogo} alt="HelpMeOut" className="logo" /> <span>HelpMeOut</span>
            </div>
            <div className="nav__list">
                <ul>
                    <li>Features</li>
                    <li>How It Works</li>
                </ul>
            </div>
            <div className="nav__started">Get Started</div>
        </nav>
    )
}

export default Header;