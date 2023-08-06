import React from "react";
import '../styles/Nav.scss'
import {
    NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/">Bài 1</NavLink>
                <NavLink to="/bai2">Bài 2</NavLink>
                <NavLink to="/bai3">Bài 3</NavLink>
                <NavLink to="/bai4">Bài 4</NavLink>
            </div>
        )
    }
}

export default Nav;