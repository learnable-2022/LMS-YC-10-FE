import React from 'react'
import style  from './register/style.module.css'
import { AiOutlineMail } from 'react-icons/ai';
import Header from '../header/Header';

export default function ContactUs() {
 
  return (
    <div className={style.container}>

      {/* navbar here  */}
      <Header />


        <div className={style.formSection} >

           
            <h2 className={style.heading}>Contact us</h2>

           

            <form action="" className={style.contactUs}>

            <p>send us a message</p>
            
            <input type="email" name='email' placeholder='Email' required />

            <div className={style.inputs}>

            <input type="text" name='fs-name' placeholder='First name' required />

            <input type="text" name='ls-name' placeholder='Last name' required />

            </div>

            <input type="number" name='phone-number' placeholder='Phone number' required />
       
            <textarea name="message" id=""  placeholder='Message'></textarea>

            <div className={style.agreeTerms} >
             <input type="checkbox" name='newsletter' required />
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
