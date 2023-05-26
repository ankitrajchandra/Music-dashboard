import React, { useState } from "react";

import { MainData } from "../MainData"

import "./Footer.css"

import { TbArrowsCross } from "react-icons/tb"
import { AiFillStepBackward } from "react-icons/ai"
import { BsFillPlayCircleFill } from "react-icons/bs"
import { AiFillStepForward } from "react-icons/ai"
import { TbRepeat } from "react-icons/tb"

const [selected, setSelected] = useState(0);
const Length = MainData.length;


function Footer() {
    return (
        <div className="Footer">
            <div className="footer-item">
                <TbArrowsCross className="fotter-icon" />
                <AiFillStepBackward 
                
                className="fotter-icon" />
                <BsFillPlayCircleFill className="fotter-icon" />
                <AiFillStepForward className="fotter-icon" />
                <TbRepeat className="fotter-icon" />
            </div>
        </div>
    )
}

export default Footer
