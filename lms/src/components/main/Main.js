import React from "react";
import { Route, Routes } from 'react-router-dom';
import SideBar from "../sideBar/SideBar";
import SettingsPage from "../pages/SettingsPage";
import CoursePage from "../pages/CoursePage";
import styles from "./Main.module.css";
import OngoingCourse from "../pages/OngoingCoursePage";
import LearningPath from "../pages/LearningPath";
import GeneralCoursePage from "../pages/GeneralCoursePage";
<<<<<<< HEAD
import Quiz from "../pages/Quiz";
import QuizStart from "../pages/QuizStart";

=======
import Assignment from "../pages/Assignment";
import Dashboard from "../pages/Dashboard";
>>>>>>> 633050b0e87437c28b52280e5d02f40c2f23d1b3



function Main(){
return(
    <>
        <div className={styles.main}>
            
                <div className={styles.sideBarWrapper}>
                    <div className={styles.sideBar}>
                        <SideBar />
                    </div>
                </div>
                <div className={styles.mainBody}>
                    <Routes>
                       
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/learningpath' element={<LearningPath />}/>
                        <Route path='/courses' element={<GeneralCoursePage />}/>
                        <Route path='/coursepage' element={<CoursePage/>} />
                        {/* <Route path='/calender' element={<Signup/>}/> */}
                        {/* <Route path='/certificate' element={<Certificate/>}/> */}
                        {/* <Route path='/webinars' element={<Signup/>}/> */}
                        {/* <Route path='/progressbar' element={<Signup/>}/> */}
<<<<<<< HEAD
                        {/* <Route path='/assignment' element={<Signup/>}/> */}
                        <Route path='/quiz' element={<Quiz/>}/>
                        <Route path='/quiz/quizstart' element={<QuizStart/>}/>
=======
                        <Route path='/assignment' element={<Assignment/>}/>
>>>>>>> 633050b0e87437c28b52280e5d02f40c2f23d1b3
                        <Route path='/settings' element={<SettingsPage/>}/>
                        <Route path="/courses/ongoingcourse" element={<OngoingCourse />} />
                    </Routes>
                </div>
      
        </div>
    </>
)
}
export default Main;