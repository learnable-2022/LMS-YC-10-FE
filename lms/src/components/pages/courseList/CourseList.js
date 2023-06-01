import React, { useState } from 'react';
import { TfiLock } from "react-icons/tfi";
import {  BsPlayCircleFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { CiStickyNote } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import styles from "./CourseList.module.css"
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
        src: ""
    },
    {
        id: 2,
        icon: <BsPlayCircleFill />,
        name: "Introduction to Figma and essential training",
        watch: <FcCheckmark />,
        time: "02:53",
        src: ""
    },
    {
        id: 3,
        icon: <BsPlayCircleFill />,
        name: "What is the difference between UI/UX in Figma",
        watch: <FcCheckmark />,
        time: "02:53",
    },
    {
        id: 4,
        icon: <BsPlayCircleFill />,
        name: "What we are making in this Figma course",
        watch: <FcCheckmark />,
        time: "02:53",
    },
    {
        id: 5,
        icon: <CiStickyNote/>,
        name: "Class assignment 02- Create your own brief",
        watch: <FcCheckmark />,
        time: "02:53",
    },
    {
        id: 6,
        icon: <CiStickyNote/>,
        name: "Class assignment 02-create your own brief",
        watch: <FcCheckmark />,
        time: "02:53",
    },
    {
        id: 7,
        icon: <RiArrowDownSLine />,
        name: "Week 2- Beginner-Welcome to course one",
        watch: <TfiLock />,
        time: "02:53",
    },
    {
        id: 8,
        icon: <RiArrowDownSLine />,
        name: "Week 3- Beginner-the basic of user experience design",
        watch: <TfiLock />,
        time: "02:53",
    },
    {
        id: 9,
        icon: <RiArrowDownSLine />,
        name: "Week 4- Beginner-the basic of user experience design",
        watch: <TfiLock />,
        time: "02:53",
    },
    {
        id: 10,
        icon: <RiArrowDownSLine />,
        name: "Week 2- Beginner-Welcome to course one",
        watch: <TfiLock />,
        time: "02:53",
    },
    {
        id: 11,
        icon: <RiArrowDownSLine />,
        name: "Week 5- Beginner-Jobs in the field of user experience",
        watch: <TfiLock />,
        time: "02:53",
    },
    {
        id: 12,
        icon: <RiArrowDownSLine />,
        name: "Week 6- Beginner-Getting ahead as a junior designer",
        watch: <TfiLock />,
        time: "02:53",
    }
])

// , setCourseList
//     const [ course ] = useState("");
//     const addCourse = () => {
//         setCourseList([...courseList, course])
//         // , setCourse 
//     }
//  addCourse();
return(
    <>
        <div className={styles.courseListWrapper}>
            <ul>
                {
                    courseList.map((course) => (
                        <li key={course.id}>
                            <div className={styles.courseList}>
                                <i>{course.icon}</i>
                                <div id={styles.section1}>
                                    <p>{course.name}</p>
                                    <div id={styles.section2}>
                                        <i>{course.watch}</i>
                                        <p>{course.time}</p>
                                    </div>
                                </div>
                                {/* <video src={course.src} controls>
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"  type="video/mp4"/>
                                </video> */}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
)
}
export default CourseList;