import React from "react";
import styles from "../styles/CoursePage.module.css";
import { IoIosArrowForward } from "react-icons/io";
import CenterCoursePage from "./centerCoursepage/CenterCoursePage";
import RightCoursePage from "./rightCoursePage/RightCoursePage";
import { Link } from "react-router-dom";
import LmsHeader from "../lmsHeader/LmsHeader";



function CoursePage() {
return(
    <>
        <div>
            <LmsHeader />
            <div className={styles.courseHeaderWrapper}>
                <div className={styles.bodyWrapper}>
                    <div>
                        <div className={styles.courseDirectory}>
                            <div>
                                <Link to="/">
                                    <p>Course</p>
                                    <i><IoIosArrowForward /></i>
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                    <p>Select a course</p>
                                    <i><IoIosArrowForward /></i>
                                </Link>
                            </div>
                            <div>
                                <Link to="/" >
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