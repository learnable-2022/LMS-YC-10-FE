import React from 'react'
import style  from './style.module.css'
import { AiOutlineMail } from 'react-icons/ai';

export default function Login() {
 
  return (
    <div className={style.container}>

        <header className={style.header}>
            <a href="./"><img src="./img/logo.png" alt="logo" /></a>
        </header>

        <div className={style.formSection}>

            <h2 className={style.heading}>Login</h2>

            <p>Sign in with your email address used in joining the organisaton</p>

            <form action="" className={style.signUpform}>
            
            <input type="email" name='email' placeholder='Email' required />


            <input type="password" name='password' placeholder='Password' required />

            <div className={style.fgPwdRPwsd} >

            <a href="/forgotpassword">Forgotten password?</a>

             <div className={style.checkbox}>
             <input type="checkbox" name='remember-password' />
             <p>Remember me</p>
             </div>

            </div>

            <button className={style.signUpBtn} >LOGIN</button>
            </form>

            <div className={style.signUpOptions}>
              
            
              <div className={style.or}>
                <hr /> <p>OR</p> <hr />
              </div>

              <div className={style.loginDiv}>
              <p>Don't have an account? <a href="/accounttype">Sign up</a></p>
              </div>

             <div className={style.GMbtns}>
                <a href=""><img src="./img/google1.png" alt="Google" /></a>
                <a href=""><img src="./img/meta.svg" alt="Metamask" /></a>
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
