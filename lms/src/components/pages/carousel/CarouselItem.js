import React, { useState, useEffect, useCallback, useMemo } from 'react';
import style from "./CarouselItem.module.css"



function CarouselItem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselData = useMemo(
    () => [
      { image: require('../../images/yellowShirt.svg').default, text: 'Designer',  title: "Chukwubuikem Ubaka" },
      { image: require('../../images/purpleShirt.svg').default, text: 'Designer',  title: "Jim Aneto" },
      { image: require('../../images/pinkGown.svg').default, text: 'Designer',  title: "Nkechi Nnaemeka" },
      { image: require('../../images/redShirt.svg').default, text: 'Designer',  title: "Nkemdilim Ugwu" },
      { image: require('../../images/face.svg').default, text: 'Designer',  title: "Anointing Okechukwu" },
    ],
    []
  );
  const visibleSlides = 3; // Number of slides to show at once
  const intervalDuration = 6000; // Autoplay interval in milliseconds

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  }, [carouselData]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, intervalDuration);
    return () => clearInterval(interval);
  }, [goToNextSlide, intervalDuration]);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  const renderSlide = (index) => {
    const slide = carouselData[index];
    return (
      <div key={index} className={`${style.carouselSlide} carousel-slide ${activeIndex === index ? style.active : ''}`}>
        <img src={slide.image} alt="Carousel Slide" />
        <div className={style.carouselSlideTextWrapper}>
        <h3>{slide.title}</h3>
        <p>{slide.text}</p>
        </div>
      </div>
    );
  };

  const renderSlides = () => {
    const slidesToShow = carouselData.length >= visibleSlides ? visibleSlides : carouselData.length;
    const slides = [];

    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (activeIndex + i) % carouselData.length;
      slides.push(renderSlide(slideIndex));
    }

    return slides;
  };

  const renderDots = () => {
    return carouselData.map((_, index) => (
      <span
        key={index}
        className={`${style.carouselDot} carousel-dot ${activeIndex === index ? style.active : ''}`}
        onClick={() => setActiveIndex(index)}
      ></span>
    ));
  };

  return (
    <div className={`${style.carouselWrapper} carouselWrapper`}>
      <button onClick={goToPrevSlide}>Prev</button>
      <div className={`${style.carouselContainer} carousel-container`}>{renderSlides()}</div>
      <button onClick={goToNextSlide}>Next</button>
      <div className={`${style.carouselDotsWrapper} carouselDotsWrapper`}>
        <div className={`${style.carouselDots} carousel-dots`}>{renderDots()}</div>
      </div>
    </div>
  );
}

export default CarouselItem;
