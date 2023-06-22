import React, { useRef, useState, useEffect} from 'react';
import style  from './style.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../images/Logo.png";


export default function Login() {
 
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();




  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [savePwd, setSavePwd] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])


const handleSubmit = (e) =>{
  e.preventDefault();
  const data = {
    email: email,
    password: password,
  }

  const url = "https://kidtots.onrender.com/student/sign"

  try{
  axios.post(url, data, {
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
   }).then((response) =>{
  
    const token = response.data.data

    console.log(token)
    const username = token.Name
    const email = token.EmailAddress
    const profileImage = token.Image

    localStorage.setItem('Username', username )
    localStorage.setItem('email', email )
    localStorage.setItem('image', profileImage )


    setEmail("");
    setPassword("");
    setSuccess(true)

    // Assuming this code is running in a front-end JavaScript file

    // Access the value of a specific cookie
    function getCookieValue(cookieName) {
      const cookies = document.cookie.split(';');

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.startsWith(`${cookieName}=`)) {
          return cookie.substring(cookieName.length + 1);
        }
      }

      return null;
    }

    const studentCookieValue = getCookieValue('STUDENT_COOKIE');

    console.log(studentCookieValue);
    navigate('/dashboard')
    
    handleChecked()
    if(savePwd === true){
     
    localStorage.setItem('token', JSON.stringify(token))
    }


   })
  }catch(error){
    if (!error?.response.status) {
      setErrMsg('No Server Response');
  } else if (error.response?.status === 400) {
      setErrMsg('Missing Username or Password');
  } else if (error.response?.status === 404) {
      setErrMsg('Unauthorized');
  } else {
      setErrMsg('Login Failed');
  }
  errRef.current.focus();
  }

}
  const handleChecked = () =>{
    setSavePwd(!savePwd)

  }

  return (
    <>
    <div className={style.container}>

        <header className={style.header}>
          <div>
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
        </header>

        <div className={style.formSection}>
            <div className={style.formSectionDiv}>
            <h2 className={style.heading}>Login</h2>

            <p>Sign in with your email address used in joining the organisation</p>

            <form className={style.signUpform} onSubmit={handleSubmit}>
            
            <input type="email" name='email' placeholder='Email' 
            value={email} required 
            onChange={(e) => setEmail(e.target.value)}
            ref={userRef}
            autoComplete="off"
            />


            <input type="password" name='password' placeholder='Password'
             value={password} 
             required 
             onChange={(e) => setPassword(e.target.value)}/>

            <div className={style.fgPwdRPwsd} >

            <Link to="/forgotpassword">Forgotten password?</Link>

             <div className={style.checkbox}>
             <input type="checkbox" name='remember-password' checked={savePwd} onChange={handleChecked}/>
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
              <p>Don't have an account? <Link to="/accounttype">Sign up</Link></p>
              </div>

             <div className={style.GMbtns}>
                <Link to="/login"><img src="./img/google1.png" alt="Google" /></Link>
             </div>

            </div>
        </div>
        </div>

        <div className={style.vectors2}>
                <img src="./img/Vector-4.png" alt="" />
             
        </div>
        <div className={style.vectors2}>
                
                <img  src="./img/Vector-3.png" alt="" />
        </div>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    </div>
      {/* )} */}
    </>
  )
}