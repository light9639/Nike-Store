/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { useRouter } from 'next/router';
import { BannerType } from '../../lib/TypeBox';
import Fade from 'react-reveal/Fade';
import style from './BannerStyle';
import { product } from './Banner_data'

export default function Section(): JSX.Element {
    const router = useRouter();

    return (
        <React.Fragment>
            <div>
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper banner-swiper"
                >
                    {
                        product && product.map(function (item: BannerType, idx: number) {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className="Banner w-screen">
                                        <img src={item.src} alt={item.alt} />
                                        <div className="Banner_text absolute left-1/2 lg:left-1/3 bottom-1/2 z-20">
                                            <Fade bottom>
                                                <h2 className="text-white text-left text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 tracking-tighter line-clamp-1">{item.h2}</h2>
                                                <p className="text-white text-left text-lg lg:text-xl tracking-tighter">{item.p1}<br />{item.p2}</p>
                                                <a
                                                    className="absolute left-0 hover:bg-white hover:text-black transition px-5 py-3 rounded-lg border border-white text-white tracking-wider font-semibold text-sm sm:text-base mt-8 cursor-pointer"
                                                    onClick={() => router.push(`/Detail/${idx}`)}
                                                >더 알아보기</a>
                                            </Fade>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
                <style jsx>{style}</style>
            </div>
        </React.Fragment>
    )
}