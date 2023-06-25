import React, { useState, useEffect, useContext } from 'react';
import style from '../styles/generalcoursepage.module.css';
import LmsHeader from "../lmsHeader/LmsHeader";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import PopUp from '../popUpSideBar/PopUp';
import { GiCancel } from "react-icons/gi"
import { UserContext } from '../../utils/UserContext';



export default function GeneralCoursePage() {

  const { select } = useParams();
  const user = useContext(UserContext)

  

  const [items, setItems] = useState([]);
  const [continueItems, setContinueItems] = useState([]);

  const navigate = useNavigate()

  const [showBar, setShowBar] = useState(false)

  const token = user.userData.token

  const showPop = () =>{
      setShowBar(!showBar)
  }


 
  useEffect(() => {
    if(select === "continue"){

      const continueCourses = async () =>{ 
        const url = "https://kidtots.onrender.com/student/student-courses"
        // axios.defaults.withCredentials = true;
        await axios.get(url, {
            headers:{
              "Authorization": "Bearer " + token,
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
           }).then((response) =>{
            if(response.status === 200){
              const list = response.data.data;
              setContinueItems(list);

            }
           })
    
      }
      continueCourses()
    }else if(select === "start"){
      const getAllCourse = async () =>{
        const url = "https://kidtots.onrender.com/student/courses";
        // axios.defaults.withCredentials = true;
      await axios
          .get(url, {
            headers: {
              "Authorization": "Bearer " + token,
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if(res.status === 200){
              const datas = res.data.data;
              setItems(datas);
            }

          })
          .catch((error) => {
            if (error.response.status === 400) {
              // Handle error
            }
          });
      }
      getAllCourse()
      }

    }, [token, select]);







  const startCourse = async (e) =>{

  const url = `https://kidtots.onrender.com/student/courses/start/${e}`;
  axios.defaults.withCredentials = true;
   await axios
      .get(url, {
        headers: {
          "Authorization": "Bearer " + token,
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
            <Link to={`/learningpath/courses/${select}`}>
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
              <div  style={{ textDecoration: 'none' }}
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




