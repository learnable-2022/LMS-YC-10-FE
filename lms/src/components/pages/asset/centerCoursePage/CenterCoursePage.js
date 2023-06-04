import React from "react";
import styles from "./CenterCoursePage.module.css"
import CourseList from "../courseList/CourseList";
import Card from "../card/Card";
import { GrGroup } from "react-icons/gr";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";




function CenterCoursePage(){
return(
    <>
        <div className={styles.centerCoursePageWrapper}>
            <div className={styles.centerPage}>
                <p>The complete  6- weeks UI/UX design skill learning</p>
                <div className={styles.firstCenterSection}>
                    <div>
                        <i><BsStarFill /></i>
                        <p className={styles.firstSectionText}>#1 out of 7 in-demand careers in the global job market(2021 rating)</p>
                    </div>
                    <div>
                        <i><GrGroup /></i>
                        <p className={styles.firstSectionText}>1000 Learners enrolled</p>
                    </div>
                </div>
                    <p>Our 6- weeks UI/UX design skill course equips learners with the essential skills to 
                        become world-class designers. Our exponential instructors provide hands-on learning 
                        opportunities to design and prototype digital products, conduct user, flows and wire frames research</p>
                    <div>
                        <ol>COURSE OVERVIEW
                            <li>Understand the definition and principles of UI/UX Design in order to design with intention.</li>
                            <li>Achieve a deep understanding of the entire life-cycle of design—the process, purpose, and tools.</li>
                            <li>Learn the basics of HCI (human-computer interaction) and the psychology behind user decision-making.</li>
                            <li>Discover the industry-standard tools and specific project deliverables in UI/UX.</li>
                            <li>Explain why you made design decisions, through presentations of assignments and your personal portfolio.</li>
                            <li>Eligibility</li>
                        </ol>
                    </div>
                    <h5>Course content</h5>
                    <span>
                        <p>41 sections-</p>
                        <p>490 lectures-</p>
                        <p>65hours 33 minutes total length</p>
                        <p>Expand all sections</p>
                    </span>
                    <div>
                        <span>
                            <i><RiArrowDownSLine /></i>
                            <p>Week 1- Beginner- Introduction to UX designing</p>
                        </span>
                        <div>
                            <CourseList />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>SKILLS TO GAIN</h3>
                            <ul>
                                <li>Figma and Adobe XD</li>
                                <li>User Experience (UX)</li>
                                <li>Usablity Testing</li>
                                <li>Prototype</li>
                                <li>User Experience Design (UXD)</li>
                            </ul>
                        </div>
                        <div>
                            <Card />
                        </div>
                    </div>
            </div>
        </div>
    </>
)
}
export default CenterCoursePage;