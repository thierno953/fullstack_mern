import React from 'react';
import './blog.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Blog = () => {
  const { blogs } = useSelector((state) => state.blog);

  return (
    <>
      <section className="blog" id="blog">
        <div className="container">

          <p className="section-subtitle">Latest News</p>

          <h2 className="h2 section-title">Our latest articles & resources</h2>

          <ul className="blog-list">
            {blogs.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/blog/${item.id}`}>
                    <div className="blog-card">

                      <figure className="blog-banner">

                        <img src={item.image} alt="How is technology working with new things?"
                          loading="lazy" className="w-100" />

                      </figure>

                      <div className="blog-content">

                        <ul className="blog-meta-list">

                          <li className="blog-meta-item">
                            <a href="#" className="blog-meta-link">{item.name}</a>
                          </li>

                          <li className="blog-meta-item">
                            <ion-icon name="calendar-number-outline"><CalendarTodayIcon /></ion-icon>

                            <time className="blog-meta-time" datetime="2022-02-25">{item.date}</time>
                          </li>

                        </ul>

                        <h3 className="h3 blog-title">
                          <a href="#">{item.title}</a>
                        </h3>

                      </div>

                    </div>
                  </Link>
                </li>
              )
            })}

          </ul>
        </div>
      </section>
    </>
  )
}

export default Blog
