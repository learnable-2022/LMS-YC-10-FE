import React from 'react'
import style  from './style.module.css'
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.png";

export default function CreateNewPassword() {
 
  return (
    <div className={style.container}>

        <header className={style.header}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </header>

        <div className={style.formSection}>

            <h2 className={style.heading}>reset password</h2>

            <p>Enter a new password</p>

            <form action="" className={style.signUpform}>
            
            <input type="password" name='password' placeholder='Password' required />
            <input type="password" name='confirm-password' placeholder='Confirm password' required />


           

           
            <button className={style.signUpBtn} >Enter</button>
            </form>

            <div className={style.signUpOptions}>
              

              <div className={style.loginDiv}>
              <p>Don't have an account? <Link to="/signUp">Sign up</Link></p>
              </div>
            </div>
        </div>

        <div className={style.vectors2}>
                <img src="./img/Vector-4.png" alt="" />
             
        </div>
        <div className={style.vectors2}>
                
                <img  src="./img/Vector-3.png" alt="" />
        </div>
    </div>
  )
}
