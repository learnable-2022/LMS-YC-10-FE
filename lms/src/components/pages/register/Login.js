import React, { useRef, useState, useEffect} from 'react'
import style  from './style.module.css'
import axios from 'axios';
// import AuthContext from "../../../Utils/AuthProvider";
import Main from '../../main/Main';
import { Link } from 'react-router-dom';
// , useContext

export default function Login() {
 
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  // const [user, setUser] = useState('');
  // const [pwd, setPwd] = useState('');


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


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
    console.log(response);

    // setAuth({email, password});
    setEmail("");
    setPassword("");
    setSuccess(true)
    console.log(success)
   })
  }catch(error){
    console.log(error)
    if (!error?.response) {
      setErrMsg('No Server Response');
  } else if (error.response?.status === 400) {
      setErrMsg('Missing Username or Password');
  } else if (error.response?.status === 401) {
      setErrMsg('Unauthorized');
  } else {
      setErrMsg('Login Failed');
  }
  errRef.current.focus();
  }

}
console.log(password, email)


  return (
    <>
      { success ?(
        <div>
          <Main />
        </div>
      ):(
    <div className={style.container}>

        <header className={style.header}>
            <Link to="/"><img src="./img/logo.png" alt="logo" /></Link>
        </header>

        <div className={style.formSection}>

            <h2 className={style.heading}>Login</h2>

            <p>Sign in with your email address used in joining the organisaton</p>

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
              <p>Don't have an account? <Link to="/accounttype">Sign up</Link></p>
              </div>

             <div className={style.GMbtns}>
                <Link to="/login"><img src="./img/google1.png" alt="Google" /></Link>
                <Link to="/login"><img src="./img/meta.svg" alt="Metamask" /></Link>
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
      )}
    </>
  )
}
