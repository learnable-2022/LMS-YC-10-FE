import React from "react";
import card from "../../images/card.png";
import { IoIosHeartEmpty } from "react-icons/io";
import {  BsPlayCircleFill, BsAwardFill } from "react-icons/bs";
import { TbArrowBigDown } from "react-icons/tb";
import { FiSmartphone } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { AiOutlineHdd } from "react-icons/ai";
import styles from "./Card.module.css";



function CourseCard(){
return(
    <>
        <div>
            <div className={styles.cardWrapper}>
                <img src={card} alt="card" />
                <div className={styles.cardTextWrapper}>
                    <p className={styles.cardText}>Advance/master course in UI/UX design</p>
                    <p className={styles.cardTextAmount}>$100.00</p>
                </div>
                <div className={styles.cardBtnWrapper}>
                    <button>BUY COURSE</button>
                    <i><IoIosHeartEmpty /></i>
                </div>
                <p className={styles.cardTextType}>This course includes</p>
                <div className={styles.description}>
                    <div className={styles.descriptionWrapper}>
                        <i><BsPlayCircleFill /></i>
                        <p>65 hours on-demand videos</p>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <i><TbArrowBigDown /></i>
                        <p>49 Downloadable resources</p>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <i><FiSmartphone /></i>
                        <p>Access on all devices and TV</p>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <i><AiOutlineHdd /></i>
                        <p>8 real-life project building</p>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <i><GrNotes /></i>
                        <p>86 articles</p>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <i><BsAwardFill /></i>
                        <p>Certificate of completion</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default CourseCard;