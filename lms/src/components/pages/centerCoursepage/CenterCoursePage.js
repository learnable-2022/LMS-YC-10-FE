import React, { useEffect, useState } from "react";
import coursestyles from "./CenterCoursePage.module.css"
import CourseList from "../courseList/CourseList";
import Card from "../card/Card";
import { GrGroup } from "react-icons/gr";
import { BsStarFill } from "react-icons/bs";
import axios from "axios";



function CenterCoursePage(props){
    console.log(props)
    const [items, setItems] = useState([]);
        // localStorage.getItem(token)

            useEffect(() => {
          const url = "https://kidtots.onrender.com/student/courses/:courseid";
          axios.get(url, {
            headers: {
            //   "Authorization": ` Bearer`,
            // Authorization: "Bearer " + e,
              "Content-Type": "application/json",
            }
          }).then((res) => {
            const datas = res.data.data;
            setItems(datas);
          }).catch((error) => {
          if(error.response.status === 400){
      
          }
          });
        }, []);
return(
    <>
        <div className={coursestyles.centerCoursePageWrapper}>
            <div className={coursestyles.centerPage}>
                <p className={coursestyles.centerPageText}>The complete  6- weeks UI/UX design skill learning</p>
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
                    <p className={coursestyles.secondSectionText}>Our 6- weeks UI/UX design skill course equips learners with the essential skills to 
                        become world-class designers. Our exponential instructors provide hands-on learning 
                        opportunities to design and prototype digital products, conduct user, flows and wire frames research</p>
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
                            <p>41 sections-</p>
                            <p>490 lectures-</p>
                            <p>65hours 33 minutes total length</p>
                        </div>
                        <p>Expand all sections</p>
                    </span>
                    <div className={coursestyles.fourthSection}>
                        <div>
                            <CourseList />
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