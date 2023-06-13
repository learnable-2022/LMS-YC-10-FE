import React, { useState } from 'react';
// import { TfiLock } from "react-icons/tfi";
import {  BsPlayCircleFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { CiStickyNote } from "react-icons/ci";
// import { RiArrowDownSLine } from "react-icons/ri";
import styles from "./CourseList.module.css";
import OngoingCourse  from "../OngoingCoursePage";
import { Link } from "react-router-dom";


export const UserContext = React.createContext();
export const Onclick = (src) => {
    console.log(src)

return(
    <UserContext.Provider value={src}>
        <OngoingCourse />
    </UserContext.Provider>
    // <Component id={Component.id} src={Component.src} />
)
    // <OngoingCourse id={id} src={src} name={name}/>

    // console.log(id, src, name)


}
function CourseList(){
const [ courseList ] = useState([
    {
        id: 1,
        title: "Week 1- Beginner- Introduction to UX designing",
        icon: <CiStickyNote/>,
        name1: "Please read before you start",
        icon2: <BsPlayCircleFill />,
        name2: "Introduction to Figma and essential training",
        icon3: <BsPlayCircleFill />,
        name3: "What is the difference between UI/UX in Figma",
        name4: "What we are making in this Figma course",
        name5: "Class assignment 02- Create your own brief",
        name6: "Class assignment 02-create your own brief",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 2,
        title: "Week 2- Beginner-Welcome to course one",
        icon: <BsPlayCircleFill />,
        name1: "How to identify stakeholders",
        icon2: <BsPlayCircleFill />,
        name2: "How to identify user needs",
        icon3: <BsPlayCircleFill />,
        name3: "Creating UX Flows",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 3,
        title: "Week 3- Beginner-the basic of user experience design",
        icon: <BsPlayCircleFill />,
        name1: "Mapping the user journey",
        icon2: <BsPlayCircleFill />,
        name2: "Finding solutions & constraint cards",
        icon3: <BsPlayCircleFill />,
        name3: "Introduction to Figma",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 4,
        title: "Week 4- Beginner-the basic of user experience design",
        icon: <BsPlayCircleFill />,
        name1: "Present Sketches, UX Principles",
        icon2: <BsPlayCircleFill />,
        name2: "Psychology of UX",
        icon3: <BsPlayCircleFill />,
        name3: "Refining grayscales in Figma",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 5,
        title: "Week 5- Beginner-Jobs in the field of user experience",
        icon: <BsPlayCircleFill />,
        name1: "Understanding user testing",
        icon2: <BsPlayCircleFill />,
        name2: "Design for Inclusion",
        icon3: <BsPlayCircleFill />,
        name3: "Figma UI",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 6,
        title: "Week 6- Beginner-Getting ahead as a junior designer",
        icon: <CiStickyNote/>,
        name1: "Understanding user testing",
        icon2: <BsPlayCircleFill />,
        name2: "Design for Inclusion",
        icon3: <BsPlayCircleFill />,
        name3: "Figma UI",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 7,
        title: "Week 7- Topics in UI",
        icon: <CiStickyNote/>,
        name1: "Understanding user testing",
        icon2: <BsPlayCircleFill />,
        name2: "Design for Inclusion",
        icon3: <BsPlayCircleFill />,
        name3: "Figma UI",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
])



 
return(
    <>
        <div className={styles.courseListWrapper}>
            <div>
                {
                    courseList.map((
                        data
                    // id, 
                    // title,
                    // icon,
                    // icon2,
                    // icon3,
                    // name1,
                    // name2,
                    // name3,
                    // watch,
                    // time,
                    // src}, index
                    ) => (
                        <details key={data.id} >
                            <summary>{data.title}</summary>
                                <div id={styles.section1}>
                                    <Link to="/courses/ongoingcourse" className={styles.courseList} onClick={()=>Onclick(data.src)}>
                                        <i>{data.icon}</i>
                                       <div className={styles.firstRow}>
                                            <p>{data.name1}</p>
                                            <div id={styles.section2}>
                                                <i>{data.watch}</i>
                                                <p>{data.time}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div id={styles.section1}>
                                    <Link to="/courses/ongoingcourse" className={styles.courseList} onClick={()=>Onclick(data.src)}>
                                        <i>{data.icon2}</i>
                                        <div className={styles.firstRow}>
                                            <p>{data.name2}</p>
                                            <div id={styles.section2}>
                                                <i>{data.watch}</i>
                                                <p>{data.time}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div id={styles.section1}>
                                    <Link to="/courses/ongoingcourse" className={styles.courseList} onClick={()=>Onclick(data.src)}>
                                        <i>{data.icon3}</i>
                                        <div className={styles.firstRow}>
                                            <p>{data.name3}</p>
                                            <div id={styles.section2}>
                                                <i>{data.watch}</i>
                                                <p>{data.time}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                        </details>
                    ))
                }
            </div>
        </div>
    </>
)
}
export default CourseList;