import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from "../sideBar/SideBar";
import SettingsPage from "../pages/SettingsPage";
import CoursePage from "../pages/CoursePage";
import styles from "./Main.module.css";
import OngoingCourse from "../pages/OngoingCoursePage";
import LearningPath from "../pages/LearningPath";
import GeneralCoursePage from "../pages/GeneralCoursePage";
import Quiz from "../pages/Quiz";
import QuizStart from "../pages/QuizStart";




function Main(){
return(
    <>
        <div className={styles.main}>
       
                <div className={styles.sideBarWrapper}>
                    <div className={styles.sideBar}>
                        <SideBar />
                    </div>
                </div>
                <div className={styles.body}>
                    <Routes>
                       
                        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
                        <Route path='/learningpath' element={<LearningPath />}/>
                        <Route path='/courses' element={<GeneralCoursePage />}/>
                        <Route path='/coursepage' element={<CoursePage/>} />
                        {/* <Route path='/calender' element={<Signup/>}/> */}
                        {/* <Route path='/certificate' element={<Certificate/>}/> */}
                        {/* <Route path='/webinars' element={<Signup/>}/> */}
                        {/* <Route path='/progressbar' element={<Signup/>}/> */}
                        {/* <Route path='/assignment' element={<Signup/>}/> */}
                        <Route path='/quiz' element={<Quiz/>}/>
                        <Route path='/quiz/quizstart' element={<QuizStart/>}/>
                        <Route path='/settings' element={<SettingsPage/>}/>
                        <Route path="/courses/ongoingcourse" element={<OngoingCourse />} />
                    </Routes>
                </div>
      
        </div>
    </>
)
}
export default Main;