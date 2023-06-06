import React from "react";
import styles from '../styles/SettingsPage.module.css';
import { CiMail } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs"
import { RxPerson } from "react-icons/rx"
import { RiKey2Fill } from "react-icons/ri"
import profileImage from "../images/Mask group.png"
import LmsHeader from "../lmsHeader/LmsHeader";





function SettingsPage(){
return(
    <>
        <div className={styles.settingsPage}>
            <div className={styles.settingsPageHeader}>
                <LmsHeader page="Settings" />
            </div>
            <div className={styles.profileText}>
                <h3>Profile</h3>
            </div>
            <div className={styles.settingsWrapper}>
                <div className={styles.bodyWrapper}>
                    <div className={styles.settingBodyWrapper}>
                        <div className={styles.settingBody}>
                            <div className={styles.profileWrapper}>
                                <div>
                                    <img src={profileImage} alt="ProfilePicture"  className={styles.profilePicture}/>
                                </div>
                                <div className={styles.profileName}>
                                    <h2>Arjen Angel</h2>
                                    <button>Upload New</button>
                                </div>
                            </div>
                            <h2>Personal Details</h2>
                            <div className={styles.nameWrapper}>
                                <div className={styles.nameWrapperFirst} >
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
        </div>  
    </>
)
}
export default SettingsPage;