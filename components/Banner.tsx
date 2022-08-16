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
                    <div className="w-screen" style={{ backgroundColor: "#000" }}>
                        <img src="https://kream-phinf.pstatic.net/MjAyMjA4MTBfMTA2/MDAxNjYwMTIxNjk0Mzg3.osnL3_KsM-VXnI-kQchpkzOXHJtQchxMK7Q0p3Edyiwg.Sb5n7oBEcH46pWHERF0InkTKpA_jyIM1a04s8GOThMcg.JPEG/a_5083211968eb456d8dd61198689b1da3.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#000" }}>
                        <img src="https://kream-phinf.pstatic.net/MjAyMjA3MjlfMjk5/MDAxNjU5MDYzNjU5ODc4.TonFcfhSmIhezIckmLvRl7OFZFQLBKo9UPVGNj3uRBIg.hgW9mVxYIHi0xNIVtQTOPh19hUzHbU4jGPV6IPxTFL4g.JPEG/a_b10ebb01a12044e7a8a42c66caf22a0c.jpg?type=m_2560" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#000" }}>
                        <img src="https://kream-phinf.pstatic.net/MjAyMjA3MjlfMjA5/MDAxNjU5MTA1NDA0NDU0.uEuYv3Nl2gbyzqrdJwmqWRXr62OMVIKhbCncJLFaGZ4g.uzOs01LvG8z0XWNebKF9faN-otgpd5qgMKCf3gZ3Qd0g.JPEG/a_2f919f0dd9b84a9cb1b1e56b9b67a396.jpg?type=m_2560" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen" style={{ backgroundColor: "#000" }}>
                        <img src="https://kream-phinf.pstatic.net/MjAyMjA4MTJfMzEg/MDAxNjYwMjcyMjg4MjY4.UAtYmWYdaIq-G9BKwMY1TU_nn99HT_ZgW87MP0jAy2cg.IoXbDJ1Hz36MTlGZqbcN1J2FGSl_b_Ztnkc5-ON7FFQg.JPEG/a_7d1484a9ca034871afdfab27aaff70ee.jpg?type=m_2560" />
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}