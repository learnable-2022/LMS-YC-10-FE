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
                <h1>About Us</h1>
                <div className={styles.aboutUsBodyWrapper}>
                    <div className={styles.aboutUsBodyText}>
                        <h4>KidsTot is one of the world’s largest LMS platform for kids</h4>
                        <p>We leverage open-source software to deliver a highly effective, 
                            customized, and engaging learning experience.</p>
                        <div className={styles.firstSection}>
                            <img src={Image} alt="Kids" />
                            <h3>Making Knowledge a lifestyle, one kid at a time</h3>
                        </div>
                        <div className={styles.secondSection}>
                            <p>We have efficiently supported educational institutions and companies with a suite of technology and 
                                a level of customer service that allows Learning and Development professionals, LMS administrators and instructors to focus on creating 
                                quality learning and an engaging learning experience that allows both learners and stakeholders to enjoy learning and track learning result.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.thirdSection}>
                    <div className={styles.thirdSubSection}>
                        <h3>Explore our products</h3>
                        <p>KidsTot provides world-class LMS solutions that  empower organizations to meet educational needs of kids. Get in touch to find out more.</p>
                        <button>Get in Touch</button>
                    </div>
                </div>
                <div className={styles.fourthSection}>
                    <div  className={styles.fourthSubSection}>
                            <div>
                                <h3>Our Mission</h3>
                                <p>Our goal is to inspire young brains by offering a cutting-edge and interesting learning management system. We want kid to develop 
                                    a passion for learning, stimulate creativity, and develop critical thinking abilities. Through our platform, 
                                    we seek to establish an encouraging and welcoming learning atmosphere where each child can realize their potential 
                                    and flourish following the popular saying, <em>‘Catch them young’</em>.</p>
                            </div>
                            <div>
                                <h3>Improving lives through learning</h3>
                                <p>Whether you want to learn or share what you know, you’ve come to the right place. As a global destination for online learning, 
                                    we connect kids through knowledge. Whatever your learning style, we have a course that fits.</p>
                            </div>
                            <div className={styles.fifthSection}>
                                <h3>Our Partners</h3>
                                <div>
                                    <img src={Genesys} alt="Genesys" />
                                    <img src={Codeville} alt="Codeville" />
                                    <img src={Learnable} alt="Learnable" />
                                    <img src={Tenece} alt="Tenece" />
                                    <img src={Greenspring} alt="Greenspring" />
                                </div>
                            </div>
                            <div className={styles.sixthSection}>
                                <div>
                                    <h4>Work with us</h4>
                                    <p>At KidsTots,  we are all learners. We create a 
                                        culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                                    <button><a href="https://">Join Us</a></button>
                                </div>
                                <div>
                                    <h4>See our testimonials</h4>
                                    <p>Want to know what we’ve been up to lately? Check out 
                                        what our students has to say about our program.</p>
                                    <button><a href="https://">Read More</a></button>
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