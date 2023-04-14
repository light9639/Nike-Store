/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { useRouter } from 'next/router';
import { BannerType } from '@lib/TypeBox';
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
                                <SwiperSlide key={item.index}>
                                    <div className="Banner w-screen">
                                        <img src={item.src} alt={item.alt} />
                                        <div className="Banner_text absolute left-[20%] lg:left-[15%] bottom-[47%] md:bottom-[45%] lg:bottom-1/2 xl:bottom-[45.5%] z-20 w-1/2 lg:w-full">
                                            <Fade bottom>
                                                <h2 className="text-white text-left text-3xl md:text-4xl xl:text-5xl font-semibold mb-10 tracking-tighter line-clamp-1">{item.h2}</h2>
                                                <p className="text-white text-left text-sm xl:text-lg tracking-tighter line-clamp-2 lg:line-clamp-none">{item.p1}<br className="hidden lg:block" />{item.p2}</p>
                                                <div className="text-left -mb-16 mt-10 xl:ml-0">
                                                    <a
                                                        className="hover:bg-white hover:text-black transition px-5 py-3 rounded-lg border border-white text-white tracking-wider font-semibold text-sm sm:text-base cursor-pointer"
                                                        onClick={() => router.push(`/Detail/${idx}`)}
                                                    >더 알아보기</a>
                                                </div>
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