import React from 'react';
import './hero.css';
import Image1 from "../images/shape1.png"
import Image2 from "../images/shape2.png"
import Image3 from "../images/shape3.png"
import Image4 from "../images/hero-banner.png"

const Hero = () => {
    return (
        <>
            <section className="hero" id="home">
           
         
                <div className="container">
                    <figure className="hero-banner">
                        <img src={Image4} alt="Illustration art" loading="lazy" className="w-100" />
                    </figure>
                    <div className="hero-content">
                        <h2 className="h1 hero-title">Secure IT solutions for a more secure environment</h2>

                        <p className="section-text">
                            Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum felis arcu, non cursus. Nulla pharetra
                            porttitor sed
                            platea arcu et leo odio.
                        </p>

                        <button className="btn btn-primary">
                            <span>Get Started Now</span>
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
