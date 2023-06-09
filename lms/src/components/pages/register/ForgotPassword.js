import React from 'react'
import style  from './style.module.css'
import { Link } from 'react-router-dom'
// import { AiOutlineMail } from 'react-icons/ai';

export default function ForgotPassword() {
 
  return (
    <div className={style.container}>

        <header className={style.header}>
            <Link to="/"><img src="./img/logo.png" alt="logo" /></Link>
        </header>

        <div className={style.formSection}>

            <h2 className={style.heading}>reset password</h2>

            <p>Enter email address assocaited with your account and we will send you a link to reset your password</p>

            <form action="" className={style.signUpform}>
            
            <input type="email" name='email' placeholder='Email' required />


           

           
            <button className={style.signUpBtn} >Enter</button>
            </form>

            <div className={style.signUpOptions}>
              

              <div className={style.loginDiv}>
              <p>Don't have an account? <a href="./SignUp">Sign up</a></p>
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