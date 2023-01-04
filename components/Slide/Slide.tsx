import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Navigation } from "swiper";
import SlideStyled from "./SlideStyled";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from "axios";
import { GreetingsProps } from "@lib/TypeBox";
import { SlideType } from "@lib/ShoeType";
import Fade from 'react-reveal/Fade';

export default function Slide({ name }: GreetingsProps): JSX.Element {
    const [list, setList] = useState<SlideType[]>([]);
    const router = useRouter()
    const API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Slide.json';

    // props가 Men, Women, Kids일 때 각각의 데이터를 전달
    function getData() {
        if (name == "Men") {
            axios.get(API_URL).then((res: any) => {
                setList(res.data.Men)
            })
        }
        if (name == "Women") {
            axios.get(API_URL).then((res: any) => {
                setList(res.data.Women)
            })
        }
        if (name == "Kids") {
            axios.get(API_URL).then((res: any) => {
                setList(res.data.Kids)
            })
        }
    }

    // 페이지 로드 시에만 작동되도록 설정.
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='max-w-screen-2xl my-24 m-auto p-6 lg:p-0'>
            <Swiper
                slidesPerView={1.25}
                spaceBetween={20}
                speed={600}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    540: {
                        slidesPerView: 1.5,  //브라우저가 540보다 클 때
                    },
                    768: {
                        slidesPerView: 2.5,  //브라우저가 768보다 클 때
                    },
                    1024: {
                        slidesPerView: 3,  //브라우저가 1024보다 클 때
                    },
                }}
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar, Navigation]}
                className="mySwiper Shoes_swiper pt-10"
            >
                <h2 className='mb-10 top-4 sm:top-3 absolute text-2xl sm:text-3xl dark:text-white z-50'>Popular Women Shoes</h2>
                {list.map(function (a: SlideType, i: number) {
                    return (
                        <>
                            <SwiperSlide className="pt-20 pb-10" key={i}>
                                <div className="rounded-xl sm:ml-1 dark:hover:shadow-slate-700 transform duration-500 text-left">
                                    <div
                                        className='ImgBox hover:opacity-75 hover:shadow-xl dark:hover:opacity-95 dark:hover:shadow-gray-700 transition cursor-pointer rounded-3xl'
                                        onClick={() => router.push(`/view/${a.index}`)}
                                    >
                                        <Fade>
                                            <img src={a.src} alt={a.alt} className="w-full h-full object-cover rounded-3xl" />
                                        </Fade>
                                    </div>
                                    <Fade bottom cascade>
                                        <div className="pt-5 px-2 flex flex-col gap-2">
    
                                            <h2 className="tracking-tighter text-base xl:text-xl overflow-ellipsis overflow-hidden whitespace-nowrap -mb-1 xl:mb-0 cursor-pointer hover:text-blue-600 transition" title="Best Headphone Ever">
                                                {a.name}
                                            </h2>
    
                                            <div className='tracking-tighter'>
                                                <p className='pb-1 xl:pb-2 text-sm text-gray-600 dark:text-white'>{a.info}</p>
                                                <span className="text-base xl:text-xl absolute right-3 -translate-y-16 mt-3 xl:mt-0">{a.price}</span>
                                            </div>
    
                                        </div>
                                        <div className="block lg:flex pl-2 pb-2">
                                            <span className="flex items-center my-3 lg:my-0">
                                                <svg fill={a.star.first} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill={a.star.second} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill={a.star.third} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill={a.star.four} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill={a.star.five} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <span className={`bg-${a.color}-100 text-${a.color}-800 text-sm font-semibold ml-2 px-2.5 py-0.5 rounded dark:bg-${a.color}-200 dark:text-${a.color}-900`}>{a.Review} Reviews</span>
                                            </span>
                                            <span className="hidden lg:flex lg:ml-3 lg:pl-3 lg:py-2 lg:border-l-2 border-gray-200 space-x-2s gap-1 xl:gap-3">
                                                <a href='https://ko-kr.facebook.com/' className={`text-gray-500 dark:text-white transition hover:text-${a.color}-600 dark:hover:text-${a.color}-600`}>
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                    </svg>
                                                </a>
                                                <a href='https://twitter.com/home' className={`text-gray-500 dark:text-white transition hover:text-${a.color}-600 dark:hover:text-${a.color}-600`}>
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                    </svg>
                                                </a>
                                                <a href='https://www.kakaocorp.com/page/service/service/KakaoTalk' className={`text-gray-500 dark:text-white transition hover:text-${a.color}-600 dark:hover:text-${a.color}-600`}>
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                    </Fade>
                                </div>
                            </SwiperSlide>
                        </>
                    )
                })}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
            <style jsx>{SlideStyled}</style>
        </div>
    )
}
