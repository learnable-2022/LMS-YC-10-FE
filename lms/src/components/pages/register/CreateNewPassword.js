import React from 'react'
import style  from './style.module.css'
import { AiOutlineMail } from 'react-icons/ai';

export default function CreateNewPassword() {
 
  return (
    <div className={style.container}>

        <header className={style.header}>
            <a href="./"><img src="./img/logo.png" alt="logo" /></a>
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