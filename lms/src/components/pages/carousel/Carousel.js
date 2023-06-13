import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import yellowShirt from '../../images/yellowShirt.svg'
import pinkGown from '../../images/pinkGown.svg'
import purpleShirt from '../../images/purpleShirt.svg'
import styles from "./CarouselItem.module.css"
import redShirt from '../../images/redShirt.svg'
import face from '../../images/face.svg'


function CarouselObject({item}) {

    const responsive = {
        superLargeDesktop: {
       
          breakpoint: { max: 2200, min: 1100 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1100, min: 924 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 924, min: 564 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 564, min: 0 },
          items: 1
        }
      };



  return (
    <div className='carousel'>
        <Carousel 
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        ssr
        transitionDuration={500}
        dotListClass="custom-dot-list-style">
            <div className={styles.carouselSection}>
                <img src={yellowShirt} alt='' />
                <div className={styles.clientName}>
                 <h3>cynthia john</h3>
                  <p>Web3 tutor</p>
               </div>
            </div>
            <div className={styles.carouselSection}>
                <img src={redShirt} alt='' />
                <div className={styles.clientName}>
                <h3>Nkemdilim Ugwu</h3>
                <p>UI/UX Tutor</p>
                </div>
            </div>
            <div className={styles.carouselSection}>
                <img src={pinkGown} alt='' />
                <div className={styles.clientName}>
                <h3>Geofrey dave</h3>
                <p>Backend Tutor</p>
                </div>
            </div>
            <div className={styles.carouselSection}>
                <img src={face} alt='' />
                <div className={styles.clientName}>
                <h3>Guy laman</h3>
                <p>Web3 Tutor</p>
                </div>
            </div>
            <div className={styles.carouselSection}>
                <img src={purpleShirt} alt='' />
                <div className={styles.clientName}>
                  <h3>john ohilip</h3>
                  <p>FrontEnd Tutor</p>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default CarouselObject;