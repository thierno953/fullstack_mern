import React, { useState } from "react";
import "./header.css"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { setLogout } from "../../redux/features/authSlice";
import { searchTours } from "../../redux/features/tourSlice";


const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const { user } = useSelector((state) => ({ ...state.auth }));
    const navigate = useNavigate();
    const token = user?.token;

    if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
            dispatch(setLogout());
        }
    }

    const handleLogout = () => {
        dispatch(setLogout());
    };

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 180);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            dispatch(searchTours(search));
            navigate(`/tours/search?searchQuery=${search}`);
            setSearch("");
        } else {
            navigate("/");
        }
    };

    return (
        <>
            <header className="header">
                <div className="container flex">
                    <div className="logo">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder='Search Blog' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </form>
                    </div>
                    <div className="nav">
                        <ul
                            className={sidebar ? "nav-links-sidebar" : "nav-links"}
                            onClick={() => setSidebar(false)}
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/tours/search">Blog</Link>
                            </li>
                            <li>
                                {user?.result?._id && (
                                    <>{user?.result?.name}</>
                                )}
                            </li>

                            {user?.result?._id && (
                                <>
                                    <li><Link to="/addTour">AddPosts</Link></li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                </>
                            )}
                            {user?.result?._id ? (
                                <li>
                                    <Link to="/login" onClick={() => handleLogout()}>Logout</Link>
                                </li>
                            ) : (
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <button
                        className="navbar-items-icon"
                        onClick={() => setSidebar(!sidebar)}
                    >
                        {sidebar ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;