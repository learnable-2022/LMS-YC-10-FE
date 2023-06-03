import React, { useState } from 'react';
import { TfiLock } from "react-icons/tfi";
import {  BsPlayCircleFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { CiStickyNote } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import styles from "./CourseList.module.css";
import OngoingCourse  from "../OngoingCoursePage";
import { Link } from "react-router-dom";

// import video from "../../images/"
// import { icons } from 'react-icons';
// RiArrowUpSLine

function CourseList(){
const [ courseList ] = useState([
    {
        id: 1,
        icon: <CiStickyNote/>,
        name: "Please read before you start",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 2,
        icon: <BsPlayCircleFill />,
        name: "Introduction to Figma and essential training",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 3,
        icon: <BsPlayCircleFill />,
        name: "What is the difference between UI/UX in Figma",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 4,
        icon: <BsPlayCircleFill />,
        name: "What we are making in this Figma course",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 5,
        icon: <CiStickyNote/>,
        name: "Class assignment 02- Create your own brief",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 6,
        icon: <CiStickyNote/>,
        name: "Class assignment 02-create your own brief",
        watch: <FcCheckmark />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 7,
        icon: <RiArrowDownSLine />,
        name: "Week 2- Beginner-Welcome to course one",
        watch: <TfiLock />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 8,
        icon: <RiArrowDownSLine />,
        name: "Week 3- Beginner-the basic of user experience design",
        watch: <TfiLock />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 9,
        icon: <RiArrowDownSLine />,
        name: "Week 4- Beginner-the basic of user experience design",
        watch: <TfiLock />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 10,
        icon: <RiArrowDownSLine />,
        name: "Week 2- Beginner-Welcome to course one",
        watch: <TfiLock />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 11,
        icon: <RiArrowDownSLine />,
        name: "Week 5- Beginner-Jobs in the field of user experience",
        watch: <TfiLock />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 12,
        icon: <RiArrowDownSLine />,
        name: "Week 6- Beginner-Getting ahead as a junior designer",
        watch: <TfiLock />,
        time: "02:53",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
])

// , setCourseList
//     const [ course ] = useState("");
//     const addCourse = () => {
//         setCourseList([...courseList, course])
//         // , setCourse 
//     }
//  addCourse();


    const Onclick = (id, src, name) => {

        <OngoingCourse id={id} src={src} name={name}/>

        console.log(id, src, name)

        // return(
        //     <>
        //         <video width="400px" height="400px" key={id} controls>
        //             <source src={src} type='video/mp4' />
        //         </video>
        //     </>
        // )
    }
return(
    <>
        <div className={styles.courseListWrapper}>
            <ul>
                {
                    courseList.map((
                        {
                    id, 
                    icon,
                    name,
                    watch,
                    time,
                    src}, index
                    ) => (
                        <li key={id} >
                            <Link to="/courses/ongoingcourse" className={styles.courseList} onClick={()=>Onclick(id, src)}>
                                <i>{icon}</i>
                                <div id={styles.section1}>
                                    <p>{name}</p>
                                    <div id={styles.section2}>
                                        <i>{watch}</i>
                                        <p>{time}</p>
                                    </div>
                                </div>
                            </Link>
                                {/* <video controls>onClick={()=> Onclick(id, src, name)}
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"  type="video/mp4"/>
                                </video> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
)
}
export default CourseList;