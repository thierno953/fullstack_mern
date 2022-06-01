import React from 'react'
import './blogDetail.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { getBlog } from '../../redux/features/blogSlice';

const BlogDetail = () => {
  const { blog } = useSelector((state) => state.blog);

  const dispatch = useDispatch();


  const { id } = useParams();

  useEffect(() => {
    dispatch(getBlog(id));

  }, [id, dispatch]);

  return (
    <>
      <section className="blogDetail">
        <div className="container">

          <p className="section-subtitle">Latest News</p>

          <h2 className="h2 section-title">Our latest articles & resources</h2>

          <ul className="blogDetail-list">
            <li>
              <div className="blogDetail-card">

                <figure className="blogDetail-banner">

                  <img src={blog.image} alt="How is technology working with new things?"
                    loading="lazy" className="w-100" />
                </figure>


                <div className="blogDetail-content">
                  <ul className="blog-meta-list">

                    <li className="blog-meta-item">
                      <a href="#" className="blog-meta-link">{blog.name}</a>
                    </li>

                    <li className="blog-meta-item">
                      <ion-icon name="calendar-number-outline"><CalendarTodayIcon /></ion-icon>

                      <time className="blog-meta-time" datetime="2022-02-25">{blog.date}</time>
                    </li>

                  </ul>

                  <h3 className="h3 blogDetail-title">
                    <a href="#">{blog.title}</a>
                  </h3>
                  <ul className="blogDetail-meta-list">
                    <li className="blogDetail-meta-item">
                      <p>{blog.description}</p>
                    </li>
                  </ul>
                  <h3 className="h3 blogDetail-title">
                    <a href="#">{blog.sub_card_title}</a>
                  </h3>
                  <ul className="blogDetail-meta-list">
                    <li className="blogDetail-meta-item">
                      <p>{blog.sub_description}</p>
                    </li>
                  </ul>
                </div>
              </div>

            </li>


          </ul>
        </div>
      </section>
    </>
  )
}

export default BlogDetail
