import React, {useContext} from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    const auth = useContext()

    const logoutHandler = () => {
        event.preventDefault()
        auth.logout()
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Sass</NavLink></li>
                    <li><NavLink to="/links">Components</NavLink></li>
                    <li><a onClick={logoutHandler} href="/">Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}
