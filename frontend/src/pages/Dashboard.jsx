import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteTour, getToursByUser } from "../redux/features/tourSlice";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from "react-router-dom";


const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userTours, loading } = useSelector((state) => ({
    ...state.tour,
  }));
  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getToursByUser(userId));
    }
  }, [dispatch, userId]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour ?")) {
      dispatch(deleteTour({ id, toast }));
    }
  };

  const excerpt = (str) => {
    if (str.length > 40) {
      str = str.substring(0, 40) + " ...";
    }
    return str;
  };

  return (
    <>
      <section className="blog" id="blog">
        <div className="container">
          {userTours.length === 0 && (
            <h2 className="section-title">No Persons available with the user: {user?.result?.name}</h2>
          )}
          {userTours.length > 0 && (
            <h2 className="h2 section-title">Dashboard: {user?.result?.name}</h2>
          )}
          <ul className="blog-list">
            {userTours &&
              userTours.map((item) => (
                <li key={item._id}>
                  <div className="blog-card">
                    <figure className="blog-banner">
                      <img src={item.imageFile} alt="How is technology working with new things?"
                        loading="lazy" className="w-100" />
                    </figure>
                    <div className="blog-content">
                      <ul className="blog-meta-list">
                        <li className="blog-meta-item">
                        <Link to={`/editTour/${item._id}`}>
                        <ion-icon name="calendar-number-outline"><EditIcon /></ion-icon>
                        </Link>
                        </li>
                        <li className="blog-meta-item" onClick={() => handleDelete(item._id)}>
                          <ion-icon name="calendar-number-outline"><DeleteIcon /></ion-icon>
                        </li>
                      </ul>
                      <h3 className="h3 blog-title">
                        <a href="#">{item.title}</a>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          {/* {tours.length > 0 && (
            <Pagination
              setCurrentPage={setCurrentPage}
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              dispatch={dispatch}
            />
          )} */}
        </div>
      </section>
    </>
  )
}

export default Dashboard
