import React from 'react';
import './hero.css';
import Image4 from "../images/service-2.png"
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <section className="hero" id="home">


                <div className="container">
                    <figure className="hero-banner">
                        <img src={Image4} alt="Illustration art" loading="lazy" className="w-100" />
                    </figure>
                    <div className="hero-content">
                        <h2 className="h1 hero-title">Hello🤚 I'm Thierno</h2>

                        <p className="section-text">
                            Frontend Web Developer
                        </p>
                        <p className="section-text">
                        I am a person who never gives up 💪 in life. An openness to learn and share. More comfortable with multicultural.
                        </p>

                        <button className="btn btn-primary">
                            <span><Link to="/tours/search">Link to blog</Link></span>
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
