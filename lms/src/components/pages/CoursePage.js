import React from "react";
import mystyles from "../styles/CoursePage.module.css";
import { IoIosArrowForward } from "react-icons/io";
import CenterCoursePage from "../pages/centerCoursepage/CenterCoursePage";
import RightCoursePage from "../pages/rightCoursePage/RightCoursePage";
import { Link } from "react-router-dom";
import LmsHeader from "../lmsHeader/LmsHeader";



function CoursePage() {
return(
    <>
<<<<<<< HEAD
        <div>
            <LmsHeader page='Course' />
            
            <div className={styles.courseHeaderWrapper}>
                <div className={styles.bodyWrapper}>
=======
    <div className={mystyles.coursePageWrapper}>
        <div className={mystyles.courseLmsHeader}>
            <LmsHeader page="Courses"/>
        </div>
            <div className={mystyles.courseHeaderWrapper}>
                <div className={mystyles.bodyWrapper}>
>>>>>>> 633050b0e87437c28b52280e5d02f40c2f23d1b3
                    <div>
                        <div className={mystyles.courseDirectory}>
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
                                    <p className={mystyles.active}>UI/UX</p>
                                </Link>
                            </div>
                        </div>
                        <div className={mystyles.courseBody}>
                            <div className={mystyles.centerCoursePage}>
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