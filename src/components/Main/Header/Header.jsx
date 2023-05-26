import React from "react";
import "./Header.css"

import { FaBars } from "react-icons/fa"
import { FaUserAlt } from "react-icons/fa"

function Header() {
    return (
        <div className="Header">
            <div className="head header-l">
                < FaBars />
                <span>Dashboard</span>
            </div>
            <div className="head header-r">
                < FaUserAlt />
                <div>
                <span>Ankit Chandra</span>
                <span>Frontend Developer</span>
                </div>
            </div>
        </div>
    )
}

export default Header 