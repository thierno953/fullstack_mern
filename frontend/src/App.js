import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Blog from './components/blog/Blog';
import BlogDetail from './components/blog/BlogDetail';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Pages from './pages/Pages';
import { setUser } from './redux/features/authSlice';
import AddEditTour from './pages/utility/AddEditTour';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './pages/PrivateRoute';
import Dashboard from './pages/Dashboard';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <BrowserRouter>
      <main>
        <article>
          <Header />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/tours/search" element={<Blog />} />
            <Route path="/tour/:id" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addTour" element={ <PrivateRoute><AddEditTour /></PrivateRoute> } />
            <Route path="/editTour/:id" element={ <PrivateRoute><AddEditTour /></PrivateRoute> } />
            <Route path="/dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute> } />
          </Routes>
          <Footer />
        </article>
      </main>
    </BrowserRouter>
  );
}

export default App;
