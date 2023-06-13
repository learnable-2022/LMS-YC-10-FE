import React from 'react'
import style from '../styles/learningpath.module.css'
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai"
import LmsHeader from "../lmsHeader/LmsHeader";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


export default function LearningPath() {
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

          
            <div className={style.card}>
            <Link to="/courses" style={{ textDecoration: 'none' }} > 
                  <div className={style.card_body}>
                      <i><AiOutlinePlus /></i>
                  </div>
                <div className={style.card_footer}>Add new course</div>  
            </Link>
            </div>

           
            <div className={style.card}>
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
