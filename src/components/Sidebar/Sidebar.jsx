import React from "react";
import "./Sidebar.css"

import logo from "../../assets/thecalmsleep.png"

import { upperSidebarData } from "./SidebarData"
import { lowerSidebarData } from "./SidebarData"

import { AiFillHome } from "react-icons/ai"
import { BiLibrary } from "react-icons/bi"
import { AiFillPlusSquare } from "react-icons/ai"
import { MdFavorite } from "react-icons/md"
import { AiFillLike } from "react-icons/ai"

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="side-top">
                <img src={logo} alt="logo" />
                <span>Calm Sleep</span>
            </div>
            <div className="side-bottom">
               <ul className="list">
                    {upperSidebarData.map((item,idx) => {
                        return (
                            <li className="list-item" key={idx}>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        )
                    })}
                </ul>

                <ul className="list">
                    {lowerSidebarData.map((item,idx) => {
                        return (
                            <li className="list-item" key={idx}>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        )
                    })}
                </ul>


            </div>
        </div>
    )
}

export default Sidebar;