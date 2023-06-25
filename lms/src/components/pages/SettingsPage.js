import React, { useContext, useState } from 'react'
import styles from '../styles/SettingsPage.module.css';
import { CiMail } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs"
import { RxPerson } from "react-icons/rx"
import { RiKey2Fill } from "react-icons/ri"
import LmsHeader from "../lmsHeader/LmsHeader";
import axios from 'axios';
import { UserContext } from '../../utils/UserContext';





function SettingsPage(){


    const user  = useContext(UserContext);

    const username = user.userData.data.Name
    const userImage = user.userData.data.Image
 
    const token = user.userData.token


    const firstname = username.split(" ")[0]
    const lastname = username.split(" ")[1]

  
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
  
  
    const userName = `${firstName} ${lastName}`

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        username: userName,
        email: email,
        phonenumber: phonenumber,
        password: password,
      }

    
      const url = "https://kidtots.onrender.com/student/user-update"
    //   axios.defaults.withCredentials = true;
      await axios.post(url, data, {
        headers:{
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        }
       }).then((response) =>{
    
        if(response.status === 200){
            setEmail("");
            setPassword("");
            setFirstName("");
            setLastName("");
        }
    
       })

    
    }
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
                        <form  action='' className={styles.settingBody} onSubmit={handleSubmit}>
                            <div className={styles.profileWrapper}>
                                <div>
                                    <img src={userImage} alt="ProfilePicture"  className={styles.profilePicture}/>
                                </div>
                                <div className={styles.profileName}>
                                    <h2>{username}</h2>
                                    <button type='submit'>Upload New</button>
                                </div>
                            </div>
                            <h2>Personal Details</h2>
                            <div className={styles.nameWrapper}>
                                <div className={styles.nameWrapperFirst} >
                                    <i><RxPerson /></i>
                                    <input type="text" placeholder={firstname} required 
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div className={styles.nameWrapperSecond}>
                                    <i><RxPerson /></i>
                                    <input type="text" placeholder={lastname} required 
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                            </div>
                            <div className={styles.input}>
                                <div>
                                    <i><CiMail /></i>
                                    <input type="email" placeholder="helloexample@gmail.com" required 
                                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <button type='button'>Edit</button>
                                </div>
                                <div>
                                    <i><BsTelephone /></i>
                                    <input type="tel" placeholder="Phone number"
                                    value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                                    <button type='button'>Add</button>
                                </div>
                                <div>
                                    <i><RiKey2Fill /></i>
                                    <input type="password" required 
                                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <button type='button'>Change</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    </>
)
}
export default SettingsPage;