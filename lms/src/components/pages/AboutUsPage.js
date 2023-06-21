import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "../styles/AboutUsPage.module.css";
import Image from "../images/AboutUsImg.png";
import Genesys from "../images/Logo side 1.png";
import Codeville from "../images/Codeville.png";
import Tenece from "../images/Tenece - jpeg.png"
import Greenspring from "../images/Greensprings School - jpeg.png";
import Learnable from "../images/Learenable.png"






function AboutUs(){
return(
    <>
        <div>
            <div>
                <Header />
            </div>  
            <div className={styles.aboutUsBody}>
                <div className={styles.aboutUsTitle}>
                    <h1>About Us</h1>
                </div>
                <div className={styles.aboutUsBodyWrapper}>
                    <div className={styles.aboutUsBodyText}>
                        <p className={styles.textP}>KidsTot is one of the world’s largest LMS platform for kids. We leverage open-source software to deliver a highly effective, 
                            customized, and engaging learning experience.</p>
                    </div>
                </div>
                <div className={styles.firstSection}>
                    <div>
                        <img src={Image} alt="Kids" />
                        <h2>Making Knowledge a lifestyle, one kid at a time</h2>
                    </div>
                </div>
                <div className={styles.secondSection}>
                    <div>
                        <p>We have efficiently supported educational institutions and companies with a suite of technology and 
                        a level of customer service that allows Learning and Development professionals, LMS administrators and
                        instructors to focus on creating quality learning and an engaging learning experience that allows both 
                        learners and stakeholders to enjoy learning and track learning result.</p>
                    </div>
                </div>
                <div className={styles.thirdSection}>
                    <div className={styles.thirdSubSection}>
                        <h2>Explore our products</h2>
                        <p>KidsTot provides world-class LMS solutions that  empower organizations to meet educational needs of kids. Get in touch to find out more.</p>
                        <button>Get in Touch</button>
                    </div>
                </div>
                <div className={styles.fourthSection}>
                    <div  className={styles.fourthSubSection}>
                            <div>
                                <h2>Our Mission</h2>
                                <p>Our goal is to inspire young brains by offering a cutting-edge and interesting learning management system. We want kid to develop 
                                    a passion for learning, stimulate creativity, and develop critical thinking abilities. Through our platform, 
                                    we seek to establish an encouraging and welcoming learning atmosphere where each child can realize their potential 
                                    and flourish following the popular saying, <strong>‘Catch them young’</strong>.</p>
                            </div>
                            <div>
                                <h2>Improving lives through learning</h2>
                                <p>Whether you want to learn or share what you know, you’ve come to the right place. As a global destination for online learning, 
                                    we connect kids through knowledge. Whatever your learning style, we have a course that fits.</p>
                            </div>
                            <div className={styles.fifthSection}>
                                <h2>Our Partners</h2>
                                <div>
                                    <img src={Genesys} alt="Genesys" />
                                    <img src={Codeville} alt="Codeville" />
                                    <img src={Learnable} alt="Learnable" />
                                    <img src={Tenece} alt="Tenece" />
                                    <img src={Greenspring} alt="Greenspring" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            <div>
                <Footer />
            </div>      
        </div>
    </>
)
}
export default AboutUs