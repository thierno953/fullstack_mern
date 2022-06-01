
import React, { useState } from "react";
import "./header.css"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 180);
    });

    return (
        <>
            <header className="header">
                <div className="container flex">
                    <div className="logo">
                        <h1>THB</h1>
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
                                <Link to="/features">Features</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>

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