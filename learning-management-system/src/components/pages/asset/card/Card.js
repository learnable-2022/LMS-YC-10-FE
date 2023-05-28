import React from "react";
import card from "../../../images/card.png";
import { IoIosHeartEmpty } from "react-icons/io";
import {  BsPlayCircleFill, BsAwardFill } from "react-icons/bs";
import { TbArrowBigDown } from "react-icons/tb";
import { FiSmartphone } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { AiOutlineHdd } from "react-icons/ai";




function CourseCard(){
return(
    <>
        <div>
            <div>
                <img src={card} alt="card" />
                <p>Advance/master course in UI/UX design</p>
                <p>$100.00</p>
                <div>
                    <button>BUY COURSE</button>
                    <i><IoIosHeartEmpty /></i>
                </div>
                <p>This course includes</p>
                <div>
                    <i><BsPlayCircleFill /></i>
                    <p>65 hours on-demand videos</p>
                </div>
                <div>
                    <i><TbArrowBigDown /></i>
                    <p>49 Downloadable resources</p>
                </div>
                <div>
                    <i><FiSmartphone /></i>
                    <p>Access on all devices and TV</p>
                </div>
                <div>
                    <i><AiOutlineHdd /></i>
                    <p>8 real-life project building</p>
                </div>
                <div>
                    <i><GrNotes /></i>
                    <p>86 articles</p>
                </div>
                <div>
                    <i><BsAwardFill /></i>
                    <p>Certificate of completion</p>
                </div>
            </div>
        </div>
    </>
)
}
export default CourseCard;