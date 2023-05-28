import React from "react";
import styles from '../styles/OurMissionPage.module.css';
import Footer from "../footer/Footer";
import Header from "../header/Header";


function OurMission(){

    return(
        <>
            <div>
                <Header />
                <div className={styles.headerTitle}>
                    <h2>Our Mission</h2>
                </div>
                <div className={styles.ourMission}>
                    <div>
                        <div>
                        <p>
                        Our goal is to inspire young brains by offering a cutting-edge and interesting learning 
                        management system. We want kid to develop a passion for learning, 
                        stimulate creativity, and develop critical thinking abilities. Through our platform, 
                        we seek to establish an encouraging and welcoming learning atmosphere where each child can realize 
                        their potential and flourish.
                        </p>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default OurMission