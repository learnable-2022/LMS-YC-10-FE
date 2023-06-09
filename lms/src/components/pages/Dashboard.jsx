import React from "react";
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
import LmsHeader from "../lmsHeader/LmsHeader";


function Dashboard(){
    // const [step, setStep] = useState(0);

    // let progress = step > 0 ? step / 4 : 0;
     let percentage = 30 //100 * progress;
    // let status = step > 0 ? (step < 4 ? "In Progress" : "Done") : "Stopped";
    return(
        <div className={styles.progressMainWrapper}>
            <div className={styles.lmsHeader}>
                <LmsHeader page="Dashboard" />
            </div>
            <div className={styles.dashboardBodyWrapper}>
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
            <div className={styles.bodyWrapper}>
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

                    </div>
                </div>
                <div className={styles.leaderboard}>

                </div>
            </div>
            </div>
        </div>
    )
}
export default Dashboard;