import React from 'react'
import styles from '../styles/LandingPage.module.css'
import girlHero from '../images/girlHero.svg'
import genesysLogo from '../images/genesysLogo.svg'
import codevilleLogo from '../images/codevilleLogo.svg'
import learnableLogo from '../images/learnableLogo.svg'
import teneceLogo from '../images/teneceLogo.svg'
import emblem from '../images/emblem.svg'
import kidLogo from '../images/kidsLogo.svg'
import webCourse from '../images/webCourse.svg'
import roboticsCourse from '../images/roboticsCourse.svg'
import uiCourse from '../images/uiCourse.svg'
import scienceCourse from '../images/scienceCourse.svg'
import instructor from '../images/instructor.svg'
import liveClasses from '../images/liveClasses.svg'
import oneSupport from '../images/oneSupport.svg'
import messageIcon from '../images/messageIcon.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import linkedIn from '../images/linkedIn.svg'

function LandingPage(){
    return (
        <div>
            <div>
                    <div className={styles.navContainer}>
                        <div className={styles.logo}>
                            <img src={kidLogo} alt="" />
                        </div>
                        <div className={styles.navItems}>
                            <ul className={styles.nav}>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                            <div className={styles.signupSignin}>
                                <a href="#" className={styles.signup}>Sign Up</a>
                                <a href="#" className={styles.signin}>Sign In</a>
                            </div>
                        </div>
                    </div>
            </div>
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.heroContainer} >
                        <div className={styles.text}>
                            <h1>Empowering Your Child <br />
                                Through Our Learning <br /> Management
                                System</h1>
                            <p>Unlock a kid's 
                                world of wonders and empowering <br />
                                children through interactive learning"</p>
                        </div>
                        <div className={styles.heroImg}>
                            <img src={girlHero} alt="" />
                        </div>
                    </div>
                    <div className={styles.getStartedExplore}>
                        <a href="#" className={styles.getStarted}>Get Started</a>
                        <a href="#" className={styles.explore}>Explore Courses</a>
                    </div>
                </div>
                <div className={styles.partnerWrapper}>
                    <h1>OUR PARTNERS</h1>
                    <div className={styles.partners}>
                        <div className={styles.genesys}>
                            <img src={genesysLogo} alt="" />
                        </div>
                        <div className={styles.codeville}>
                            <img src={codevilleLogo} alt="" />
                        </div>
                        <div className={styles.learnable}>
                            <img src={learnableLogo} alt="" />
                        </div>
                        <div className={styles.tenece}>
                            <img src={teneceLogo} alt="" />
                        </div>
                        <div className={styles.emblem}>
                            <img src={emblem} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.coursesSection}>
                    <h1>Our Courses</h1>
                    <div className={styles.coursesWrapper}>
                        <div className={styles.blue}>
                            <div className={styles.courseImg}>
                                <img src={webCourse} alt="" />
                            </div>
                            <h4>Web Development</h4>
                            <p>Kids can build digital
                            worlds through web development</p>
                        </div>
                        <div className={styles.red}>
                            <div className={styles.courseImg}>
                                <img src={roboticsCourse} alt="" />
                            </div>
                            <h4>Robotics</h4>
                            <p>Let your kids dive into the world of robotics</p>
                        </div>
                        <div className={styles.blue}>
                            <div className={styles.courseImg}>
                                <img src={scienceCourse} alt="" />
                            </div>
                            <h4>Science</h4>
                            <p>Your child can unleash the power of Science </p>
                        </div>
                        <div className={styles.red}>
                            <div className={styles.courseImg}>
                                <img src={uiCourse} alt="" />
                            </div>
                            <h4>UI/UX</h4>
                            <p>Unleash your child’s creativity through UI/UX</p>
                        </div>
                    

                    </div>
                </div>
                {/**for the customer support chat icon*/}
                <div className={styles.customerSupport}>
                    <img src={messageIcon} alt="" />
                </div>
                <div className={styles.potentialWrapper}>
                    <div className={styles.potentialContainer}>
                        <h1>Unlock Your Teaching Potentials</h1>
                        <p>Easily upload and manage
                            your courses for free, engage with students,
                            and track your progress. Join our community 
                            of tutors today for free and
                            start sharing your expertise with the world!</p>
                        <div className={styles.trialPlans}>
                            <div className={styles.trial}>
                                <a href="#" className={styles.getStarted}>Start For Free</a>
                            </div>
                            <div className={styles.plans}>
                                <a href="#">View All Plans</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.provisionWrapper}>
                    <div className={styles.provisionContainer}>
                        <h1>We Provide</h1>
                        <div className={styles.provisions}>
                            <div className={styles.provisionContent}>
                                <div className={styles.provisionImg}>
                                    <img src={instructor} alt="" />
                                </div>
                                <div className={styles.provisionText}>
                                    <h5>Best Instructors</h5>
                                    <p>Beyond the classroom, 
                                        We have the best
                                        instructors that serve as mentors and role models.</p>
                                </div>
                            
                            </div>
                            <div className={styles.provisionContent}>
                                <div className={styles.provisionImg}>
                                    <img src={liveClasses} alt="" />
                                </div>
                                <div className={styles.provisionText}>
                                    <h5>Live Classes</h5>
                                    <p>We offer vibrant 
                                        and dynamic live classes 
                                        where learning comes to life.</p>
                                </div>
                                
                            </div>
                            <div className={styles.provisionContent}>
                                <div className={styles.provisionImg}>
                                    <img src={oneSupport} alt="" /> 
                                </div>
                                <div className={styles.provisionText}>
                                    <h5>One on One Support</h5>
                                    <p>Our one-on-one support is not 
                                        for academic matters alone.
                                        We provide  holistic development.</p>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.clientsWrapper}>
                    <div className={styles.clientsContainer}>

                    </div>
                </div>
                <div className={styles.connectedWrapper}>
                    <div className={styles.connectedContainer}>
                        <div className={styles.one}>
                            <div className={styles.connectOneA}>
                                <h1>Stay Connected</h1>
                                <p>Never miss out on the latest updates,
                                    educational tips, and exclusive offers! Subscribe to our newsletter and 
                                    stay connected with our child learning community.</p>
                            </div>
                            <div className={styles.connectedOneB}>
                                <label htmlFor="subscription" className={styles.email}>Enter Your Email</label> <br />
                                <input type="email" name="subscription" id="" placeholder='hello@example.com' />
                                <button type="submit">Submit</button>
                                <p>By submitting your email address, you agree 
                                    to kidsTot’s <span>Terms of Use</span> and <span>Policy</span> </p>
                            </div>
                        </div>
                        <div className={styles.two}>
                            <p>About Us</p>
                            <ul>
                                <li>Our Mission</li>
                                <li>Meet The Team</li>
                                <li>Testimonials</li>
                                <li>Privacy POlicy</li>
                            </ul>
                        </div>
                        <div className={styles.three}>
                            <p>Support</p>
                                <ul>
                                    <li>FAQs</li>
                                    <li>Contact Us</li>
                                    <li>Terms of Service</li>
                                    <li>Help Center</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className={styles.footerContainer}>
                        <div className={styles.copyright}>
                            <p>Copyright 2023 Kidstot co. Ltd.All rights reserved</p>
                        </div>
                        <div className={styles.socialMedia}>
                            <div className={styles.linkedin}><img src={linkedIn} alt="" /></div>
                            <div className={styles.twitter}><img src={twitter} alt="" /></div>
                            <div className={styles.facebook}><img src={facebook} alt="" /></div>
                        </div>
                    </div>
                </footer>
            </div>
            </div>
    )
}
export default LandingPage;