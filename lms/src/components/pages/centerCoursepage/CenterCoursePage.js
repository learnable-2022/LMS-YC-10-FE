import React from "react";
import coursestyles from "./CenterCoursePage.module.css"
import CourseList from "../courseList/CourseList";
import Card from "../card/Card";
import { GrGroup } from "react-icons/gr";
import { BsStarFill } from "react-icons/bs";



function CenterCoursePage({courseItem}){
    // console.log(props)
    // console.log(courseItem)

 
return(
    <>
        <div className={coursestyles.centerCoursePageWrapper}>
            <div className={coursestyles.centerPage}>
                <p className={coursestyles.centerPageText}>{courseItem.CourseName}</p>
                <div className={coursestyles.firstCenterSection}>
                    <div id={coursestyles.div1}>
                        <i><BsStarFill /></i>
                        <p className={coursestyles.firstSectionText}>#1 out of 7 in-demand careers in the global job market(2021 rating)</p>
                    </div>
                    <div id={coursestyles.div}>
                        <i><GrGroup /></i>
                        <p className={coursestyles.firstSectionText2}>1000 Learners enrolled</p>
                    </div>
                </div>
                    <div className={coursestyles.secondSection}>
                    <p className={coursestyles.secondSectionText}>{courseItem.Description}</p>
                    </div>
                    <div className={coursestyles.thirdSection}>
                        <ol><p>COURSE OVERVIEW</p>
                            <li>Understand the definition and principles of UI/UX Design in order to design with intention.</li>
                            <li>Achieve a deep understanding of the entire life-cycle of design—the process, purpose, and tools.</li>
                            <li>Learn the basics of HCI (human-computer interaction) and the psychology behind user decision-making.</li>
                            <li>Discover the industry-standard tools and specific project deliverables in UI/UX.</li>
                            <li>Explain why you made design decisions, through presentations of assignments and your personal portfolio.</li>
                            <li>Eligibility</li>
                        </ol>
                    </div>
                    <p className={coursestyles.pTag}>Course content</p>
                    <span className={coursestyles.courseSummary}>
                        <div>
                            <p>{`${courseItem.Modules.length} sections-`}</p>
                            <p>{`${courseItem.Modules.length * 2} lectures-`}</p>
                            <p>{`${courseItem.Length} total length`}</p>
                        </div>
                        <p>Expand all sections</p>
                    </span>
                    <div className={coursestyles.fourthSection}>
                        <div>
                            <CourseList items={courseItem.Modules}/>
                        </div>
                    </div>
                    <h3 className={coursestyles.h3}>SKILLS TO GAIN</h3>
                    <div className={coursestyles.centerFooter}>
                        <div>
                            <ul>
                                <li>Figma and Adobe XD</li>
                                <li>User Experience (UX)</li>
                                <li>Usablity Testing</li>
                                <li>Prototype</li>
                                <li>User Experience Design (UXD)</li>
                            </ul>
                        </div>
                        <div className={coursestyles.centerFooterLastSection}>
                            <Card />
                        </div>
                    </div>
            </div>
        </div>
    </>
)
}
export default CenterCoursePage;