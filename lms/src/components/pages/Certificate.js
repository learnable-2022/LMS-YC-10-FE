import React from 'react'
import style from "../styles/Certificate.module.css"
import LmsHeader from '../lmsHeader/LmsHeader'
import certificate from "../images/certificate6 1.png"
import pdf from "../images/PDF.svg";
import docx from "../images/DOCX.svg";
import jpg from "../images/JPG.svg";
import axios from 'axios';




function Certificate() {

    const downloadPdf = (
        filePath,
        fileName = "Certificate",
        ) =>{
            const apiUrl = ""
            axios.get(apiUrl, + filePath, { 
                headers: {
                    "Content-Type": 'application/pdf',
        }}).then(response=> response.blob())
        .then(blob =>{
            const url = window.URL.createObjectURL(new Blob([blob]))

            const link = document.createElement('a')
            link.href = url;
            link.download = fileName;

            document.body.appendChild(link);

            link.click();

            link.parentNode.removeChild(link)
        })
    }
    const downloadDocx = (
        filePath,
        fileName = "Certificate",
        ) =>{
            const apiUrl = ""
            axios.get(apiUrl, + filePath, { 
                headers: {
                    "Content-Type": 'application/docx',
        }}).then(response=> response.blob())
        .then(blob =>{
            const url = window.URL.createObjectURL(new Blob([blob]))

            const link = document.createElement('a')
            link.href = url;
            link.download = fileName;

            document.body.appendChild(link);

            link.click();

            link.parentNode.removeChild(link)
        })
    }
    const downloadJpg = (
        filePath,
        fileName = "Certificate",
        ) =>{
            const apiUrl = ""
            axios.get(apiUrl, + filePath, { 
                headers: {
                    "Content-Type": 'application/jpg',
        }}).then(response=> response.blob())
        .then(blob =>{
            const url = window.URL.createObjectURL(new Blob([blob]))

            const link = document.createElement('a')
            link.href = url;
            link.download = fileName;

            document.body.appendChild(link);

            link.click();

            link.parentNode.removeChild(link)
        })
    }

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
                        <img src={pdf} alt='pdf' onClick={downloadPdf}/>
                    <div>
                    </div>
                        <img src={docx} alt='docx' onClick={downloadDocx}/>
                    </div>
                    <div>
                        <img src={jpg} alt='jpg' onClick={downloadJpg}/>
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
                        <p>kidsTot Organisation</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate;