import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navContainer">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Create</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/read">Read</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/update">Update</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/delete">Delete</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
