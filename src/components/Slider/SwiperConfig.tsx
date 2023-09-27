import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slide from "./Slide";

const SwiperConfig = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Slide imgLink="https://cdn.alibaba.ir/cms/uploads/Produckt_Marketing_Telephone_Sales_Cardview_Banner_Desktop_02_06_26_c14b1ff25f.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgLink="https://cdn.alibaba.ir/cms/uploads/Ad_Hoc_Requests_Atlantis_Hotel_Cardview_Banner_Desktop_1_73ebb133b0.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgLink="https://cdn.alibaba.ir/cms/uploads/Eghamatghah_Cardview_Banner_Desktop_02_05_18_5_e8cc5f5b6d.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgLink="https://cdn.alibaba.ir/cms/uploads/Produckt_Marketing_Telephone_Sales_Cardview_Banner_Desktop_02_06_26_c14b1ff25f.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperConfig;
