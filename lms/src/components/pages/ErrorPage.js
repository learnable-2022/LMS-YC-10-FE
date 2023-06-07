import React from "react";
import styles from "../styles/ErrorPage.module.css";
import pana from "../images/pana.png";
// import { Link } from "react-router-dom";
import Logo from "../images/Logo.png"
import { useNavigate } from "react-router-dom";



export default function Error(){

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

return(
    <>
        <div className={styles.errorPageWrapper}>
            <div className={styles.logoWrapper}>
                <img src={Logo} alt="logo" />
            </div>
            <div className={styles.errorBodyWrapper}>
                <p>We Sincerely apologize</p>
                <img src={pana} alt="error" /><br />
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    </>
)
} 