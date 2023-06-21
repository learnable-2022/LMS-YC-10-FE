import React, { useState } from "react";
import styles from "./LmsHeader.module.css";
import { CiSearch } from "react-icons/ci";
import { BsChatRight } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
// import profileImage from "../images/Mask group.png";
import PopUp from "../popUpSideBar/PopUp";
import { IoDocumentOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAssignment,  MdOutlineClose } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { VscHome } from "react-icons/vsc";
import { FiLogIn } from "react-icons/fi";
import Logo from "../images/LogoWhite.png"; 
import { NavLink, Link} from "react-router-dom";
import { AiOutlinePieChart } from 'react-icons/ai';


function LmsHeader({page}){

  const username =   localStorage.getItem('Username')
   const email =  localStorage.getItem('email')
   const profileImage = localStorage.getItem('image')

    const [showBar, setShowBar] = useState(false)

    const showSideBar = () =>{
        setShowBar(!showBar)
    }
    
return(
    <>
        <div className={styles.lmsHeaderWrapper}>
            <div className={styles.courseHeaderH}>
                <div className={styles.responsiveTag}>
                    <div className={styles.menuIcon} onClick={showSideBar}></div>
                    <div className={styles.responsiveImg}></div>
                </div>
                <div  className={styles.courseHeader}>
                <h1 className={styles.headerText}>{page}</h1>
                <div className={styles.courseInputWrapper}>
                    <div className={styles.courseSearchInput}>
                        <i><CiSearch /></i>
                        <input type="search" placeholder="Search here..."/>
                    </div>
                    <div className={styles.headerIcons}>
                        <i><BsChatRight /></i>
                        <div className={styles.secondIconWrapper}>
                            <i><FiBell /></i>
                            <div className={styles.thirdIconWrapper}>
                                <hr/>
                                <div className={styles.fourthWrapper}>
                                    <img src={profileImage} alt="profile" />
                                    <div className={styles.userProfileWrapper}>
                                        <div className={styles.userProfile}>
                                            <div>
                                                <p className={styles.userProfileName}>{username}</p>
                                                {/* <div className={styles.userProfileDiv} id={styles.userProfileDiv}>
                                                    <p>Learner</p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <PopUp trigger={showBar}>
                <div className={styles.sideBarWrapper}>
                    <div className={styles.popheaderWrapper}>
                        <div className={styles.logo}>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className={styles.cancelWrapper}>
                        <i onClick={showSideBar}><MdOutlineClose /></i>
                        </div>
                    </div>
                <div className={styles.navLinkWrapper}>
                <div className={styles.firstSectionLink} >
                    <li>
                        <NavLink to="/dashboard"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><VscHome /></i><p>Dashboard</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/learningpath"                 
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><FaBook /></i><p>Courses</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/assignment"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><MdOutlineAssignment /></i><p>Assignments</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/error"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                                <i><AiOutlinePieChart /></i>
                                <p>Progress Report</p>
                            </div>
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/certificate"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><IoDocumentOutline /></i><p>Certificates</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><IoSettingsOutline /></i><p>Settings</p>
                            </div>
                        </NavLink>
                    </li>
                </div>
                <div className={styles.sideBarFooter}>
                    <div>
                        <Link to="/">
                        <div>
                        <i><FiLogIn /></i><p>Logout</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </PopUp>
        </div>
        
    </>
)
} 
export default LmsHeader;