import React from 'react'
import './footer.css';
import Image from "../images/logo.svg"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-brand">
                            <a href="#" className="logo">
                                <img src={Image} alt="Solutry logo" />
                            </a>
                            <p className="section-text">
                                Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                minim.
                            </p>
                            <div className="location-text">
                                <div className="location-icon">
                                    <ion-icon name="location-outline"><HomeIcon /></ion-icon>
                                </div>
                                <address className="address">
                                    Brussels
                                </address>
                            </div>
                        </div>
                        <div className="quicklink-box">
                            <p className="h3 quicklink-title">Quick links</p>

                            <ul className="quicklink-list">
                                <li>
                                    <a href="#" className="quicklink">IT Startup</a>
                                </li>

                                <li>
                                    <a href="#" className="quicklink">Software</a>
                                </li>

                                <li>
                                    <a href="#" className="quicklink">Business</a>
                                </li>

                                <li>
                                    <a href="#" className="quicklink">App</a>
                                </li>
                            </ul>
                        </div>

                        <div className="contact">
                            <p className="h3 contact-title">Contact with us</p>

                            <ul className="contact-list">

                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <ion-icon name="mail-outline"><EmailIcon /></ion-icon>
                                    </div>

                                    <a href="mailto:hello@solutry.com" className="contact-link">
                                        thiernobarry554@gmail.com</a>
                                </li>

                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <ion-icon name="call-outline"><PhoneIcon /></ion-icon>
                                    </div>

                                    <a href="tel:+14854560102" className="contact-link">+32 466 240 103</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">

                        <p className="copyright">
                            &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
                        </p>

                        <ul className="social-list">

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-facebook"><GitHubIcon /></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-twitter"><LinkedInIcon /></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
