import React from "react";
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
import { HiOutlineChartSquareBar } from "react-icons/hi";
import imaget1 from "../images/imaget1.png";
import imaget2 from "../images/imaget2.png";
import imaget3 from "../images/imaget3.png";
import imaget4 from "../images/imaget4.png";
import imaget5 from "../images/imaget5.png";
import imaget6 from "../images/imaget6.png";
import instructor from "../images/InstructorImg.png";
// import axios from "axios";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// ,{ useState, useEffect } 

function Dashboard(){

     let percentage = 10 //100 * progress;
     let basics = 75;
     let UI = 42;
     let python = 43;
     let points = 115;
     let point = 40;
    
    //  const [items, setItems] = useState([]);

    // // let token = localStorage.getItem("token")
    // // let studentId = localStorage.getItem("studentId")
    //  useEffect(() => {
    //    const url = `https://kidtots.onrender.com/student/leaderboard`;
    //    axios
    //      .get(url, {
    //        headers: {
    //         // "Authorization": `Bearer` + token,
    //          "Content-Type": "application/json",
    //        },
    //      })
    //      .then((res) => {
    //         console.log(res)
    //        const datas = res.data.data;
    //        setItems(datas);
    //      })
    //      .catch((error) => {
    //        if (error.response.status === 400) {
    //          // Handle error
    //        }
    //      });
    //  }, []);

    //  console.log(items)
   
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
                <div className={styles.firstSection}>
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
                                    <CircularProgressbar value={percentage} 
                                    text={`${percentage}%`} 
                                    styles={{
                                        path: {
                                          stroke: '#FF1F11',
                                        },
                                        text: {
                                            fill:  'black',
                                        },
                                      }}/>
                                </div>
                            </div>
                            <div className={styles.lContent}>
                                <div className={styles.conText}>
                                    <h5>Basics Of HTML</h5>
                                    <p>Chapter 2</p>
                                </div>
                                <div className={styles.progressContainer}>
                                    <CircularProgressbar value={basics} 
                                    text={`${basics}%`} 
                                    styles={{
                                        path: {
                                            stroke: "#40ec7e" 
                                    },
                                    text: {
                                        fill:  'black',
                                    },}}/>
                                </div>
                            </div>
                            <div className={styles.lContent}>
                                <div className={styles.conText}>
                                    <h5>UI/UX Design</h5>
                                    <p>Chapter 3</p>
                                </div>
                                <div className={styles.progressContainer}>
                                    <CircularProgressbar value={UI} 
                                    text={`${UI}%`} 
                                    styles={{
                                        path: {
                                            stroke: "#E91E63"
                                    },
                                    text: {
                                        fill:  'black',
                                    },}} />
                                </div>
                            </div>
                            <div className={styles.lContent}>
                                <div className={styles.conText}>
                                    <h5>Python Basics</h5>
                                    <p>Chapter 4</p>
                                </div>
                                <div className={styles.progressContainer}>
                                    <CircularProgressbar value={python} 
                                    text={`${python}%`}  
                                    styles={{
                                        path: {
                                            stroke: "#40ec7e" 
                                    },
                                    text: {
                                        fill:  'black',
                                    },}} />
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
                                    <div>
                                        <span className={styles.icon}>
                                            <i><FaEye style={{width:"12px"}} /></i>
                                             Public
                                        </span>
                                            <div className={styles.vl}>
                                            </div> 
                                        <span>
                                            <i><FaEye style={{width:"12px"}} /></i>
                                            45 members
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gContent}>
                                <div className={styles.groupImg}>
                                    <img src={UxIcon} alt="" />
                                </div>
                                <div className={styles.gDetail}>
                                    <h4>User Experience</h4>
                                    <div>
                                        <span className={styles.icon}>
                                            <i><FaEye style={{width:"12px"}} /></i>
                                             Public
                                        </span>
                                        <div className={styles.vl}>
                                        </div> <span><i><FaEye style={{width:"12px"}} /></i>
                                            45 members</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gContent}>
                                <div className={styles.groupImg}>
                                    <img src={PyIcon} alt="" />
                                </div>
                                <div className={styles.gDetail}>
                                    <h4>Python Group 5</h4>
                                    <div>
                                        <span className={styles.icon}>
                                            <i><FaEye style={{width:"12px"}} /></i> 
                                            Public
                                        </span>
                                        <div className={styles.vl}>
                                        </div> 
                                        <span><i><FaEye style={{width:"12px"}} /></i>
                                            45 members
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gContent}>
                                <div className={styles.groupImg}>
                                    <img src={DataIcon} alt="" />
                                </div>
                                <div className={styles.gDetail}>
                                    <h4>Data Structures</h4>
                                    <div>
                                        <span className={styles.icon}>
                                            <i><FaEye style={{width:"12px"}} /></i> 
                                            Public
                                        </span>
                                        <div className={styles.vl}>
                                        </div> 
                                        <span><i><FaEye style={{width:"12px"}} /></i>
                                            45 members
                                        </span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.leaderBoardWrapper}>
                    <div className={styles.leaderBoard}>
                        <div className={styles.leaderBoardHeader}>
                            <h4>Leaderboard</h4>
                            <button>View</button>
                        </div>
                        <div className={styles.leaderBoardProgressBar}>
                            <span>
                                <h3>26th</h3>
                                <p>Place</p>
                            </span>
                            <div className={styles.leaderBoardPoints}>
                                <CircularProgressbar value={point} 
                                text={`${points} Points`} 
                                styles={{
                                path: {
                                    stroke: "#EC407A" 
                                },
                                text: {
                                    fill:  '#ffffff',
                                    fontSize: "16px",
                                    fontFamily: 'mada',
                                    textAlign: "center",
                                },
                                root: {
                                    width: '100px',
                                  },
                                }}
                              />
                            </div>
                        </div>
                        <div className={styles.leaderBoardTags}>
                            <i><HiOutlineChartSquareBar /></i>
                            <div className={styles.leaderBoardPart}>
                                <p>Student</p>
                                <p>Total Points</p>
                            </div>
                        </div>
                        <div className={styles.overflow}>
                            <div className={styles.studentBarWrapper}>
                            <div className={styles.studentBar}>
                                <p>01</p>
                                <div className={styles.image}>
                                <img src={imaget1} alt=""/>
                                <div className={styles.name}>
                                <p>David Johnson</p>
                                <p>389</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className={styles.studentBarWrapper}>
                            <div className={styles.studentBar}>
                                <p>02</p>
                                <div className={styles.image}>
                                <img src={imaget2} alt=""/>
                                <div className={styles.name}>
                                <p>Isabella Cooper</p>
                                <p>350</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className={styles.studentBarWrapper}>
                            <div className={styles.studentBar}>
                                <p>03</p>
                                <div className={styles.image}>
                                <img src={imaget3} alt=""/>
                                <div className={styles.name}>
                                <p>Mario Lewis</p>
                                <p>189</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className={styles.studentBarWrapper}>
                            <div className={styles.studentBar}>
                                <p>04</p>
                                <div className={styles.image}>
                                <img src={imaget4} alt=""/>
                                <div className={styles.name}>
                                <p>Jerome Boateng</p>
                                <p>135</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className={styles.studentBarWrapper}>
                            <div className={styles.studentBar}>
                                <p>05</p>
                                <div className={styles.image}>
                                <img src={imaget5} alt=""/>
                                <div className={styles.name}>
                                <p>You</p>
                                <p>115</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className={styles.studentBarWrapper}>
                            <div className={styles.studentBar}>
                                <p>06</p>
                                <div className={styles.image}>
                                <img src={imaget6} alt=""/>
                                <div className={styles.name}>
                                <p>Ariana Carla</p>
                                <p>109</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.scheduleWrap}>
                <div className={styles.scheduleHeader}>
                    <div>
                    <h4>Today's Schedule</h4>
                    <div className={styles.scheduleB}>
                        <button>See all</button>
                    </div>
                    </div>
                    <p>24 May 2023</p>
                </div>
                <div className={styles.scheduleT}>
                        <p>Course Title</p>
                        <div className={styles.scheduleTi}>
                            <p>Duration</p>
                            <div className={styles.scheduleTit}>
                                <p>Instructors</p>
                            </div>
                        </div>
                </div>
                <div className={styles.courseName}>
                    <span>
                        <h5>Basics Of HTML (Webinar)</h5>
                        <p>Web Development</p>
                    </span>
                    <div className={styles.courseTime}>
                        <p>8:00 AM - 10: 00 AM</p>
                        <div className={styles.courseImage}>
                            <img src={instructor} alt="" />
                            <img src={instructor} alt="" />
                            <img src={instructor} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.courseName}>
                    <span>
                        <h5>Javascript (Webinar)</h5>
                        <p>Web Development</p>
                    </span>
                    <div className={styles.courseTime}>
                        <p>10:00 AM - 12: 00 PM</p>
                        <div className={styles.courseImage}>
                            <img src={instructor} alt="" />
                            <img src={instructor} alt="" />
                            <img src={instructor} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* <ProgressBar progress={0.75} /> */}
            {/* <div className={styles.progressbarr}>
            <div className={styles.progresss}></div>
            </div>
            <div className={styles.progressBbar}>
            <div className={styles.progressbarfill}></div>
        <div className={styles.progressbarrtext}>0%</div>
            </div> */}

        </div>
    )
}
export default Dashboard;