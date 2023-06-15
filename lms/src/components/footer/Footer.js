import React from "react";
import { FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'
import styles from "../footer/Footer.module.css"
import { Link } from "react-router-dom";


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
                                <div className={styles.labelFieldDiv}>
                                <div className={styles.inputFooterWrapper}>
                                    <input type="email" placeholder="hello@example.com"/>
                                </div>
                                <button type="button">Submit</button>
                                </div>
                            </label>
                            <p>By submitting your email address, you agree to kidsTot’s <Link to="/termsofuse">Terms of Use</Link> and <Link to="/privacypolicy">Policy</Link></p>
                        </div>
                    </div>
                </div>
                <div className={styles.links}>
                    <div>
                        <h3>About Us</h3>
                        <li><Link to="/ourmission">Our Mission</Link></li>
                        <li><Link to="/error">Meet the Team</Link></li>
                        <li><Link to="/error">Testmonials</Link></li>
                        <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                    </div>
                    <div className={styles.secondLinks}>
                        <h3>Support</h3>
                        <li><Link to="/error">FAQs</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/temsofuse">Terms of Service</Link></li>
                        <li><Link to="/contactus">Help Center</Link></li>
                    </div>
                </div>
                </div>
            <div className={styles.footerCopywrightWrapper}>
                <div className={styles.footerCopywright}>
                <p>Copyright 2023 Kidstot co. Ltd.All rights reserved</p>
                    <div className={styles.footerIconsWrapper}>
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