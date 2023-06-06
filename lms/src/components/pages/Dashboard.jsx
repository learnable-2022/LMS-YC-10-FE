import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from '../styles/Dashboard.module.css'
import { FaEye } from "react-icons/fa";
import CourseComp from '../images/courseComp.svg'
import CourseReg from '../images/courseReg.svg'
import CertEarn from '../images/certEarn.svg'
import Badge from '../images/badge.svg'
import PointsAcc from '../images/pointsAcc.svg'
import WebDevIcon from '../images/webDevIcon.svg'
import UxIcon from '../images/uxIcon.svg'
import PyIcon from '../images/pyIcon.svg'
import DataIcon from '../images/datasIcon.svg'
import Sn from '../images/sn.svg'
import Student from '../images/student.svg'
import SideBar from '../sideBar/SideBar.js'
function Dashboard(){
    // const [step, setStep] = useState(0);

    // let progress = step > 0 ? step / 4 : 0;
     let percentage = 30 //100 * progress;
    // let status = step > 0 ? (step < 4 ? "In Progress" : "Done") : "Stopped";
    return(
        <div className={styles.dashboard}>
            <div className={styles.sidebar}><SideBar /></div> 
            <div className={styles.dashboardMain}>
                <div className={styles.progressSummary}>
                    <div className={styles.pSumOne}>
                        <div className={styles.pSumOneHead}>
                            <img src={CourseComp} alt="" />
                            <p>Courses In Progress</p>
                        </div>
                        <div className={styles.pSumPro}>
                            <h2 className={styles.scoreOne}>15</h2>
                        </div>
                    </div>
                    <div className={styles.pSumOne}>
                        <div className={styles.pSumOneHead}>
                            <img src={CourseReg} alt="" />
                            <p>Courses Completed</p>
                        </div>
                        <div className={styles.pSumPro}>
                            <h2 className={styles.scoreTwo}>53</h2>
                        </div>
                    </div>
                    <div className={styles.pSumOne}>
                        <div className={styles.pSumOneHead}>
                            <img src={CertEarn} alt="" />
                            <p>Certificates Earned</p>
                        </div>
                        <div className={styles.pSumPro}>
                            <h2 className={styles.scoreThree}>30</h2>
                        </div>
                    </div>
                    <div className={styles.pSumOne}>
                        <div className={styles.pSumOneHead}>
                            <img src={Badge} alt="" />
                            <p>Badges</p>
                        </div>
                        <div className={styles.pSumPro}>
                            <h2 className={styles.scoreFour}>45</h2>
                        </div>
                    </div>
                    <div className={styles.pSumOne}>
                        <div className={styles.pSumOneHead}>
                            <img src={PointsAcc} alt="" />
                            <p>Points Accumulated</p>
                        </div>
                        <div className={styles.pSumPro}>
                            <h2 className={styles.scoreFive}>115</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.heroWrapper}>
                    <div className={styles.learningGroupSchedule}>
                        <div className={styles.learnGroup}>
                            <div className={styles.learn}>
                                <div className={styles.lText}>
                                    <div className={styles.l}>
                                        <p>My Learning</p>
                                    </div>
                                    <button>See All</button>
                                </div>
                                <div className={styles.lContent}>
                                    <div className={styles.conText}>
                                        <h5>Style With CSS</h5>
                                        <p>Chapter 1</p>
                                    </div>
                                    <div className={styles.progressContainer}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                    </div>
                                </div>
                                <div className={styles.lContent}>
                                    <div className={styles.conText}>
                                        <h5>Style With CSS</h5>
                                        <p>Chapter 1</p>
                                    </div>
                                    <div className={styles.progressContainer}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                    </div>
                                </div>
                                <div className={styles.lContent}>
                                    <div className={styles.conText}>
                                        <h5>Style With CSS</h5>
                                        <p>Chapter 1</p>
                                    </div>
                                    <div className={styles.progressContainer}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} style={{font:"30px"}} />
                                    </div>
                                </div>
                                <div className={styles.lContent}>
                                    <div className={styles.conText}>
                                        <h5>Style With CSS</h5>
                                        <p>Chapter 1</p>
                                    </div>
                                    <div className={styles.progressContainer}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} style={{font:"30px"}} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.group}>
                                <div className={styles.lText}>
                                    <div className={styles.l}>
                                        <p>My Groups</p>
                                    </div>
                                    <button>See All</button>
                                </div>
                                <div className={styles.gContent}>
                                    <div className={styles.groupImg}>
                                        <img src={WebDevIcon} alt="" />
                                    </div>
                                    <div className={styles.gDetail}>
                                        <h4>Web Development</h4>
                                        <p><span className={styles.icon}><i><FaEye style={{width:"12px"}} /></i> Public</span><div className={styles.vl}></div> <span><i><FaEye style={{width:"12px"}} /></i>
                                        45 members</span></p>
                                    </div>
                                </div>
                                <div className={styles.gContent}>
                                    <div className={styles.groupImg}>
                                        <img src={UxIcon} alt="" />
                                    </div>
                                    <div className={styles.gDetail}>
                                        <h4>User Experience</h4>
                                        <p><span className={styles.icon}><i><FaEye style={{width:"12px"}} /></i> Public</span><div className={styles.vl}></div> <span><i><FaEye style={{width:"12px"}} /></i>
                                        45 members</span></p>
                                    </div>
                                </div>
                                <div className={styles.gContent}>
                                    <div className={styles.groupImg}>
                                        <img src={PyIcon} alt="" />
                                    </div>
                                    <div className={styles.gDetail}>
                                        <h4>Python Group 5</h4>
                                        <p><span className={styles.icon}><i><FaEye style={{width:"12px"}} /></i> Public</span><div className={styles.vl}></div> <span><i><FaEye style={{width:"12px"}} /></i>
                                        45 members</span></p>
                                    </div>
                                </div>
                                <div className={styles.gContent}>
                                    <div className={styles.groupImg}>
                                        <img src={DataIcon} alt="" />
                                    </div>
                                    <div className={styles.gDetail}>
                                        <h4>Data Structures</h4>
                                        <p><span className={styles.icon}><i><FaEye style={{width:"12px"}} /></i> Public</span><div className={styles.vl}></div> <span><i><FaEye style={{width:"12px"}} /></i>
                                        45 members</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.schedule}>
                            <div className={styles.scheduleHeader}>
                                <div className={styles.textButton}>
                                    <h4>Today’s Schedule</h4>
                                    <button>See All</button>
                                </div>
                                <div className={styles.date}>24 May 2023</div>
                            </div>
                            <table>
                                <tr>
                                    <th className={styles.left}>Course Title</th>
                                    <th className={styles.center}>Duration</th>
                                    <th className={styles.right}>Instructors</th>
                                </tr>
                                <tr>
                                    <td className={styles.left}>
                                        Basics Of HTML (Webinar) <br />
                                        <span>Web Development</span>
                                    </td>
                                    <td className={styles.center}>8:00 AM- 10:00AM</td>
                                    <td className={styles.right}>Germany</td>
                                </tr>
                                <tr>
                                    <td className={styles.left}>
                                        Javascript (Webinar) <br />
                                        <span>Web Development</span>
                                    </td>
                                    <td className={styles.center}>10:00 AM- 12:00PM</td>
                                    <td className={styles.right}>Germany</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className={styles.leaderboard}>
                        <div className={styles.leaderboardHeaderWrapper}>
                            <div className={styles.leaderboardHeader}>
                                <h2>Leaderboard</h2>
                                <button>View</button>
                            </div>
                            <div className={styles.positionPoint}>
                                <div className={styles.position}>
                                    <h1>26th</h1>
                                    <p>Place</p>
                                </div>
                                <div className={styles.point}>
                                    <CircularProgressbar value={60} text={`${115}`} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.score}>
                            <div className={styles.scoreHeader}>
                                <div className={styles.student}>
                                    <img src={Sn} alt="" />
                                    <p>Student</p>
                                </div>
                                <p>Total Points</p>
                            </div>
                            <div className={styles.studentScore}>
                                <div className={styles.sn}><p>01</p></div>
                                <div className={styles.imgName}>
                                    <img src={Student} alt="" />
                                    <p>David Johnson</p>
                                </div>
                                <div className={styles.studentpoint}>
                                    <p>389</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;