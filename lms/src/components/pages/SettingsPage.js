import React, { useState } from 'react'
import styles from '../styles/SettingsPage.module.css';
import { CiMail } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs"
import { RxPerson } from "react-icons/rx"
import { RiKey2Fill } from "react-icons/ri"
import LmsHeader from "../lmsHeader/LmsHeader";
import axios from 'axios';





function SettingsPage(){


    const username =   localStorage.getItem('Username')
    const email =  localStorage.getItem('email')
    const profileImage = localStorage.getItem('image')


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
    
      const url = "https://kidtots.onrender.com/student/"
    
      await axios.put(url, data, {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
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
                                    <img src={profileImage} alt="ProfilePicture"  className={styles.profilePicture}/>
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

                                    <input type="text" placeholder={username} required 
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                </div>

                                    <input type="text" placeholder="Arjen" required 
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