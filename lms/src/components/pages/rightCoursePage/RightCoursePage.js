import React, { useState, useEffect} from "react";
import design from "../../images/design.png";
import chat from "../../images/chat.png";
import puzzle from "../../images/WordPuzzle.png";
import styles from "./RightCoursePage.module.css";
import axios from "axios";
// import { useParams } from "react-router-dom";


function RightCoursePage({courseItem}){

    // const { id } = useParams()
    const [items, setItems] = useState([]);

    let token = localStorage.getItem("token")
    // let studentId = localStorage.getItem("studentId")
     useEffect(() => {
       const url = `https://kidtots.onrender.com/student/leaderboard/${courseItem}`;
       axios
         .get(url, {
           headers: {
            "Authorization": `Bearer` + token,
             "Content-Type": "application/json",
           },
         })
         .then((res) => {
            console.log(res)
           const datas = res.data.data;
           setItems(datas);
         })
         .catch((error) => {
           if (error.response.status === 400) {
             // Handle error
           }
         });
     }, [token, courseItem]);

     console.log(items)

return(
    <>
        <div className={styles.rightCoursePageWrapper}>
            <div>
                <div id={styles.recent}>
                    <p>Recent Updates</p>
                    <a href="/error">More</a>
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
                    {
                        items.map(( item , index) =>
                        (
                        <div className={styles.rightSectionWrapper} key={index}>
                            <img src={item.imageUrl} alt="Child" />
                            <p>{item.name}</p>
                        </div>   
                        ))
                    }
                    {/* <div className={styles.rightSectionWrapper}>
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
                    </div> */}
                </div>
            </div>
        </div>
    </>
)
}
export default RightCoursePage;