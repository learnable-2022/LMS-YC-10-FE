// import React from 'react'
// import style from '../styles/generalcoursepage.module.css';
// import LmsHeader from "../lmsHeader/LmsHeader";
// import { Link } from 'react-router-dom';
// import { IoIosArrowForward } from "react-icons/io";
// import axios from 'axios';


// export default function GeneralCoursePage() {

//     const getCourses = async (event) => {
//       const url = "https://kidtots.onrender.com/student/courses"
//         const token = localStorage.getItem('token');
//         const response = await axios.get(url, {
//         headers:{
        //              'Authorization': `Bearer ${token}`,
//        "Content-Type": "application/json",
        //  
//         }
//     })  
//         console.log(response);
//         const { items } = response.data;
//         const courses = items.map(({ CourseName, _id, FrontImage, Level, Length }) => {
//             return { CourseName, _id, FrontImage, Level, Length };
//         });
//         console.log(courses)
//     }
//         getCourses();

// return (
//     <div className={style.generalCourseWrapper}>
//         <div className={style.generalLmsHeader}>
//             <LmsHeader page="Courses"/>
//          </div>
//          <div className={style.generalCourseBodyWrapper}>

//                 <div className={style.courseDirectory}>
//                     <div>
//                         <Link to="/learningpath">
//                             <p >Course</p>
//                             <i><IoIosArrowForward /></i>
//                         </Link>
//                     </div>

//                     <div>
//                         <Link to="/courses">
//                             <p className={style.active} >Select a course</p>
//                             <i><IoIosArrowForward /></i>
//                         </Link>
//                     </div>
                    
//                     </div>
                    
//             {
//                 courses.map(({CourseName, _id, FrontImage, Level, Length }) =>{
//                     return(
//                         <>
//                             <div className={style.gridContainer}>
//                                 <Link to="/coursepage" style={{textDecoration: "none"}} key={_id}>
//                                 <div className={style.card}>
//                                     <img src={FrontImage} alt='' />
                                    
//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >{CourseName}</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>{Level}</p>
//                                             <p>{Length}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 </Link>
//                             </div>
//                     <div className={style.gridContainer}>

//                         <div className={style.gridItem}>
//                             <Link to='/coursepage' style={{ textDecoration: 'none' }} >
//                                 <div className={style.card}>

//                                     <img src="./img/image 24.png" alt="" />

//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >User interface and user experience design</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>Beginner</p>
//                                             <p>6 hours</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>


//                         <div className={style.gridItem}>
//                         <Link to='/coursepage' style={{ textDecoration: 'none' }} >
//                                 <div className={style.card}>

//                                     <img src="./img/image 25.png" alt="" />

//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >Hardware and maintenance</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>Beginner</p>
//                                             <p>4 hours</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>

//                         <div className={style.gridItem}>
//                         <Link to='/coursepage' style={{ textDecoration: 'none' }} >
//                                 <div className={style.card}>

//                                     <img src="./img/image 26.png" alt="" />

//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >Software development</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>Beginner</p>
//                                             <p>7 hours</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>


//                         <div className={style.gridItem}>
//                         <Link to='/coursepage' style={{ textDecoration: 'none' }} >
//                                 <div className={style.card}>

//                                     <img src="./img/image 32.png" alt="" />

//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >Graphics and product design</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>Intermediate</p>
//                                             <p>9 hours</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>

//                         <div className={style.gridItem}>
//                         <Link to='/coursepage' style={{ textDecoration: 'none' }} >
//                                 <div className={style.card}>

//                                     <img src="./img/image 30.png" alt="" />

//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >Artficial Intelligence and machine learning</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>Intermediate</p>
//                                             <p>9 hours</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>

//                         <div className={style.gridItem}>
//                         <Link to='/coursepage' style={{ textDecoration: 'none' }} >
//                                 <div className={style.card}>

//                                     <img src="./img/image 30.png" alt="" />

//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >Science</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>Intermediate</p>
//                                             <p>5 hours</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>

//                         <div className={style.gridItem}>
//                         <Link to='/coursepage' style={{ textDecoration: 'none' }} >
//                                 <div className={style.card}>

//                                     <img src="./img/image 23.png" alt="" />

//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >Graphics and product design</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>Advanced</p>
//                                             <p>13 hours</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>

//                         <div className={style.gridItem}>
//                         <Link to='/coursepage' style={{ textDecoration: 'none' }} >
//                                 <div className={style.card}>

//                                     <img src="./img/image 21.png" alt="" />

//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >Artificial intellengence and machine learning</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>Advanced</p>
//                                             <p>10 hours</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>

//                         <div className={style.gridItem}>
//                         <Link to='/coursepage' style={{ textDecoration: 'none' }} >
//                                 <div className={style.card}>

//                                     <img src="./img/image 22.png" alt="" />

//                                     <div className={style.details}>
//                                         <div className={style.left}>
//                                             <p>Course</p>
//                                         </div>
//                                         <div className={style.left}>
//                                                 <p style={{color: 'white'}} >Science</p>
//                                         </div>
//                                         <div className={style.footer}>
//                                             <p>Advanced</p>
//                                             <p>12 hours</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                     </>
//                     )
//                 })
//             }
//         </div>
//     </div>
//   )
// }
