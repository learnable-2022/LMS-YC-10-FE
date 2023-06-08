import React from 'react'
import style from "../styles/Certificate.module.css"
import LmsHeader from '../lmsHeader/LmsHeader'
import certificate from "../images/certificate6 1.png"
import pdf from "../images/PDF.svg";
import docx from "../images/DOCX.svg";
import jpg from "../images/JPG.svg";




function Certificate() {
  return (
    <div className={style.certificateWrapper}>
        <div className={style.certificateHeaderWrapper}>
            <LmsHeader />
        </div>
        <div className={style.certificateBodyWrapper}>
            <div className={style.cert}>
                <img src={certificate} alt='' />
                <div className={style.issued}>
                    <div>
                        <h5>Issued Date</h5>
                        <p></p>
                    </div>
                    <div>
                        <h5>Issued By</h5>
                        <p></p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={pdf} alt='pdf' />
                </div>
                <div>
                    <img src={docx} alt='docx' />
                </div>
                <div>
                    <img src={jpg} alt='jpg' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate