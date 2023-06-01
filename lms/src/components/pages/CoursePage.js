import React from "react";
import styles from "../styles/CoursePage.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsChatRight } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import profileImage from "../images/Mask group.png";
import CenterCoursePage from "./centerCoursepage/CenterCoursePage";
import RightCoursePage from "./rightCoursePage/RightCoursePage";
import { Link } from "react-router-dom";



function CoursePage() {
return(
    <>
        <div>
            <div className={styles.courseHeaderWrapper}>
                <div className={styles.bodyWrapper}>
                    <div className={styles.courseHeader}>
                        <h1 className={styles.headerText}>Courses</h1>
                        <div className={styles.courseInputWrapper}>
                            <div className={styles.courseSearchInput}>
                                <i><CiSearch /></i>
                                <input type="search" placeholder="Search here..."/>
                            </div>
                            <div className={styles.headerIcons}>
                                <i><BsChatRight /></i>
                                <div className={styles.secondIconWrapper}>
                                    <i><FiBell /></i>
                                    <div className={styles.thirdIconWrapper}>
                                        <hr/>
                                        <div className={styles.fourthWrapper}>
                                            <img src={profileImage} alt="profile" />
                                            <div className={styles.userProfileWrapper}>
                                                <div className={styles.userProfile}>
                                                    <div>
                                                        <p className={styles.userProfileName}>Arjen Angel</p>
                                                        <div className={styles.userProfileDiv}>
                                                            <p>Learner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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