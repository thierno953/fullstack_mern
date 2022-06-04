import React from 'react';
import { Link } from 'react-router-dom'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const blog = ({ relatedTours, tourId }) => {
  return (
    <>
      <section className="blog">
        <div className="container">
        {relatedTours.length > 1 && <h4 className="h2 section-title">Related</h4>}
          <ul className="blog-list">
            {relatedTours.filter((item) => item._id !== tourId).splice(0, 3).map((item) => (
              <>
                <li>
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
                            <ion-icon name="calendar-number-outline"><CalendarTodayIcon /></ion-icon>
                            <time className="blog-meta-time" datetime="2022-02-25">date</time>
                          </li>
                        </ul>
                        <h3 className="h3 blog-title">
                          <a href="#">{item.title}</a>
                        </h3>
                      </div>
                    </div>
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default blog