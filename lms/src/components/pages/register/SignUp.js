import React, { useEffect, useState } from 'react'
import style  from './style.module.css'
// import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





export default function SignUp() {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password_confirm, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // new state

 const userName = `${firstName} ${lastName}`

  const handleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: userName,
      email: email,
      password: password,
      password_confirm: password_confirm
    }
  const url = "https://kidtots.onrender.com/student/"

     axios.post(url, data, {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
     }).then((response) =>{
      console.log(response);
    },(error) =>{
      console.log(error)
    }); 
 

      
console.log(data)



    if(password !== password_confirm){
      alert("Password is not the same");
      return;
    }


    if (!termsAccepted) {
      alert("Please accept the terms and conditions to continue.");
      return;
    }else{
      alert(`Welcome ${firstName} ${lastName}`);
      return
    }
    // code to handle sign-up form submission
    // console.log("User signed up successfully!");
  };






  const navigate = useNavigate();
return (
    <div className={style.container}>

        <header className={style.header}>
            <a href="./"><img src="./img/logo.png" alt="logo" /></a>
        </header>

        <div className={style.formSection}>

            <h2 className={style.heading}>sign up</h2>

            <p>Sign up with your email address used in joining the organisaton</p>

            <form action="" className={style.signUpform} onSubmit={handleSubmit}>
            
            <input type="email" name='email' placeholder='Email' required value={email} onChange={(event) => setEmail(event.target.value)}/>

            <div className={style.inputs}>

            <input type="text" name='fs-name' placeholder='First name' required value={firstName} onChange={(event) => setFirstName(event.target.value)}/>

            <input type="text" name='ls-name' placeholder='Last name' required value={lastName} onChange={(event) => setLastName(event.target.value)}/>

            </div>

            <input type="password" name='password' placeholder='Password' required value={password} onChange={(event) => setPassword(event.target.value)}/>
       
            <input type="password" name='confirm-password' placeholder='Confirm password' required value={password_confirm} onChange={(event) => setConfirmPassword(event.target.value)}/>

            <div className={style.agreeTerms} >
             <input type="checkbox" name='terms_and_conditions' className={style.checkbox} required 
              checked={termsAccepted} onChange={handleTermsAccepted}/>
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
