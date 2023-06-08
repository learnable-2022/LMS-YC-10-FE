import React from "react";
import styles from "../styles/OngoingCourse.module.css";
import { Link  } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ellipse from "../images/Ellipse 34.png";
import LmsHeader from "../lmsHeader/LmsHeader";
// import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";




const OngoingCourse = (props) => {
    // const {src} = props.data;
    // console.log("i was clicked")
    // console.log(src)
    console.log(props.id)
return(
    <>
        <div className={styles.ongoingCourseWrapper}>
            <div>
                <LmsHeader  page='Course' />
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
                       <p>UI/UX</p>
                        <i><IoIosArrowForward /></i>
                    </Link>
                </div>
                <div>
                    <p className={styles.active}>Introduction to Figma</p>
                </div>
                </div>
            </div>
            <div className={styles.bodyWrapper}>
                <div className={styles.videoWrapper}>
                    <div className={styles.tutorWrapper}>
                        <img src={ellipse} alt="tutor" />
                        <div>
                            <h3>Mrs. Grace Benson</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                    <div>
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
                        {/* <ol><div>
                            <h4>Introduction to Figma </h4><i><RiArrowUpSLine /></i>
                        </div>
                            <li>Editor Interface </li>
                            <li>Menu Interface</li>
                            <li>Shapes</li>
                            <li>Styles</li>
                            <li>Plugins</li>
                        </ol>
                        <ol><div>
                            <h4>Colors</h4> <i><RiArrowDownSLine /></i>
                            </div>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                        <ol><div>
                            <h4>Typography</h4><i><RiArrowDownSLine /></i>
                            </div>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                        <ol><div>
                            <h4>Components</h4> <i><RiArrowDownSLine /></i>
                            </div>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                        <ol><div>
                            <h4></h4> <i><RiArrowDownSLine /></i>
                        </div>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                        <ol><div>
                            <h4>UI Elements</h4> <i><RiArrowDownSLine /></i>
                        </div>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                        <ol><div>
                            <h4>Wireframes</h4> <i><RiArrowDownSLine /></i>
                        </div>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                        <ol><div><h4>Prototyping</h4> <i><RiArrowDownSLine/></i></div>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                        <ol><div>
                                <h4>Exams</h4> <i><RiArrowDownSLine /></i>
                            </div>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol> */}
                    </div>
                </div>
            </div>

            {/* <p>{id}</p>
            <p>{src}</p> */}

        </div>
    </>
)
}
export default OngoingCourse;