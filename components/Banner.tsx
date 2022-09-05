import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function Section() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#0061bf" }}>
                        <img src="/img/mainBanner01.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#000" }}>
                        <img src="/img/mainBanner02.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#dbfc31" }}>
                        <img src="/img/mainBanner03.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#59ba73" }}>
                        <img src="/img/mainBanner04.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#ffa800" }}>
                        <img src="/img/mainBanner05.jpg" />
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}