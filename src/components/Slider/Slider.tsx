import React from "react";
import SwiperConfig from "./SwiperConfig";

const Slider = () => {
  return (
    <div className="md:mb-5 mb-4">
      <article id="breakingNews" className="a-swiper slider">
        <div className="a-swiper__main">
          <SwiperConfig />
        </div>
      </article>
    </div>
  );
};

export default Slider;
