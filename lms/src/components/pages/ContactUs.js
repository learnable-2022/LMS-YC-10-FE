import React, { useState } from 'react'
import style  from './register/style.module.css'
import Header from '../header/Header';
import axios from 'axios';



export default function ContactUs() {
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phonenumber, setPNumber] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); 

  // const [errMsg, setErrMsg] = useState('');

  const userName = `${firstName} ${lastName}`

  console.log(phonenumber)
  console.log(userName)
  console.log(message)
  console.log(email)
  const handleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: userName,
      email: email,
      message: message,
      phonenumber: phonenumber,
    }
  
    const url = "https://kidtots.onrender.com/student/"
  
    await axios.post(url, data, {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
     }).then((response) =>{
      console.log(response)

  
      setEmail("");
      setPNumber("");
      setFirstName("");
      setLastName("");
      setMessage("");

      
  
  
     })
    // catch(error){
    //   if (!error?.response.status) {
    //     setErrMsg('No Server Response');
    // } else if (error.response?.status === 400) {
    //     setErrMsg('Missing Username or Password');
    // } else if (error.response?.status === 404) {
    //     setErrMsg('Unauthorized');
    // } else {
    //     setErrMsg('Login Failed');
    // }
    // errRef.current.focus();
    // }
  
  
  }

  return (
    <div className={style.container}>

      <Header />


        <div className={style.formSection} >

           
            <h2 className={style.heading}>Contact us</h2>

           

            <form action="" className={style.contactUs} onSubmit={handleSubmit}>

            <p>Send us a message</p>
            
            <input type="email" name='email' placeholder='Email' required 
            value={email} onChange={(e) => setEmail(e.target.value)}/>

            <div className={style.inputs}>

            <input type="text" name='fs-name' placeholder='First name' required 
               value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

            <input type="text" name='ls-name' placeholder='Last name' required 
               value={lastName} onChange={(e) => setLastName(e.target.value)}/>

            </div>

            <input type="number" name='phone-number' placeholder='Phone number' required 
               value={phonenumber} onChange={(e) => setPNumber(e.target.value)}/>
       
            <textarea name="message" id=""  placeholder='Message'
               value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <div className={style.agreeTerms} >
             <input type="checkbox" name='newsletter' required 
             checked={termsAccepted} onChange={handleTermsAccepted}/>
             <p>Yes, please send me informative contents about topics, products, services and events.</p>
            </div>

            <button className={style.submitBtn} >Submit</button>
            </form>


        </div>

        <div className={style.vectorsPosition3}>
                <img src="./img/Vector-5.png" alt="" />
             
        </div>
       
    </div>
  )
}
