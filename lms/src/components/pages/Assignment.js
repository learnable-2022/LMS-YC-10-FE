import React from "react";
import styles from "../styles/Assignment.module.css";
import LmsHeader from "../lmsHeader/LmsHeader";
import ellipse from "../images/Ellipse 34.png";
import { RiErrorWarningLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";



function Assignment(){
return(
    <>
        <div className={styles.assignment}>
            <div>
                <LmsHeader />
            </div>
            <div className={styles.assignmentBodyWrapper}>
                <div>
                    <div className={styles.tutorWrapper}>
                        <img src={ellipse} alt="tutor" />
                        <div>
                            <h3>Mrs. Grace Benson</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={styles.taskWrapper}>
                        <hr />
                        <div className={styles.taskText}>
                            <h4>Design A Login Page For Either A Website Or An Application</h4>
                            <div>
                                <p>Deadline: 5/6/2023</p>
                                <div>
                                    <p>Difficulty</p>
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div>
                                    <p>Retakes</p>
                                    <p><span>1</span>/3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Details</h4>
                        <ol>When doing design make sure to pay attention to the following:
                            <li>To your spacing, colors and the typography you use.</li>
                            <li>To the Logo</li>
                            <li>The account identification</li>
                            <li>The title on the login page</li>
                            <li>The password</li>
                            <li>Link to reset password</li>
                            <li>Link to sign up</li>
                        </ol>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>2<span>/4</span></p>
                            </div>
                            <h6>Completed Assignments</h6>
                        </div>
                        <div>
                            <div>
                                <p>75%</p>
                            </div>
                            <h6>Average Class Score</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <i><RiErrorWarningLine /></i>
                    <p>After the deadline, it will be impossible to get 
                        a maximum score. submit your assignment on time.</p>
                </div>
                <div>
                    <h4>Resources</h4>
                    <div>
                        <div>
                            <p>Designing a user-friendly login</p>
                            <i><FiDownload /></i>
                        </div>
                        <div>
                            <p>Designng UX login form and process</p>
                            <i><FiDownload /></i>
                        </div>
                    </div>
                    <div>
                        <hr />
                        <div>
                            <h5>Doing Assignment</h5>
                            <p>Retakes <span>1</span>/3</p>
                        </div>
                    </div>
                    <textarea placeholder="Type Answer"></textarea>
                </div>
            </div>
        </div>
    </>
)
}
export default Assignment