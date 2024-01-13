/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SwiperBasic, SwiperGold, SwiperPlatinium } from "../../Components";

export default function Hero({pryceForm}) {

  return (
    <>
    <div className="bg-image bg-cover bg-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        scrollbar={{
          hide: false,
        }}
        navigation={true}
        loop={true}
      >
        {/* slide1 */}
        <SwiperSlide className="mb-4">
          <SwiperBasic pryceForm={pryceForm}/>
        </SwiperSlide>
        
        {/* slide2 */}
        <SwiperSlide className="">
          <SwiperGold pryceForm={pryceForm}/>
        </SwiperSlide>
        
        {/* slide3 */}
        <SwiperSlide className="">
          <SwiperPlatinium pryceForm={pryceForm}/>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </>
  );
}
