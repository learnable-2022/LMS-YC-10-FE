import React from "react";
import styles from '../styles/SettingsPage.module.css';
import { CiSearch, CiMail } from "react-icons/ci"
import { BsChatRight, BsTelephone } from "react-icons/bs"
import { FiBell } from "react-icons/fi";
import { RxPerson } from "react-icons/rx"
import { RiKey2Fill } from "react-icons/ri"
import profileImage from "../images/Mask group.png"





function SettingsPage(){
return(
    <>
        <div className={styles.settingsWrapper}>
            <div className={styles.bodyWrapper}>
                <div className={styles.settingsHeader}>
                    <h1>Settings</h1>
                    <div className={styles.InputWrapper}>
                        <div className={styles.settingSearchInput}>
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
                                        <i><RxPerson /></i>
                                        <div className={styles.userProfileWrapper}>
                                            <div className={styles.userProfile}>
                                                <div>
                                                    <p>Arjen Robben C.</p>
                                                    <div className={styles.userProfileDiv}>
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
                <div className={styles.profileText}>
                    <h3>Profile</h3>
                </div>
                <div className={styles.settingBodyWrapper}>
                    <div className={styles.settingBody}>
                    <div className={styles.profileWrapper}>
                        <div>
                            <img src={profileImage} alt="ProfilePicture" />
                        </div>
                        <div>
                            <h2>Arjen Angel</h2>
                            <button>Upload New</button>
                        </div>
                    </div>
                <h2>Personal Details</h2>
                <div className={styles.nameWrapper}>
                    <div className={styles.nameWrapperFirst}>
                        <i><RxPerson /></i>
                        <input type="text" placeholder="Angel"/>
                    </div>
                    <div>
                        <i><RxPerson /></i>
                        <input type="text" placeholder="Arjen"/>
                    </div>
                </div>
                <div className={styles.input}>
                <div>
                    <i><CiMail /></i>
                    <input type="email" placeholder="hello@example.com"/>
                    <button>Edit</button>
                </div>
                <div>
                    <i><BsTelephone /></i>
                    <input type="tel" placeholder="Phone number"/>
                    <button>Add</button>
                </div>
                <div>
                    <i><RiKey2Fill /></i>
                    <input type="password" />
                    <button>Change</button>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </>
)
}
export default SettingsPage;