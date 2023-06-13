import React, { useState } from 'react'
import style  from './style.module.css'
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function AccountType() {
 
  const [accountType, setAccountType] = useState();
  const [iconTutor, setIconTutor] = useState(false);
  const [iconStudent, setIconStudent] = useState(false);

  return (
      <>
         <div className={style.container}>

        <header className={style.header}>
            <a href="./"><img src="./img/logo.png" alt="logo" /></a>
        </header>

        <div className={style.formSection}>

            <h2 className={style.heading}>Choose account type</h2>

            <form action="" className={style.accountTypeForm}>
              
              
              <Link to="/signUp"
              
                onClick={ (e) => 
                  {
                  // e.preventDefault();
                  setIconStudent(true);
                
                } }
              
              >
              Student <span><AiFillCheckCircle 
                style={{
                  display: iconStudent ? 'block' : 'none',
                  color: iconStudent ? '#0288D1' : '',
                }}
                /></span>
                </Link>
                

                
              
                <Link to="/signUp" 
                  onClick={ () => 
                    {
                    // e.preventDefault();
                    setIconTutor(true);
                  
                  } }
                  >
                  Tutor
                <span><AiFillCheckCircle 
                style={{
                  display: iconTutor ? 'block' : 'none',
                  color: iconTutor ? '#0288D1' : '',
                }} />
                </span>
                </Link>
              

            </form>
        </div>

        <div className={style.vectors}>
                <img src="./img/Vector.png" alt="" />
            
        </div>
        <div className={style.vectors}>
                
                <img  src="./img/Vector-2.png" alt="" />
        </div>
        </div>      
      </>
  )
}
