import React from "react";
import kid1 from "../../images/kid1.png";
import kid2 from "../../images/kid2.png";
import kid3 from "../../images/kid3.png";
import kid4 from "../../images/kid4.png";
import design from "../../images/design.png";
import chat from "../../images/chat.png";
import puzzle from "../../images/WordPuzzle.png";
import styles from "./RightCoursePage.module.css";



function RightCoursePage(){
return(
    <>
        <div className={styles.rightCoursePageWrapper}>
            <div>
                <div id={styles.recent}>
                    <p>Recent Updates</p>
                    <a href="https://">More</a>
                </div>
                <div className={styles.recentSection1}>
                    <img src={design} alt="Course" />
                    <p>Principle Of Design</p>
                </div>
                <div className={styles.recentSection2}>
                    <img src={puzzle} alt="Game" />
                    <p>Python Word Puzzle</p>
                </div>
                <div className={styles.recentSection3}>
                    <img src={chat} alt="Chat" />
                    <p>Chat</p>
                </div>
            </div>
            <div>
                <div  className={styles.rightSectionHeader}>
                    <p>Learners on the Course</p>
                    <a href="https://">More</a>
                </div>
                <div className={styles.participants}>
                    <div className={styles.rightSectionWrapper}>
                        <img src={kid1} alt="Child" />
                        <p>Perpee James</p>
                    </div>
                    <div className={styles.rightSectionWrapper}>
                        <img src={kid2} alt="Child" />
                        <p>Queen Kings</p>
                    </div>
                    <div className={styles.rightSectionWrapper}>
                        <img src={kid3} alt="Child" />
                        <p>Stanley Okeke</p>
                    </div>
                    <div className={styles.rightSectionWrapper}>
                        <img src={kid4} alt="Child" />
                        <p>Ifeanyi Okereke</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default RightCoursePage;