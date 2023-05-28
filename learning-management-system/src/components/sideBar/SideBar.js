import React from "react";
import { IoDocumentOutline, IoSettingsOutline } from "react-icons/io5"
import { IoIosPeople } from "react-icons/io";
import { MdOutlineAssignment, MdPeopleOutline } from "react-icons/md"
import { HiOutlineCalendarDays } from "react-icons/hi2"
import { BsPlayBtn } from "react-icons/bs"
import { AiOutlinePieChart } from "react-icons/ai"
import { FaBook } from "react-icons/fa"
import { VscHome } from "react-icons/vsc"
import { FiHelpCircle, FiLogIn } from "react-icons/fi"
import styles from "../sideBar/SideBar.module.css"
import Logo from "../images/LogoWhite.png"; 
import { Link } from "react-router-dom";




function SideBar(){
return(
    <>
        <div className={styles.sideBarWrapper}>
            <div className={styles.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <ul>
                <Link to="/dashboard">
                    <li><i><VscHome /></i><p>Dashboard</p></li>
                </Link>
                <Link to="/courses">
                    <li><i><FaBook /></i><p>Courses</p></li>
                </Link>
                <Link to="/calender">
                    <li><i><HiOutlineCalendarDays /></i><p>Calender</p></li>
                </Link>
                <Link to="/classgroup">
                    <li><i><IoIosPeople /></i><p>Class Groups</p></li>
                </Link>
                <Link to="/webinars">
                    <li><i><BsPlayBtn /></i><p>Webinars</p></li>
                </Link>
                <Link to="/progressbar">
                    <li><i><AiOutlinePieChart /></i><p>Progress Report</p></li>
                </Link>
                <Link to="/assignment">
                    <li><i><MdOutlineAssignment /></i><p>Assignments</p></li>
                </Link>
                <Link to="/certificate">
                    <li><i><IoDocumentOutline /></i><p>Certificates</p></li>
                </Link>
                <Link to="/instructors">
                    <li><i><MdPeopleOutline /></i><p>Instructors</p></li>
                </Link>
                <Link to="/settings">
                    <li><i><IoSettingsOutline /></i><p>Settings</p></li>
                </Link>      
            </ul>
            <div className={styles.sideBarFooter}>
                <ul>
                    <Link to="">
                        <li><i><FiLogIn /></i><p>Logout</p></li>
                    </Link>
                    <Link to="">
                        <li><i><FiHelpCircle /></i><p>Help</p></li>
                    </Link>
                </ul>
            </div>
        </div>

    </>
)
}
export default SideBar