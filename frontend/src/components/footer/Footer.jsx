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
                        <div className="location-text">
                                <div className="location-icon">
                                    <ion-icon name="location-outline"><HomeIcon /></ion-icon>
                                </div>
                                <address className="address">
                                    Brussels (Woluwe Saint Pierre)
                                </address>
                            </div>
                            <p className="section-text">
                            I am most happy and feel satisfied when I am able to understand things. Listening to feedback is the most loved part of my job.
                            </p>
                          
                        </div>
                        <div className="quicklink-box">
                            <p className="h3 quicklink-title">Quick links</p>

                            <ul className="quicklink-list">
                                <li>
                                    <a href="https://ubiquitous-fox-005fca.netlify.app/" target="_blank" className="quicklink">Portfolio</a>
                                </li>

                                <li>
                                <a href="https://project-website-blog.netlify.app/" target="_blank" className="quicklink">Let U dev</a>
                                </li>

                                <li>
                                <a href="https://stackoverflow.com/" target="_blank" className="quicklink">Stackoverflow</a>
                                </li>
                            </ul>
                        </div>

                        <div className="contact">
                            <p className="h3 contact-title">Contact</p>

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
                            &copy; 2022 <a href="#">Thierno</a>. All Rights Reserved
                        </p>

                        <ul className="social-list">

                            <li>
                                <a href="https://github.com/thierno953" target="_blank" className="social-link">
                                   <GitHubIcon />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/thierno-barry-0b8527203/"  target="_blank" className="social-link">
                                    <LinkedInIcon />
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
