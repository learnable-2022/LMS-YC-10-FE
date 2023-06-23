import React, { useState, useEffect } from 'react';
import style from '../styles/generalcoursepage.module.css';
import LmsHeader from "../lmsHeader/LmsHeader";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import PopUp from '../popUpSideBar/PopUp';
import { GiCancel } from "react-icons/gi"



export default function GeneralCoursePage() {

  const { start } = useParams()

  const { continueCourse } = useParams();


  const [items, setItems] = useState([]);

  const [continueItems, setContinueItems] = useState([]);

  const navigate = useNavigate()

  const [showBar, setShowBar] = useState(false)

  const [page, setPage ] = useState('')
  let token = localStorage.getItem("token")


  const showPop = () =>{
      setShowBar(!showBar)
  }


  if(start === "start" && continueCourse === ""){
    setPage(start)
  }else if(start === "" && continueCourse === "continue"){
    setPage(continueCourse)
  }
 
  useEffect(() => {
    if(start === "start" && continueCourse !== "continue"){
      const getAllCourse = async () =>{
        const url = "https://kidtots.onrender.com/student/courses";
      await axios
          .get(url, {
            headers: {
              "Authorization": "Bearer" + token,
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            const datas = res.data.data;
            setItems(datas);
          })
          .catch((error) => {
            if (error.response.status === 400) {
              // Handle error
            }
          });
      }
      getAllCourse()
      }
      if(continueCourse === "continue" && start !== "start"){
        console.log(continueCourse)
        const continueCourses = async () =>{ 
          const url = "https://kidtots.onrender.com/student/student-courses"
          await axios.get(url, {
              headers:{
                "Authorization": "Bearer" + token,
                "Content-Type": "application/json",
                "Accept": "application/json"
              }
             }).then((response) =>{
              const list = response.data.data;
              console.log(response)
              setContinueItems(list);
             })
      
        }
        continueCourses()
      }
    }, [token, start, continueCourse]);



  const startCourse = async (e) =>{
    // console.log(e)

  const url = `https://kidtots.onrender.com/student/courses/start/${e}`;
   await axios
      .get(url, {
        headers: {
          "Authorization": "Bearer" + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if(res.status === 200){
          setShowBar(!showBar)
          navigate(`/learningpath/courses/${e}`)
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          // Handle error
        }
      });

}

  return (
    <div className={style.generalCourseWrapper}>
      <div className={style.generalLmsHeader}>
        <LmsHeader page="Courses" />
      </div>
      <div className={style.generalCourseBodyWrapper}>
        <div className={style.courseDirectory}>
          <div>
            <Link to="/learningpath">
              <p>Course</p>
              <i><IoIosArrowForward /></i>
            </Link>
          </div>
          <div>
            <Link to={`/learningpath/courses/${page}`}>
              <p className={style.active}>Select a course</p>
              <i><IoIosArrowForward /></i>
            </Link>
          </div>
        </div>
        <div className={style.gridContainer}>
          { items?
          items.map((data) => (
            <div
              className={style.gridItem}
              key={data._id}
            >
              <div style={{ textDecoration: 'none' }}
              onClick={showPop} 
              >
                <div className={style.card}>
                  <img src={data.FrontImage} alt="" />
                  <div className={style.details}>
                    <div className={style.left}>
                      <p>Course</p>
                    </div>
                    <div className={style.left}>
                      <p style={{ color: 'white' }}>{data.CourseName}</p>
                    </div>
                    <div className={style.footer}>
                      <p>{data.Level}</p>
                      <p>{data.Length}</p>
                    </div>
                  </div>
                </div>
              </div>
              <PopUp trigger={showBar}>
                <div className={style.startWrapper}>
                  <div className={style.startBody}>
                      <div>
                          <i onClick={showPop}><GiCancel /></i>
                                        <h1>Do you want to start this course?</h1>                          
                                    </div>
                                    <div className={style.buttonsWrapper}>
                                      <div className={style.btnWrapperr}>
                                      <div className={style.startBtn}>
                                    <button type='button' onClick={() => startCourse(data._id)}>Yes</button>
                                    </div>
                                  <div className={style.noBtn}>
                                <button type='button' onClick={showPop}>No</button>
                            </div>
                        </div>
                        </div>
                      </div>
                  </div>
                </PopUp>
            </div>
          ))
        : continueItems?          
        continueItems.map((data) => (
          <div
            className={style.gridItem}
            key={data._id}
          >
            <Link to={`/learningpath/courses/${data._id}`}
             style={{ textDecoration: 'none' }}>
              <div className={style.card}>
                <img src={data.FrontImage} alt="" />
                <div className={style.details}>
                  <div className={style.left}>
                    <p>Course</p>
                  </div>
                  <div className={style.left}>
                    <p style={{ color: 'white' }}>{data.CourseName}</p>
                  </div>
                  <div className={style.footer}>
                    <p>{data.Level}</p>
                    <p>{data.Length}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
        : !continueItems && !items?
        <div>
          <h1>No Courses</h1>
        </div>: ""
        }
        </div>

      </div>
    </div>
  );
}




