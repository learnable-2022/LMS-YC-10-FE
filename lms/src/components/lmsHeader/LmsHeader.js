import React from "react";
import styles from "./LmsHeader.module.css";
import { CiSearch } from "react-icons/ci";
import { BsChatRight } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import profileImage from "../images/Mask group.png";
import SideBar from "../sideBar/SideBar";




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
                    <div className={styles.menuIcon}><button onClick={showSideBar}></button></div>
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
        </div>
    </>
)
} 
export default LmsHeader;