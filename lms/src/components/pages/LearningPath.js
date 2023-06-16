import React from 'react'
import style from '../styles/learningpath.module.css'
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai"
import LmsHeader from "../lmsHeader/LmsHeader";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';

export default function LearningPath() {



  const startCourse = (e) =>{
    e.preventDefault();
 
    const url = "https://kidtots.onrender.com/student/courses/start/:courseid"
      axios.get(url, {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
       }).then((response) =>{
        console.log(response)

       })

  }

  const continueCourse = (e) =>{
    e.preventDefault();
 
    const url = "https://kidtots.onrender.com/student/courses/continue/:courseid"
      axios.get(url, {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
       }).then((response) =>{
        console.log(response)

       })

  }



  return (
    <div className={style.learningPathWrapper}>
      <div className={style.learningPath}>
        <LmsHeader page="Courses"/>
      </div>
      <div className={style.learningPathBodyWrapper}>
        <div className={style.wrapper}>
            <div className={style.courseDirectory}>
                <div>
                    <Link to="*/learningpath">
                        <p className={style.active} >Course</p>
                        <i><IoIosArrowForward /></i>
                    </Link>
                </div>
              
              </div>
        <div className={style.cards}>

          
            <div className={style.card} onClick={startCourse}>
            <Link to="/courses" style={{ textDecoration: 'none' }} > 
                  <div className={style.card_body}>
                      <i><AiOutlinePlus /></i>
                  </div>
                <div className={style.card_footer}>Add new course</div>  
            </Link>
            </div>

           
            <div className={style.card} onClick={continueCourse}>
            <Link to="/courses" style={{ textDecoration: 'none' }} > 
                  <div className={style.card_body}>
                      <i><AiOutlineMenu /></i>
                  </div>
                <div className={style.card_footer}>View selected courses</div>  
            </Link>
            </div>

        </div>
       </div>
    </div>
    </div>
  
   
  )
}
