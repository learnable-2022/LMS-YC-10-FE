import React from "react";
import styles from "../styles/OngoingCourse.module.css";
import { Link  } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ellipse from "../images/Ellipse 34.png";
import LmsHeader from "../lmsHeader/LmsHeader";




function OngoingCourse (props) {
    // const {src} = props.data;
    // console.log("i was clicked")
    // console.log(src)
    console.log(props.id)
return(
    <>                
        <div className={styles.ongoingCourse}>
            <div className={styles.ongoingCourseHeader}>
                <LmsHeader />
            </div>
            <div className={styles.ongoingCourseWrapper}>
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
                            <p>UI/UX</p>
                                <i><IoIosArrowForward /></i>
                            </Link>
                        </div>
                        <div>
                            <p className={styles.active}>Introduction to Figma</p>
                        </div>
                    </div>
                </div>
                <div className={styles.courseBodyWrapper}>
                    <div className={styles.videoWrapper}>
                        <div className={styles.tutorWrapper}>
                            <img src={ellipse} alt="tutor" />
                            <div>
                                <h3>Mrs. Grace Benson</h3>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className={styles.courseVideoWrapper}>
                            <video width="600px" height="350px" key={props.id} controls>
                                <source src={props.src} type='video/mp4' />
                            </video>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.btn1}>About</button>
                            <button className={styles.btn2}>Quiz</button>
                            <button className={styles.btn3}>Assignment</button>
                        </div>
                        <div className={styles.extraSource}>
                            <h3>About this lesson</h3>
                            <p>Creating a Style guide in figma is a great way of establishing consistency in your 
                                visual language across different devices of your design. </p>
                            <h3>Useful Links</h3>
                            <a href="https://designcode.io/figma-handbook-color-and-text-styles-in-figma/">
                                https://designcode.io/figma-handbook-color-and-text-styles-in-figma/</a>
                        </div>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressBarHeader}>
                            <hr />
                            <h3>Course Outline</h3>
                        </div>
                        <div>
                            <details>
                                <summary>Introduction to Figma</summary>
                                <ol>
                                    <li>Editor Interface</li>
                                    <li>Menu Interface</li>
                                    <li>Shapes</li>
                                    <li>Styles</li>
                                    <li>Plugins</li>
                                </ol>
                            </details>
                            <details>
                                <summary>Colors</summary>
                                <ol>
                                    <li>Editor Interface</li>
                                    <li>Menu Interface</li>
                                    <li>Shapes</li>
                                    <li>Styles</li>
                                    <li>Plugins</li>
                                </ol>
                            </details>
                            <details>
                                <summary>Typography</summary>
                                <ol>
                                    <li>Editor Interface</li>
                                    <li>Menu Interface</li>
                                    <li>Shapes</li>
                                    <li>Styles</li>
                                    <li>Plugins</li>
                                </ol>
                            </details>
                            <details>
                                <summary>Components</summary>
                                <ol>
                                    <li>Editor Interface</li>
                                    <li>Menu Interface</li>
                                    <li>Shapes</li>
                                    <li>Styles</li>
                                    <li>Plugins</li>
                                </ol>
                            </details>
                            <details>
                                <summary>Grids</summary>
                                <ol>
                                    <li>Editor Interface</li>
                                    <li>Menu Interface</li>
                                    <li>Shapes</li>
                                    <li>Styles</li>
                                    <li>Plugins</li>
                                </ol>
                            </details>
                            <details>
                                <summary>UI Elements</summary>
                                <ol>
                                    <li>Editor Interface</li>
                                    <li>Menu Interface</li>
                                    <li>Shapes</li>
                                    <li>Styles</li>
                                    <li>Plugins</li>
                                </ol>
                            </details>
                            <details>
                                <summary>Wireframes</summary>
                                <ol>
                                    <li>Editor Interface</li>
                                    <li>Menu Interface</li>
                                    <li>Shapes</li>
                                    <li>Styles</li>
                                    <li>Plugins</li>
                                </ol>
                            </details>
                            <details>
                                <summary>Prototyping</summary>
                                <ol>
                                    <li>Editor Interface</li>
                                    <li>Menu Interface</li>
                                    <li>Shapes</li>
                                    <li>Styles</li>
                                    <li>Plugins</li>
                                </ol>
                            </details>
                            <details>
                                <summary>Exams</summary>
                                <ol>
                                    <li>Editor Interface</li>
                                    <li>Menu Interface</li>
                                    <li>Shapes</li>
                                    <li>Styles</li>
                                    <li>Plugins</li>
                                </ol>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default OngoingCourse;