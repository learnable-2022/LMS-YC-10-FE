import React from "react";
import styles from "./LmsHeader.module.css";
import { CiSearch } from "react-icons/ci";
import { BsChatRight } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import profileImage from "../images/Mask group.png";
import SideBar from "../sideBar/SideBar";
// import PopUp from "../popUpSideBar/PopUp";
// import { IoDocumentOutline, IoSettingsOutline } from "react-icons/io5";
// import { MdOutlineAssignment } from "react-icons/md";
// import { FaBook } from "react-icons/fa";
// import { VscHome } from "react-icons/vsc";
// import { FiLogIn } from "react-icons/fi";
// import Logo from "../images/LogoWhite.png"; 
// import { NavLink, Link} from "react-router-dom";
// , useNavigate 
// onClick={handleClick}

function LmsHeader({page}){

    const showSideBar = () =>{
        return(
            <>
                 <div className={styles.sideBarShow}>
                    <SideBar />
                 </div>
            </>
        )
    }
return(
    <>
        <div className={styles.lmsHeaderWrapper}>
            <div className={styles.courseHeader}>
                <div className={styles.responsiveTag}>
                    <div className={styles.menuIcon} onClick={showSideBar}></div>
                    <div className={styles.responsiveImg}></div>
                </div>
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
                                                <p className={styles.userProfileName}>Arjen Angel</p>
                                                <div className={styles.userProfileDiv} id={styles.userProfileDiv}>
                                                    <p>Learner</p>
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
            {/* <PopUp trigger={false}>
        <div className={styles.sideBarWrapper}>
            <div className={styles.popheaderWrapper}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <div className={styles.navLinkWrapper}>
                <div className={styles.firstSectionLink} id={styles.firstSectionLink}>
                    <NavLink to="/dashboard" >
                        <div>
                        <i><VscHome /></i><p>Dashboard</p>
                        </div>
                    </NavLink>
                    <NavLink to="/learningpath">
                        <div>
                        <i><FaBook /></i><p>Courses</p>
                        </div>
                    </NavLink>
                    <NavLink to="/assignment">
                        <div>
                        <i><MdOutlineAssignment /></i><p>Assignments</p>
                        </div>
                    </NavLink>
                    <NavLink to="/certificate">
                        <div>
                        <i><IoDocumentOutline /></i><p>Certificates</p>
                        </div>
                    </NavLink>
                    <NavLink to="/settings">
                        <div>
                        <i><IoSettingsOutline /></i><p>Settings</p>
                        </div>
                    </NavLink>      
                </div>
                <div className={styles.sideBarFooter}>
                    <div>
                        <Link to="/home">
                        <div>
                        <i><FiLogIn /></i><p>Logout</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </PopUp> */}
        </div>
        
    </>
)
} 
export default LmsHeader;