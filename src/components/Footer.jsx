
import HelpMeOutLogoWhite from './assets/images/logos/HelpMeOut-white.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <div>
                    <img src={HelpMeOutLogoWhite} alt="HelpMeOut" className="logo" />
                    <span>HelpMeOut</span>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Converter</li>
                    <li>How It Works</li>
                </ul>
            </div>
            <div className="about">
                <ul>
                    <li>About us</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="screen">
                <ul>
                    <li>Screen Record</li>
                    <li>Browser Window</li>
                    <li>Desktop</li>
                    <li>Application</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;