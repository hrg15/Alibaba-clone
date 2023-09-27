import React from "react";
import styles from "../styles/HomePage.module.css";
import ProductTab from "./product-tab/ProductTab";
import OtherServices from "./OtherServices";
import Slider from "./Slider/Slider";
import AppDownload from "./AppDownload";
import Questions from "./Questions/Questions";
import AboutPlan from "./AboutPlan/AboutPlan";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePageBg}>
        <picture>
          <img
            src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp"
            alt="airplan"
            height={320}
          />
        </picture>
      </div>
      <div className="a-container px-0 pb-8">
        <ProductTab />
        <OtherServices />
        <Slider />
        <AppDownload />
        <Questions />
        <AboutPlan />
        <div className="mb-8"></div>
      </div>
    </div>
  );
};

export default HomePage;
