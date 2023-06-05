import React from "react";
import { IoDocumentOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { VscHome } from "react-icons/vsc";
import { FiLogIn } from "react-icons/fi";
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
            <div className={styles.navLinkWrapper}>
                <ul>
                    <Link to="/dashboard">
                        <li><i><VscHome /></i><p>Dashboard</p></li>
                    </Link>
                    <Link to="/learningpath">
                        <li><i><FaBook /></i><p>Courses</p></li>
                    </Link>
                    <Link to="/assignment">
                        <li><i><MdOutlineAssignment /></i><p>Assignments</p></li>
                    </Link>
                    <Link to="/certificate">
                        <li><i><IoDocumentOutline /></i><p>Certificates</p></li>
                    </Link>
                    <Link to="/settings">
                        <li><i><IoSettingsOutline /></i><p>Settings</p></li>
                    </Link>      
                </ul>
                <div className={styles.sideBarFooter}>
                    <ul>
                        <Link to="/">
                            <li><i><FiLogIn /></i><p>Logout</p></li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>

    </>
)
}
export default SideBar