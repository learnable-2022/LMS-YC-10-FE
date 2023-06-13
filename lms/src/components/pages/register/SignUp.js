import React, { useEffect, useState, useRef } from 'react'
import style  from './style.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from './Login';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{10,24}$/;
export default function SignUp() {

  const userRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const [validName, setValidName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);

  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [email, setEmail] = useState("");

  const [password_confirm, setConfirmPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [termsAccepted, setTermsAccepted] = useState(false); 

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(firstName));
    }, [firstName])

    useEffect(() => {
      setValidLastName(USER_REGEX.test(lastName));
  }, [lastName])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === password_confirm);
    }, [password, password_confirm])

    useEffect(() => {
      setErrMsg('');
  }, [password, password_confirm])

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



  const v1 = USER_REGEX.test(firstName);
  const v3 = USER_REGEX.test(lastName);
  const v2 = PWD_REGEX.test(password);
  if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
  }  
  try{
     axios.post(url, data, {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
     }).then((response) =>{
      setSuccess(true);

      //clear state and controlled inputs
      //need value attrib on inputs for this

      setFirstName('');
      setLastName('');
      setPassword('');
      setConfirmPassword('');
    }
  )}
  catch(error){
      console.log(error)
      if (!error?.response) {
        setErrMsg('No Server Response');
    } else if (error.response?.status === 409) {
        setErrMsg('Username Taken');
    } else {
        setErrMsg('Registration Failed')
    }
    errRef.current.focus();

  }
    if (!termsAccepted) {
      alert("Please accept the terms and conditions to continue.");
      return;
    }

  };


return (
  <>
              {success ? (
                  <Login />
            ) : (
    <div className={style.container}>

        <header className={style.header}>
            <Link to="/"><img src="./img/logo.png" alt="logo" /></Link>
        </header>

        <div className={style.formSection}>

            <h2 className={style.heading}>Sign up</h2>
            <p>Sign up with your email address used in joining the organisation</p>
            <form action="" className={style.signUpform} onSubmit={handleSubmit}>
            
            <input type="email" name='email' placeholder='Email' 
            value={email} required 
            onChange={(event) => setEmail(event.target.value)}
  
            />

              <div className={style.inputs}>
              <div className={style.nameWrapper}>
                  <div className={style.passwordWrapper}>
                <input type="text" name='fs-name' placeholder='First name'  value={firstName} required 
                onChange={(event) => setFirstName(event.target.value)}
                ref={userRef}
                autoComplete="off"
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                />
                  <FontAwesomeIcon icon={faCheck} className={validName ? style.valid : style.hide} />
                  <FontAwesomeIcon icon={faTimes} className={validName || !firstName ? style.hide : style.invalid} />
                  </div>
                <p id="uidnote" className={userFocus && firstName && !validName ? style.instructions : style.offscreen}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.<br />
                      Must begin with a letter.<br />
                      Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
              <div className={style.nameWrapper}>
                <div className={style.passwordWrapper}>
              <input type="text" name='ls-name' placeholder='Last name' 
              required value={lastName} 
              onChange={(event) => setLastName(event.target.value)}
              ref={userRef}
              autoComplete="off"
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
                />
                <FontAwesomeIcon icon={faCheck} className={validLastName ? style.valid : style.hide} />
                <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? style.hide : style.invalid} />
                </div>
                <p id="uidnote" className={userFocus && lastName && !validLastName ? style.instructions : style.offscreen}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

              </div>

            </div>
            <div className={style.passwordWrapper}>
            <input type="password" name='password' placeholder='Password' 
              value={password}  required 
              onChange={(event) => setPassword(event.target.value)}
               aria-invalid={validPwd ? "false" : "true"}
               aria-describedby="pwdnote"
               onFocus={() => setPwdFocus(true)}
               onBlur={() => setPwdFocus(false)}
            />
            <FontAwesomeIcon icon={faCheck} className={validPwd ? style.valid : style.hide} />
            <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? style.hide : style.invalid} />
            </div>
            <p id="pwdnote" className={pwdFocus && !validPwd ? style.instructions : style.offscreen}>
                <FontAwesomeIcon icon={faInfoCircle} />
                10 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
             </p>


            <div className={style.passwordWrapper}>
              <input type="password" name='confirm-password' placeholder='Confirm password' 
              value={password_confirm} required 
              onChange={(event) => setConfirmPassword(event.target.value)}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby= "confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              />
              <FontAwesomeIcon icon={faCheck} className={validMatch && password_confirm ? style.valid : style.hide} />
              <FontAwesomeIcon icon={faTimes} className={validMatch || !password_confirm ? style.hide : style.invalid} />
            </div>
            <p id="confirmnote" className={matchFocus && !validMatch ? style.instructions : style.offscreen}>
              <FontAwesomeIcon icon={faInfoCircle} />
              Password did not match.
            </p>

            <div className={style.agreeTerms} >
             <input type="checkbox" name='terms_and_conditions' className={style.checkbox} required 
              checked={termsAccepted} onChange={handleTermsAccepted}/>
             <p>I agree with the terms and conditions</p>
            </div>

            <button className={style.signUpBtn}  
            disabled={!validName || !validPwd || !validMatch ? true : false}>SIGN UP</button>
            </form>

            <div className={style.signUpOptions}>
              <div className={style.loginDiv}>
              <p>Registered already? <a href="/login">Login</a></p>
              </div>
              

              <div className={style.or}>
                <hr /> <p>OR</p> <hr />
              </div>

             <div className={style.GMbtns}>
                <Link to="/signup"><img src="./img/google1.png" alt="Google" /></Link>
                <Link to="/signup"><img src="./img/meta.svg" alt="Metamask" /></Link>
             </div>

            </div>
        </div>

        <div className={style.vectors}>
                <img src="./img/Vector.png" alt="" />
             
        </div>
        <div className={style.vectors}>
                
                <img  src="./img/Vector-2.png" alt="" />
        </div>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    </div>
          )}
  </>
  )
}
