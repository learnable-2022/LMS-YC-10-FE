import React, { useEffect, useState } from "react";
import mystyles from "../styles/CoursePage.module.css";
import { IoIosArrowForward } from "react-icons/io";
import CenterCoursePage from "../pages/centerCoursepage/CenterCoursePage";
import RightCoursePage from "../pages/rightCoursePage/RightCoursePage";
import { Link, useNavigate, useParams } from "react-router-dom";
import LmsHeader from "../lmsHeader/LmsHeader";
import axios from "axios";



function CoursePage() {
    const { id } = useParams();

    const { start } = useParams()
    const { continueCourse } = useParams();
    const [page, setPage ] = useState('')

    if(start === "start" && continueCourse === ""){
        setPage(start)
      }else if(start === "" && continueCourse === "continue"){
        setPage(continueCourse)
      }
     

    const navigate = useNavigate()
    const [items, setItems] = useState([]);

        let token = localStorage.getItem("token")
        useEffect(() => {
            const getData = async () =>{
                const url = `https://kidtots.onrender.com/student/courses/get-single/${id}`;
            await axios.get(url, {
                  headers: {
                    "Authorization": `Bearer` + token,
                    "Content-Type": "application/json",
                  }
                }).then((res) => {
                  const datas = res.data.data;
                  setItems(datas);
                }).catch((error) => {
                if(error.status === 400){
            
                }
                });
            }
            getData()
        }, [id, token]);
        

return(
    <>
    { items?
    <div className={mystyles.coursePageWrapper} >
        <div className={mystyles.courseLmsHeader}>
            <LmsHeader page="Courses"/>
        </div>
            <div className={mystyles.courseHeaderWrapper}>
                <div className={mystyles.bodyWrapper}>
                    <div>
                        <div className={mystyles.courseDirectory}>
                            <div>
                                <Link to="/learningpath">
                                    <p>Course</p>
                                    <i><IoIosArrowForward /></i>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/learningpath/courses/${page}`}>
                                    <p>Select a course</p>
                                    <i><IoIosArrowForward /></i>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/learningpath/courses/${id}`} >
                                    <p className={mystyles.active}>{items.CourseName}</p>
                                    <i></i>
                                </Link>
                            </div>
                        </div>
                        <div className={mystyles.courseBody}>
                            <div className={mystyles.centerCoursePage}>
                                <CenterCoursePage courseItem={items}/>
                            </div>
                            <div>
                                <RightCoursePage courseItem={items._id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    : navigate("/error")
    }
    </>
)
}
export default CoursePage;