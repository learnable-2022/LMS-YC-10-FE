import React from "react";
import { Route, Routes } from 'react-router-dom';
import SideBar from "../sideBar/SideBar";
import SettingsPage from "../pages/SettingsPage";
import CoursePage from "../pages/CoursePage";
import styles from "./Main.module.css";
import OngoingCourse from "../pages/OngoingCoursePage";
import LearningPath from "../pages/LearningPath";
import GeneralCoursePage from "../pages/GeneralCoursePage";
import Assignment from "../pages/Assignment";




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
                       
                        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
                        <Route path='/learningpath' element={<LearningPath />}/>
                        <Route path='/courses' element={<GeneralCoursePage />}/>
                        <Route path='/coursepage' element={<CoursePage/>} />
                        {/* <Route path='/calender' element={<Signup/>}/> */}
                        {/* <Route path='/classgroup' element={<Signup/>}/> */}
                        {/* <Route path='/webinars' element={<Signup/>}/> */}
                        {/* <Route path='/progressbar' element={<Signup/>}/> */}
                        <Route path='/assignment' element={<Assignment/>}/>
                        <Route path='/settings' element={<SettingsPage/>}/>
                        <Route path="/courses/ongoingcourse" element={<OngoingCourse />} />
                    </Routes>
                </div>
      
        </div>
    </>
)
}
export default Main;