import React from 'react'
import style  from './style.module.css'
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>

        <header className={style.header}>
            <a href="./"><img src="./img/logo.png" alt="logo" /></a>
        </header>

        <div className={style.formSection}>

            <h2 className={style.heading}>sign up</h2>

            <p>Sign up with your email address used in joining the organisaton</p>

            <form action="" className={style.signUpform}>
            
            <input type="email" name='email' placeholder='Email' required />

            <div className={style.inputs}>

            <input type="text" name='fs-name' placeholder='First name' required />

            <input type="text" name='ls-name' placeholder='Last name' required />

            </div>

            <input type="password" name='password' placeholder='Password' required />
       
            <input type="password" name='confirm-password' placeholder='Confirm password' required />

            <div className={style.agreeTerms} >
             <input type="checkbox" name='terms_and_conditions' className={style.checkbox} required />
             <p>I agree with the terms and conditions</p>
            </div>

            <button href="/login" className={style.signUpBtn}>SIGN UP</button>
            </form>

            <div className={style.signUpOptions}>
              <div className={style.loginDiv}>
              <p>Registered already? <a href="/Login">Login</a></p>
              </div>
              

              <div className={style.or}>
                <hr /> <p>OR</p> <hr />
              </div>

             <div className={style.GMbtns}>
                <a href=""><img src="./img/google1.png" alt="Google" /></a>
                <a href=""><img src="./img/meta.svg" alt="Metamask" /></a>
             </div>

            </div>
        </div>

        <div className={style.vectors}>
                <img src="./img/Vector.png" alt="" />
             
        </div>
        <div className={style.vectors}>
                
                <img  src="./img/Vector-2.png" alt="" />
        </div>
    </div>
  )
}
