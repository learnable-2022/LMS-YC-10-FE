import React from 'react';
import style from '../styles/ComingSoon.module.css';
import Logo from "../images/Logo.png";
import coming from "../images/coming.png";
import girl from "../images/girlHero.svg";
import rect from "../images/Rectangle.png";import { useNavigate } from 'react-router-dom';
;



function ComingSoon() {
    const navigate = useNavigate()
    const back = () =>{
        navigate(-1)
    }
  return (
    <div className={style.comingWrapper}>
        <div className={style.logoWrapper}>
            <div className={style.logo}>
                <img src={Logo} alt="logo" />
            </div>
        </div>
        <div className={style.vector}>
            <img src={rect} alt='' />
        </div>
        <div className={style.comingBodyWrapper}>
            <div className={style.comingBody}> 
                <div className={style.firstSection}>
                    <img src={coming} alt='' />
                    <p>An Exciting New Page! Stay tuned for an enhanced user experience, packed with exciting features and valuable content. </p>
                    <p>Please visit it later</p>
                    <button type='button' onClick={back}>Back</button>
                </div>
                <div className={style.secondWrapper}>
                    <div className={style.imgWrapper}>
                        <img src={girl} alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComingSoon
