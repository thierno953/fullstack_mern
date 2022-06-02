import React from 'react'
import './blogDetail.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from "moment";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { getRelatedTours, getTour } from '../../redux/features/tourSlice';
import RelatedTours from './RelatedTours';
import DisqusThread from './DisqusThread';


const BlogDetail = () => {
  const dispatch = useDispatch();
  const { tour, relatedTours } = useSelector((state) => ({ ...state.tour }));
  const { id } = useParams();
  // tags
  const tags = tour?.tags;

  useEffect(() => {
    tags && dispatch(getRelatedTours(tags))
  }, [dispatch, tags]);

  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
  }, [dispatch, id]);

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
                  <img src={tour.imageFile} alt={tour.title}
                    loading="lazy" className="w-100" />
                </figure>

                <div className="blogDetail-content">
                  <ul className="blog-meta-list">

                    <li className="blog-meta-item">
                      <a href="#" className="blog-meta-link">{tour.name}</a>
                    </li>

                    <li className="blog-meta-item">
                      <ion-icon name="calendar-number-outline"><AccessAlarmsIcon /></ion-icon>

                      <time className="blog-meta-time" datetime="2022-02-25"> {moment(tour.createdAt).fromNow()}</time>
                    </li>
                  </ul>
                  <ul className="blogDetail-meta-list">
                    <li>
                      {tour && tour.tags && tour.tags.map((item) => `#${item} `)}
                    </li>
                  </ul>
                  <h3 className="h3 blogDetail-title">
                    {tour.title}
                  </h3>
                  <ul className="blogDetail-meta-list">
                    <li className="blogDetail-meta-item">
                      {tour.description}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <RelatedTours relatedTours={relatedTours} tourId={id} />
          <DisqusThread id={id} title={tour.title} path={`/pserson/${id}`} style={{ fontSize: "14px" }} />

        </div>
      </section>

    </>
  )
}

export default BlogDetail
