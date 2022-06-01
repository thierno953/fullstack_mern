import React from 'react';
import './service.css';
import Image_1 from "../images/service-1.png"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ServiceApi from '../../api/ServiceApi';

const Services = () => {
    return (
        <>
            <section className="service" id="service">
                <div className="container">

                    <figure className="service-banner">
                        <img src={Image_1} alt="Illustration art" loading="lazy" className="w-100" />
                    </figure>

                    <div className="service-content">

                        <p className="section-subtitle">Services We Offer</p>

                        <h2 className="h2 section-title">We are here, to help your startup business</h2>

                        <ul className="service-list">

                            {ServiceApi.map((val, index) => {
                                return (
                                    <li className="service-item" key={index}>
                                        <div className="service-item-icon">
                                            <ion-icon name="checkmark-outline">
                                                <CheckCircleOutlineIcon />
                                            </ion-icon>
                                        </div>

                                        <h3 className="h3 service-item-title">{val.service_item_title}</h3>
                                    </li>

                                )
                            })}

                        </ul>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services