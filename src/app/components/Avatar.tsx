import CustomButton from "./CustomButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/pages/home.module.scss";

import React from "react";
import Slider from "react-slick";

import Grnderbanner from "../img/korean_art.jpg";
import Slider1 from "../img/slider_1.jpg";

export default function Avatar({ onNext }: { onNext: () => void }){
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,  
    focusOnSelect: true,
    autoplay: true,   
    autoplaySpeed: 2000,
  };
    return(
      <div className={styles.avatar}>
        <div className={styles.gender_banner}>
            <img src={Grnderbanner.src} alt="Grnderbanner" />
            <div className={styles.gender_title}>
                <h3 className={styles.gender_title_1}>Pick Your K-Style <br/> Avatar</h3>
                <h3 className={styles.gender_title_2}>Pick Your K-Style <br/> Avatar</h3>
            </div>
        </div>
        <div className={styles.avatar_slider}>
          <Slider {...settings}>
            <div className={styles.item}>
              <img src={Slider1.src} alt="Slider img" />
            </div>
            <div className={styles.item}>
              <img src={Slider1.src} alt="Slider img" />
            </div>
            <div className={styles.item}>
              <img src={Slider1.src} alt="Slider img" />
            </div>
            <div className={styles.item}>
              <img src={Slider1.src} alt="Slider img" />
            </div>
            <div className={styles.item}>
              <img src={Slider1.src} alt="Slider img" />
            </div>
          </Slider>
        </div>
        <CustomButton id="avatarbtn" text="Next" onClick={onNext}></CustomButton>
      </div>
    );
}