import React from 'react'
import { Link } from 'react-router-dom'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import moment from "moment";

const CardTour = ({ item }) => {
    return (
        <>
            <Link to={`/tour/${item._id}`}>
                <div className="blog-card">
                    <figure className="blog-banner">
                        <img src={item.imageFile} alt="How is technology working with new things?"
                            loading="lazy" className="w-100" />
                    </figure>
                    <div className="blog-content">
                        <ul className="blog-meta-list">
                            <li className="blog-meta-item">
                                <a href="#" className="blog-meta-link">{item.name}</a>
                            </li>
                            <li className="blog-meta-item">
                                <ion-icon name="calendar-number-outline"><AccessAlarmsIcon /></ion-icon>
                                <time className="blog-meta-time" datetime="2022-02-25"> {moment(item.createdAt).fromNow()}</time>
                            </li>
                        </ul>
                        <h3 className="h3 blog-title">
                            <a href="#">{item.title}</a>
                        </h3>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CardTour