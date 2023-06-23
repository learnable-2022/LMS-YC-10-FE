import React, { useState } from 'react'
import styles from '../styles/SettingsPage.module.css';
import { CiMail } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs"
import { RxPerson } from "react-icons/rx"
import { RiKey2Fill } from "react-icons/ri"
import LmsHeader from "../lmsHeader/LmsHeader";
import axios from 'axios';





function SettingsPage(){


    let username = localStorage.getItem("Username");
    let userImage = localStorage.getItem("image");
    let firstname = username.split(" ")[0]
    let lastname = username.split(" ")[1]
    console.log(firstname)
    console.log(lastname)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
  
    // const [errMsg, setErrMsg] = useState('');
  
    const userName = `${firstName} ${lastName}`
  
    console.log(password)
    console.log(userName)
    console.log(message)
    console.log(phonenumber)
    console.log(email)

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        username: userName,
        email: email,
        message: message,
        phonenumber: phonenumber,
        password: password,
      }
      let token = localStorage.getItem("token")
    
      const url = "https://kidtots.onrender.com/student/user-update"
    
      await axios.post(url, data, {
        headers:{
        "Authorization": `Bearer` + token,
        "Content-Type": "application/json",
        }
       }).then((response) =>{
        console.log(response)
  
    
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setMessage("");
  
        
    
    
       })
      // catch(error){
      //   if (!error?.response.status) {
      //     setErrMsg('No Server Response');
      // } else if (error.response?.status === 400) {
      //     setErrMsg('Missing Username or Password');
      // } else if (error.response?.status === 404) {
      //     setErrMsg('Unauthorized');
      // } else {
      //     setErrMsg('Login Failed');
      // }
      // errRef.current.focus();
      // }
    
    
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
                                    <h2>Arjen Angel</h2>
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
                                <div>
                                    <i><RxPerson /></i>
                                    <input type="text" placeholder={lastname} required 
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                            </div>
                            <div className={styles.input}>
                                <div>
                                    <i><CiMail /></i>
                                    <input type="email" placeholder="hello@example.com" required 
                                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <button type='button'>Edit</button>
                                </div>
                                <div>
                                    <i><BsTelephone /></i>
                                    <input type="tel" placeholder="Phone number" required 
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