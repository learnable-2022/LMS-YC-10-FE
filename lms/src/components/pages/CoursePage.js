import React from "react";
import styles from "../styles/CoursePage.module.css";
import { CiSearch } from "react-icons/ci";
import { BsChatRight } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import profileImage from "../images/Mask group.png";
import CenterCoursePage from "./asset/centerCoursePage/CenterCoursePage";
import RightCoursePage from "./asset/rightCoursePage/RightCoursePage";



function CoursePage() {
return(
    <>
        <div>
            <div className={styles.courseHeaderWrapper}>
                <div className={styles.bodyWrapper}>
                    <div className={styles.courseHeader}>
                        <h1>Courses</h1>
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
                                                {/* <i><RxPerson /></i> */}
                                                <img src={profileImage} alt="profile" />
                                                <div className={styles.userProfileWrapper}>
                                                    <div className={styles.userProfile}>
                                                        <div>
                                                            <p>Arjen Robben C.</p>
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
                        <div className={styles.courseBody}>
                            <div>
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