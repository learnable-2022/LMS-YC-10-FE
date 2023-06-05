import React from "react";
import styles from "../styles/CoursePage.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsChatRight } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import profileImage from "../images/Mask group.png";
import CenterCoursePage from "./asset/centerCoursePage/CenterCoursePage";
import RightCoursePage from "./asset/rightCoursePage/RightCoursePage";
import { Link } from "react-router-dom";
import LmsHeader from "../lmsHeader/LmsHeader";



function CoursePage() {
return(
    <>
    <div className={styles.coursePageWrapper}>
        <div className={styles.courseLmsHeader}>
            <LmsHeader />
        </div>
            <div className={styles.courseHeaderWrapper}>
                <div className={styles.bodyWrapper}>
                    <div>
                        <div className={styles.courseDirectory}>
                            <div>
                                <Link to="/learningpath">
                                    <p>Course</p>
                                    <i><IoIosArrowForward /></i>
                                </Link>
                            </div>
                            <div>
                                <Link to="/courses">
                                    <p>Select a course</p>
                                    <i><IoIosArrowForward /></i>
                                </Link>
                            </div>
                            <div>
                                <Link to="/coursepage" >
                                    <p className={styles.active}>UI/UX</p>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.courseBody}>
                            <div className={styles.centerCoursePage}>
                                <CenterCoursePage />
                            </div>
                            <div>
                                <RightCoursePage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
)
}
export default CoursePage;