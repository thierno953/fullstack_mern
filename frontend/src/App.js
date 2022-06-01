import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './components/blog/Blog';
import BlogDetail from './components/blog/BlogDetail';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './pages/auth/Login';
import Pages from './pages/Pages';

function App() {
  return (
    <BrowserRouter>
      <main>
        <article>
          <Header />
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </article>
      </main>
    </BrowserRouter>
  );
}

export default App;
