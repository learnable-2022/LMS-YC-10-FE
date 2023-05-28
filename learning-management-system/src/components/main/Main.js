import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from "../sideBar/SideBar";
import SettingsPage from "../pages/SettingsPage";
import CoursePage from "../pages/CoursePage";
import styles from "./Main.module.css";



function Main(){
return(
    <>
        <div className={styles.main}>
            <Router>
                <div className={styles.sideBarWrapper}>
                    <div className={styles.sideBar}>
                        <SideBar />
                    </div>
                </div>
                <div className={styles.body}>
                    <Routes>
                        {/* <Route path='/signup' element={<Signup/>}/> */}
                        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
                        <Route path='/courses' element={<CoursePage/>}></Route>
                        {/* <Route path='/calender' element={<Signup/>}/> */}
                        {/* <Route path='/classgroup' element={<Signup/>}/> */}
                        {/* <Route path='/webinars' element={<Signup/>}/> */}
                        {/* <Route path='/progressbar' element={<Signup/>}/> */}
                        {/* <Route path='/assignment' element={<Signup/>}/> */}
                        {/* <Route path='/certficate' element={<Signup/>}/> */}
                        {/* <Route path='/instructors' element={<Signup/>}/> */}
                        <Route path='/settings' element={<SettingsPage/>}/>
                        {/* <Route path='/signin' element={<SignIn/>}></Route> */}
                        {/* <Route path='/contact' element={<ContactSection/>}/> */}
                    </Routes>
                </div>
           </Router>
        </div>
    </>
)
}
export default Main;