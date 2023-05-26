import React, { useState } from "react";
import "./Main.css"

import Header from "./Header/Header"
import { MainData } from "./MainData";


import {Pichart} from "./Bars/Pichart"
import Progress from "./Bars/progress"

import { FaUser } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"
import { RiPercentFill } from "react-icons/ri"


import { TbArrowsCross } from "react-icons/tb"
import { AiFillStepBackward } from "react-icons/ai"
import { BsFillPlayCircleFill } from "react-icons/bs"
import { AiFillStepForward } from "react-icons/ai"
import { TbRepeat } from "react-icons/tb"

function Main() {

    const [selected, setSelected] = useState(0);
    const Length = MainData.length;

    return (
        <div className="Main">
            <Header />

            <div className="container">
                <div className="left-container">
                    <div className="left-container-item">
                        <img src={MainData[selected].poster} alt="poster" />
                        <div>
                            <span>{MainData[selected].title}</span>
                            <span>{MainData[selected].singer}</span>
                        </div>
                    </div>
                </div>

                <div className="right-container">
                    <div className="top-rc">
                        <div className="card">
                            <div className="card-item">
                                <span>{MainData[selected].unique}</span>
                                <span>Unique Plays</span>
                            </div>
                            <div><FaUser /></div>
                        </div>
                        <div className="card">
                            <div className="card-item">
                                <span>{MainData[selected].total}</span>
                                <span>Total Plays</span>
                            </div>
                            <div><FaUsers /></div>
                        </div>
                        <div className="card">
                            <div className="card-item">
                                <span>{MainData[selected].complete}</span>
                                <span>Competion Rate</span>
                            </div>
                            <div><RiPercentFill /></div>
                        </div>
                    </div>

                    <div className="bottom-rc">

                        <div className="brcl bottom-rc-l">
                           <div className="Pie-container">
                           <Pichart 
                           unique = {MainData[selected].unique}
                            total = {MainData[selected].total}
                           />
                           </div>
                        </div>

                        <div className="brcl bottom-rc-r">
                            <div className="progress-container">
                            <span>Completion Rate</span>
                            <Progress value= {MainData[selected].complete}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="Footer">
                <div className="footer-item">
                    <TbArrowsCross className="fotter-icon" />
                    <AiFillStepBackward
                        onClick={() => {
                            selected === 0 ? setSelected(Length - 1) : setSelected(selected - 1);
                        }}
                        className="fotter-icon" />
                    <BsFillPlayCircleFill className="fotter-icon" />
                    <AiFillStepForward
                        onClick={() => {
                            selected === (Length - 1) ? setSelected(0) : setSelected(selected + 1);
                        }}
                        className="fotter-icon" />
                    <TbRepeat className="fotter-icon" />
                </div>
            </div>

        </div>
    )
}

export default Main;