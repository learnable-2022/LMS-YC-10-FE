import React from 'react'
import styles from '../styles/quiz.module.css';
import LmsHeader from "../lmsHeader/LmsHeader";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

export default function Quiz() {
  return (
    <>
    <div className={styles.wrapper}>
        <div className={styles.lmsHeader}>
            <LmsHeader  page='Course' />
        </div>
        <div className={styles.quizBodyWrapper}>
        <div>
        <div className={styles.courseDirectory}>
            <div>
                <Link to="/learningpath">
                   <p>Course</p>
                    <i><IoIosArrowForward /></i>
                </Link>
            </div>
            <div>
                <Link to="/learningpath/courses">
                    <p>Select a course</p>
                    <i><IoIosArrowForward /></i>
                </Link>
            </div>
            <div>
                <Link to="/learningpath/courses/coursepage" >
                   <p>UI/UX</p>
                    <i><IoIosArrowForward /></i>
                </Link>
            </div>
            <div>
                <Link to="/learningpath/ongoingcourse" >
                   <p>Introduction to Figma</p>
                    <i><IoIosArrowForward /></i>
                </Link>
            </div>
            <div>
                <p className={styles.active}>Quiz</p>
            </div>
            </div>
        </div>
        <div className={styles.bodyWrapper}>
            <div className={styles.quizContainer}>
                <h2 className={styles.quizHeading}>Quiz</h2>
                <h3>5 questions</h3>
                <h4>This is going to be a quick quiz on everything we have covered in this course Introduction to Figma</h4>
                
                
                <a href="/learningpath/quiz/quizstart" className={styles.startQuizBtn}>Get started</a>
                <h2>OR</h2>
                <a href="/learningpath/ongoingcourse" className={styles.skipQuiz} >Skip quiz</a>
                {/* <Link to='/courses/ongoingcourse' styles={{ textDecoration: 'none' }} ><p>Skip quiz</p></Link> */}
            </div>
            
        </div>
        </div>


    </div>
</>
  )
}
