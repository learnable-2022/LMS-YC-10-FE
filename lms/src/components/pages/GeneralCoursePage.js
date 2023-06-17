import React, { useState, useEffect } from 'react';
import style from '../styles/generalcoursepage.module.css';
import LmsHeader from "../lmsHeader/LmsHeader";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';

export default function GeneralCoursePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "https://kidtots.onrender.com/student/courses";
    axios.get(url, {
      headers: {
        
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
console.log(items)
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
              <Link to="/courses">
                <p className={style.active}>Select a course</p>
                <i><IoIosArrowForward /></i>
              </Link>
            </div>
          </div>
         
            <div className={style.gridContainer} >
            {items.map((data) => (
              <div className={style.gridItem} key={data._id}>
                <Link to='/coursepage' style={{ textDecoration: 'none' }} >
                    <div className={style.card}>

                        <img src={data.FrontImage} alt="" />

                            <div className={style.details}>
                                <div className={style.left}>
                                    <p>Course</p>
                                </div>
                                <div className={style.left}>
                                    <p style={{color: 'white'}} >{data.CourseName}</p>
                                </div>
                                <div className={style.footer}>
                                    <p>{data.Level}</p>
                                    <p>{data.Length}</p>
                                </div>
                            </div>
                    </div>
                </Link>
                </div>
                  ))}
            </div>
        </div>
      </div>

  );
}



