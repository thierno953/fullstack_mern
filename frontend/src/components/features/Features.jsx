import React from 'react';
import './features.css';
import FeaturesApi from '../../api/FeaturesApi';

const Features = () => {
    return (
        <>
            <section className="features" id="features">
                <div className="container">

                    {/* <p className="section-subtitle"></p> */}

                    <h2 className="h2 section-title">Everything you need to deploy your app.</h2>

                    <ul className="features-list">

                        {FeaturesApi.map((val, index) => {
                            return (
                                <li>
                                    <div className="features-card">

                                        <div className="card-icon">
                                            <img src={val.image} alt="Illustration icon" />
                                        </div>

                                        <h3 className="h3 card-title">{val.card_title}</h3>

                                        <p className="card-text">
                                            {val.card_text}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Features
