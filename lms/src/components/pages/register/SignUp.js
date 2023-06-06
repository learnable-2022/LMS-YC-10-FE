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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // new state

 

  // useEffect(() => {
  //   // code to run on component mount
  // }, []);
  const handleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const redirectUrl = window.location.href;
    const apiUrl = "https://kidtots.onrender.com/student/";


    // window.location.href = `${apiUrl}&redirect_uri=${redirectUrl}`

  axios.post(apiUrl,
    // "/kidtots.onrender.com/student/",
  {
    username: `${firstName} ${lastName}`,
    password: `${password}`,
    email: `${email}`
  }).then((response) =>{
    console.log(response);
  },(error) =>{
    console.log(error)
  })


    if(password !== confirmPassword){
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


  // const [{token}, dispatch ] = useStateProvider();
  // useEffect(()=>{
  //   const hash = window.location.hash;
  //   if(hash){
  //     const token = hash.substring(1).split("&")[0].split("=")[1];
  //     dispatch({type: reducerCases.SET_TOKEN, token});
  //   }
  // },[token, dispatch])
  
  // const hash = window.location.hash;
  // const token = hash.substring(1).split("&")[0].split("=")[1];

  // var url = process.env.REACT_APP_API_URL + '/kidtots.onrender.com/student/';
  // axios.post(url,
  //   // "/kidtots.onrender.com/student/",
  // {
  //   username: `${firstName} ${lastName}`
  // }).then((response) =>{
  //   console.log(response);
  // },(error) =>{
  //   console.log(error)
  // })


  //  const userSignUp = (email, firstName, ) => new Promise((resolve, reject) => {
  //     var url = process.env.REACT_APP_API_URL + 'api/seller/login';
  //     axios.post(url, { email, password })
  //       .then((response) => {
  //         if (response.data.user) {
  //           this.setSession(response.data.accessToken);
  //           resolve(response.data.user);
  //         } else {
  //           reject(response.data.error);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(url);
  //         console.log(error);
  //         reject(error);
  //       });
  //   })
  //   userSignUp();




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
       
            <input type="password" name='confirm-password' placeholder='Confirm password' required value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>

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
