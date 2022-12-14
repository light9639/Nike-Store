/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import css from 'styled-jsx/css';
import { useRouter } from 'next/router';
import SlideStyled from "../styles/SlideStyled";
import { BannerType } from '../pages/Type/TypeBox';
import Fade from 'react-reveal/Fade';

const product = [
    {
        "src": "/mainBanner01.png",
        "alt": "mainBanner01",
        "h2": "한계 없는 플레이, 끝 없는 즐거움",
        "p1": "득점이 쏟아지는 NIKELAND 농구를 친구들과 함께 즐겨보세요.",
        "p2": "새로운 팀 그리고 장비를 통해 정면 승부를 펼치거나 덩크슛 콘테스트에 도전해 보세요.",
    },
    {
        "src": "/mainBanner02.png",
        "alt": "mainBanner02",
        "h2": "나이키 패스트 팩",
        "p1": "탁월한 에너지 반환력으로 최상의 스피드를 위해 탄생한 레이싱화.",
        "p2": "나만의 최고 기록을 향한 여정을 나이키 패스트 팩과 함께 시작해 보세요.",
    },
    {
        "src": "/mainBanner03.png",
        "alt": "mainBanner03",
        "h2": "나이키 줌 X 제가마",
        "p1": "험준한 지형의 오르막길과 내리막길에서도 탁월한 접지력으로",
        "p2": "안정감을 제공하는 나이키 줌X 제가마를 경험해 보세요.",
    },
    {
        "src": "/mainBanner04.png",
        "alt": "mainBanner04",
        "h2": "에어 조던 37",
        "p1": "최첨단의 혁신과 소재를 더한 에어 조던 37과 함께",
        "p2": "더 높이, 더 멀리 나아가 보세요.",
    }
]

const style = css`
    .w-screen img {
        max-height: 750px;
        min-height: 480px;
    }
    .Banner::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        background-color: rgb(0, 0, 0, 0.25);
    }
    .Banner_text {
        transform: translate(-50%, 25%);
    }
    @media screen and (max-width: 1024px) {
        .Banner_text {
            transform: translate(-50%, 50%);
        }
    }
`;

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
                    navigation={true}
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
                                                <h2 className="text-white text-left text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 tracking-tighter">{item.h2}</h2>
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
                </Swiper>
            </div>
            <style jsx>{style}</style>
        </React.Fragment>
    )
}