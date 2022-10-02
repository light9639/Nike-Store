/* eslint-disable @next/next/no-img-element */
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
                className="mySwiper banner-swiper"
            >
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#0061bf" }}>
                        <img src="/220810_mlp_p3_bg.jpg" alt="mainBanner01" style={{ "maxHeight": "600px", "minHeight": "480px" }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#000" }}>
                        <img src="/Intersect_3.png" alt="mainBanner02" style={{ "maxHeight": "600px", "minHeight": "480px" }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#dbfc31" }}>
                        <img src="/Intersect_1.png" alt="mainBanner03" style={{ "maxHeight": "600px", "minHeight": "480px" }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#59ba73" }}>
                        <img src="/Intersect_2.png" alt="mainBanner04" style={{ "maxHeight": "600px", "minHeight": "480px" }} />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#ffa800" }}>
                        <img src="/img/mainBanner05.jpg" alt="mainBanner05" style={{ "maxHeight": "650px", "minHeight": "480px" }} />
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}