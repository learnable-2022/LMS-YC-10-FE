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
import { Outlet } from "react-router-dom";

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
                   <Outlet />

                </div>
      
        </div>
    </>
)
}
export default Main;