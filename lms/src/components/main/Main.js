import React from "react";
import { Route, Routes } from 'react-router-dom';
import SideBar from "../sideBar/SideBar";
import SettingsPage from "../pages/SettingsPage";
import CoursePage from "../pages/CoursePage";
import styles from "./Main.module.css";
import OngoingCourse from "../pages/OngoingCoursePage";
import LearningPath from "../pages/LearningPath";
import GeneralCoursePage from "../pages/GeneralCoursePage";
import Quiz from "../pages/Quiz";
import QuizStart from "../pages/QuizStart";
import Assignment from "../pages/Assignment";
import Dashboard from "../pages/Dashboard";
import Certificate from "../pages/Certificate";
import ErrorShow from "../popUpSideBar/ErrorShow";


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
                       
                        <Route index path='*/dashboard' element={<Dashboard />} />
                    
                        <Route path='*/learningpath' element={<LearningPath />}/>
                        <Route path='/courses' element={<GeneralCoursePage />}/>
                        <Route path='/coursepage' element={<CoursePage/>} />
                        <Route path='/quiz' element={<Quiz/>}/>
                        <Route path='/quiz/quizstart' element={<QuizStart/>}/>
                        <Route path='*/assignment' element={<Assignment/>}/>
                        <Route path='/assignment' element={<Assignment/>}/>
                        <Route path='*/settings' element={<SettingsPage/>}/>
                        <Route path='*/certificate' element={<Certificate/>}/>
                        <Route path="/courses/ongoingcourse" element={<OngoingCourse />} />
                        <Route path="*/error" element={<ErrorShow />} />
                    </Routes>
                </div>
      
        </div>
    </>
)
}
export default Main;