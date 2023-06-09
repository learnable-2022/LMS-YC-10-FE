import React from "react";
import styles from "./ErrorShow.module.css";
import pana from "../images/pana.png";
import { useNavigate } from "react-router-dom";
import LmsHeader from "../lmsHeader/LmsHeader";



export default function ErrorShow(props){

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
return(  
    <>
       <div className={styles.errorPageWrapper}>
            <div className={styles.lmsHeader}>
                <LmsHeader page="Error"/>
            </div>
            <div className={styles.errorBodyWrapper}>
                <p>We Sincerely apologize</p>
                <img src={pana} alt="error" /><br />
                <button onClick={goBack}>Back</button>
            </div>
        </div>
        {props.children}
    </>
)
} 