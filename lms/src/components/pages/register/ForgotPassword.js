import React, { useState } from 'react'
import style  from './style.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function ForgotPassword() {
  const [email, setEmail] = useState("");


  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      email: email,
  
    }
    const url = "https://kidtots.onrender.com/student/forgot-password"
      axios.post(url, data, {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
       }).then((response) =>{
        console.log(response)

       })

  }
 
  return (
    <div className={style.container}>

        <header className={style.header}>
            <Link to="/"><img src="./img/logo.png" alt="logo" /></Link>
        </header>

        <div className={style.formSections}>

            <h2 className={style.heading}>reset password</h2>

            <p>Enter email address assocaited with your account and we will send you a link to reset your password</p>

            <form action="" className={style.signUpform} onSubmit={handleSubmit}>
            
            <input type="email" name='email' placeholder='Email' required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"/>


           

           
            <button type='submit' className={style.signUpBtn} >Enter</button>
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