import React from 'react'
import style from '../styles/learningpath.module.css'
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai"
import LmsHeader from "../lmsHeader/LmsHeader";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


export default function LearningPath() {
  return (
    <div  style={{ width: '100%', margin: '0px', padding: '0px' }}>
     
        <LmsHeader page='Course' />
       <div className={style.wrapper}>
          <div className={style.courseDirectory}>
              <div>
                  <Link to="/">
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
           

        {/* <Link to="/courses"> */}
        <div className={style.card}>
            <div className={style.card_body}>
           <i> <AiOutlineMenu /></i>
            </div>
            <div className={style.card_footer}>View selected courses</div>
        </div>
         {/* </Link> */}
       </div>
      
    </div>
    </div>
  
   
  )
}
