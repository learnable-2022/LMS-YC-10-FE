import React from "react";
import styles from '../styles/LandingPage.module.css'
import girlHero from '../images/girlHero.svg'
import genesysLogo from '../images/Logo side 1.png'
import codevilleLogo from '../images/Codeville.png'
import learnableLogo from '../images/Learenable.png'
import teneceLogo from '../images/Tenece - jpeg.png'
import emblem from '../images/Greensprings School - jpeg.png'
import webCourse from '../images/webCourse.svg'
import roboticsCourse from '../images/roboticsCourse.svg'
import uiCourse from '../images/uiCourse.svg'
import scienceCourse from '../images/scienceCourse.svg'
import instructor from '../images/instructor.svg'
import liveClasses from '../images/liveClasses.svg'
import oneSupport from '../images/oneSupport.svg'
import messageIcon from '../images/messageIcon.svg'
import Header from '../header/Header'
import Footer from "../footer/Footer"
import { Link } from "react-router-dom";
// import CarouselObject from "./carousel/CarouselItem";
import CarouselItem from "./carousel/CarouselItem";


function LandingPage(){
    
  
    return (
        <div>
            <div>
                <div className={styles.navContainer}>
                        <Header />
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
                        <Link to="/login" className={styles.getStarted}>Get Started</Link>
                        <Link to="/error" className={styles.explore}>Explore Courses</Link>
                    </div>
                </div>
                <div className={styles.landingPageBody}>
                    <div className={styles.landingPageBodyWrapper}>
                        <div className={styles.partnerWrapper}>
                            <h1>Our Partners</h1>
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
                            </div>
                        </div>
                        <div className={styles.unlockTextWrapper}>
                            <div className={styles.unlockPWrapper}>
                                <p>Easily upload and manage
                                    your courses for free, engage with students,
                                    and track your progress. Join our community 
                                    of tutors today for free and
                                    start sharing your expertise with the world!</p>
                                <div className={styles.trialPlans}>
                                    <div className={styles.trial}>
                                        <Link to="/login" className={styles.getStarted}>Start For Free</Link>
                                    </div>
                                    <div className={styles.plans}>
                                        <Link to="/error">View All Plans</Link>
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
                    </div>
                </div>
                        <div className={styles.clientsWrapper}>
                            <div className={styles.clientsContainer}>
                                <div>
                                    <h1>Our Happy Clients</h1>
                                </div>
                                <div className={styles.clients}>
                                    <div className={styles.clientcomment}>
                                        <p className={styles.clientcommentP}>"The KidsTot program has been a
                                            lucrative opportunity for
                                            me as a tutor. Its demand
                                            and effectiveness in
                                            supporting students' 
                                            learning journey have 
                                            allowed me to earn a substantial 
                                            income. I'm grateful for the financial 
                                            rewards that come from making a positive
                                            impact on children's education."</p>
                                    </div>
                                    <div className={styles.triangleDownWrapper}>
                                        <div className={styles.triangleDown}></div>
                                    </div>
                                </div>
                                    <div className={styles.clientProfile}>
                                        <div className={styles.clientAct}>
                                            <CarouselItem />
                                        </div>
                                    </div>
                            </div>
                        </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default LandingPage;