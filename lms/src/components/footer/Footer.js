import React from "react";
import { FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'
import styles from "../footer/Footer.module.css"


function Footer(){
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
                            <label><p>Enter Your Email</p>
                                <div>
                                <input type="email" placeholder="hello@example.com"/>
                                <button type="button">Submit</button>
                                </div>
                            </label>
                            <p>By submitting your email address, you agree to kidsTot’s <a href="https://">Terms of Use</a> and <a href="https://">Policy</a></p>
                        </div>
                    </div>
                </div>
                <div className={styles.links}>
                    <div>
                        <h3>About Us</h3>
                        <li><a href="https:/">Our Mission</a></li>
                        <li><a href="https:/">Meet the Team</a></li>
                        <li><a href="https:/">Testmonials</a></li>
                        <li><a href="https:/">Privacy Policy</a></li>
                    </div>
                    <div className={styles.secondLinks}>
                        <h3>Support</h3>
                        <li><a href="https:/">FAQs</a></li>
                        <li><a href="https:/">Contact Us</a></li>
                        <li><a href="https:/">Terms of Service</a></li>
                        <li><a href="https:/">Help Center</a></li>
                    </div>
                </div>
                </div>
            <div className={styles.footerCopywrightWrapper}>
                <div className={styles.footerCopywright}>
                <p>Copyright 2023 Kidstot co. Ltd.All rights reserved</p>
                    <div className={styles.footerIcons}>
                        <a href="https://"><i><FiLinkedin /></i></a>
                        <a href="https://"><i><FiTwitter /></i></a>
                        <a href="https://"><i><FiFacebook /></i></a>
                    </div>
                </div>
            </div>
        </div>
    </>
)
} 
export default Footer