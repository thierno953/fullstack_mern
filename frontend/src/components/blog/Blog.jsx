import React, { useEffect } from 'react';
import './blog.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getTours, setCurrentPage } from '../../redux/features/tourSlice';
import CardTour from './CardTour';
import Pagination from '../../pages/pagination/Pagination';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Blog = () => {
  const { tours, loading, currentPage, numberOfPages } = useSelector(
    (state) => ({ ...state.tour })
  );
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  const location = useLocation();

  useEffect(() => {
    dispatch(getTours(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      <section className="blog" id="blog">
        <div className="container">
          {tours.length === 0 && location.pathname !== "/" && (
            <h2 className="section-title"> No Tours Found</h2>
          )}
          {tours.length === 0 && location.pathname !== "/" && (
            <h2 className="h2 section-title"> We couldn't find any matches for "{searchQuery}"</h2>
          )}
          <ul className="blog-list">
            {tours && tours.map((item, index) => (
              <li>
                <CardTour key={index} item={item} />
              </li>
            ))}
          </ul>
          {tours.length > 0 && (
            <Pagination
              setCurrentPage={setCurrentPage}
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              dispatch={dispatch}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default Blog
