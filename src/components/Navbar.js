import React from "react";
import { Routes, NavLink, Route} from "react-router-dom";



export default function Navbar(props){


    return(
        <>
        <nav className="navbar">
            <NavLink to="/" className="nav-myname">
                Marc
            </NavLink>
            <ul>
                <li className="nav-item">
                    <NavLink exact to="/about" activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/projects" activeClassName="active">
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    );
}