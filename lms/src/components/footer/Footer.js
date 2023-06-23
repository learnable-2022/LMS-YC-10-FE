import React, { useState, useRef, useEffect } from "react";
import { FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'
import styles from "../footer/Footer.module.css"
import { Link } from "react-router-dom";
import axios from "axios";
import PopUp from "../popUpSideBar/PopUp";
import newsImage from "../images/newsImage.png"
import { GiCancel } from "react-icons/gi"


function Footer(){

    const [email, setEmail] = useState("");
    const [errMsg, setErrMsg] = useState('');
    const [showBar, setShowBar] = useState(false)
    const showPop = () =>{
        setShowBar(!showBar)
        // setShowBar(!showBar)
    }

    // const userRef = useRef();
    const errRef = useRef();
    // const [errMsg, setErrMsg] = useState('');
    console.log(email)

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])
    useEffect(() => {
        setErrMsg('');
    }, [email])
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: email,
      }
    
      const url = "https://kidtots.onrender.com/newsletter"
    
      await axios.post(url, data, {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
       }).then((response) =>{
        // console.log(response)
        if(response.status === 200){
        setShowBar(!showBar)
          
        }
    
        setEmail("");
  
       }).then((error) =>{
        console.log(error)
        if (!error?.response) {
            setErrMsg('No Server Response');
        } else if (error.response?.status === 409) {
            setErrMsg('You can not apply twice');
        } else {
            setErrMsg('Registration Failed')
        }
        errRef.current.focus();
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
        <div className={styles.footerWrapper}>
                <div className={styles.footerBodyWrapper}>
                <div className={styles.footer}>
                    <div className={styles.footerBody}>
                        <h1>Stay Connected</h1>
                        <div className={styles.footerText}>
                        <p>Never miss out on the latest updates, 
                            educational tips, and exclusive offers! Subscribe 
                            to our newsletter and stay connected with our child learning community.
                        </p>
                        </div>
                        <div className={styles.labelField}>
                            <form action="" onSubmit={handleSubmit}>
                                <label><p>Enter Your Email</p>
                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                                    <div className={styles.labelFieldDiv}>
                                    <div className={styles.inputWrapper}>
                                        <input type="email" placeholder="hello@example.com" required
                                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <button type="button">Submit</button>
                                    </div>
                                </label>
                            </form>
                            <p>By submitting your email address, you agree to kidsTot’s <Link to="/termsofuse">Terms of Use</Link> and <Link to="/privacypolicy">Policy</Link></p>
                        </div>
                    </div>
                </div>
                <PopUp trigger={true}>
                    <div className={styles.news}>
                        <div className={styles.imgWrapper}>  
                            <img src={newsImage} alt="Thanks" />
                            <i onClick={showPop}><GiCancel /></i>
                        </div>
                        <h3>Thanks for subscribing</h3>
                        <p>Check your email on Friday for our latest newsletters.</p>
                    </div>
                </PopUp>
                <div className={styles.links}>
                    <div>
                        <h3><Link to="/aboutus">About Us</Link></h3>
                        <li><Link to="/ourmission">Our Mission</Link></li>
                        <li><Link to="/theteam">Meet the Team</Link></li>
                        <li><Link to="/error">Testmonials</Link></li>
                        <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                    </div>
                    <div className={styles.secondLinks}>
                        <h3><Link to="/error">Support</Link></h3>
                        <li><Link to="/error">FAQs</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/termsofuse">Terms of Service</Link></li>
                        <li><Link to="/contactus">Help Center</Link></li>
                    </div>
                </div>
                </div>
            <div className={styles.footerCopywrightWrapper}>
                <div className={styles.footerCopywright}>
                <p>Copyright 2023 Kidstot co. Ltd.All rights reserved</p>
                    <div className={styles.footerIconsWrapper}>
                        <a href="http://linkedin.com/in/kids-tot-95521a280"><i><FiLinkedin /></i></a>
                        <a href="https://twitter.com/Kids_Tot?t=9uyiajH_hVdhwnDoEGJKPw&s=08"><i><FiTwitter /></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100093468867927"><i><FiFacebook /></i></a>
                    </div>
                </div>
            </div>
        </div>
    </>
)
} 
export default Footer