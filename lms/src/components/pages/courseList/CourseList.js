import React from 'react';
import {  BsPlayCircleFill } from "react-icons/bs";
// import { FcCheckmark } from "react-icons/fc";
import { CiStickyNote } from "react-icons/ci";
import styles from "./CourseList.module.css";
import { Link, useNavigate } from "react-router-dom";
// , { useState }


  



function CourseList({items}){

    const navigate = useNavigate();

    const clickedCourse = (url) =>{
        const encodedId = encodeURIComponent(url);
        navigate(`/learningpath/ongoingcourse/${encodedId}`)
    }

 
return(
    <>
        <div className={styles.courseListWrapper}>
            <div>
                {
                    items.map((
                        data, index
                    ) => (
                        <details key={index} >
                            <summary>{`${data.Name}-`}</summary>
                            {
                                data.VideoLink && data.MaterialLink?
                                <div>
                                    <div id={styles.section1}>
                                        <div className={styles.courseList} 
                                            onClick={() =>clickedCourse(data.VideoLink.originalVideo)}>
                                                <i><BsPlayCircleFill /></i>
                                                <div className={styles.firstRow}>
                                                    <p>{data.VideoLink.vidName}</p>
                                                    <div id={styles.section2}>
                                                        <i></i>
                                                        <p>12:02</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div> 
                                    <div id={styles.section1}>
                                        <Link to={data.MaterialLink.originalDocLink} className={styles.courseList}>
                                            <i><CiStickyNote /></i>
                                            <div className={styles.firstRow}>
                                                <p>{data.MaterialLink.materialName}</p>
                                                <div id={styles.section2}>
                                                    <i></i>
                                                    {/* <p>{data.time}</p> */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <div id={styles.section1}>
                                            <Link to={`/learningpath/ongoingcourse/${data.VideoLink.originalVideo}`} className={styles.courseList}>
                                                <i><BsPlayCircleFill /></i>
                                                <div className={styles.firstRow}>
                                                    <p>{data.VideoLink.vidName}</p>
                                                    <div id={styles.section2}>
                                                        <i></i>
                                                        <p>12:02</p>
                                                    </div>
                                                </div>
                                            </Link>
                                    </div> 
                                    <div id={styles.section1}>
                                        <Link to="/learningpath/ongoingcourse" className={styles.courseList}>
                                            <i><CiStickyNote /></i>
                                            <div className={styles.firstRow}>
                                                <p>{data.MaterialLink.materialName}</p>
                                                <div id={styles.section2}>
                                                    <i></i>
                                                    
                                                </div>
                                            </div>
                                        </Link>
                                </div> 
                            */}

                                </div>
                        : ""
                            }

                        </details>
                    ))
                }
            </div>
        </div>
    </>
)
}
export default CourseList;