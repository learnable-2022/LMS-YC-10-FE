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
            <LmsHeader page="Certificate"/>
        </div>
        <div className={style.certMain}>
            <div className={style.certificateBodyWrapper}>
            <div className={style.cert}>
                <img src={certificate} alt='' />
            </div>
            <div className={style.downloadWrapper}>
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
        <div className={style.issuedWrapper}>
                <div className={style.issued}>
                    <h3>Issued Date</h3>
                    <p>May 16, 2023</p>
                </div>
                <div>
                    <h3>Issued By</h3>
                    <p>kidtots Organisation</p>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Certificate