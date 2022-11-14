import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Navigation } from "swiper";
import SlideStyled from "../styles/SlideStyled";
import { useRouter } from 'next/router';

const product = {
    detail: [
        {
            "index": "2",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f4ea7019-b9a5-434d-9753-976cae67049b/%EC%97%90%EC%96%B4%EB%A7%A5%EC%8A%A4-97-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-OFhu9KQr.png",
            "alt": "나이키 에어맥스 97",
            "name": "나이키 에어맥스 97",
            "info": "남성 신발",
            "price": "188,100원",
            "Gender": "Men",
            "href": "/Men",
            "star": {
                "first": "currentColor",
                "second": "currentColor",
                "third": "currentColor",
                "four": "currentColor",
                "five": "none"
            },
            "Review": "4"
        },
        {
            "index": "5",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/999d8aad-a379-4ad2-ae03-b5f829822665/%EC%97%90%EC%96%B4%EB%A7%A5%EC%8A%A4-%ED%8E%98%EB%8B%88-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-qde0fIOS.png",
            "alt": "나이키 에어맥스 페니",
            "name": "나이키 에어맥스 페니",
            "info": "남성 신발",
            "price": "219,000원",
            "Gender": "Men",
            "href": "/Men",
            "star": {
                "first": "currentColor",
                "second": "currentColor",
                "third": "currentColor",
                "four": "none",
                "five": "none"
            },
            "Review": "3"
        },
        {
            "index": "124",
            "src": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.3/w_523,c_limit/2016a636-2953-41b4-b496-55263f2b26bc/air-jordan-1-mid-shoes-PCCmCV.png",
            "alt": "에어 조던 1 미드",
            "name": "에어 조던 1 미드",
            "info": "남성 신발",
            "price": "150,000원",
            "Gender": "Men",
            "href": "/Men",
            "star": {
                "first": "currentColor",
                "second": "currentColor",
                "third": "currentColor",
                "four": "none",
                "five": "none"
            },
            "Review": "3"
        },
        {
            "index": "32",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/459df98a-86dd-4210-9aaa-cb753d6cd5de/%EC%97%90%EC%96%B4-%EB%AA%A8%EC%96%B4-%EC%97%85%ED%85%9C%ED%8F%AC-96-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-oEIkSdbT.png",
            "alt": "나이키 에어 모어 업템포 '96",
            "name": "나이키 에어 모어 업템포 '96",
            "info": "남성 신발",
            "price": "209,000원",
            "Gender": "Men",
            "href": "/Men",
            "star": {
                "first": "currentColor",
                "second": "currentColor",
                "third": "currentColor",
                "four": "currentColor",
                "five": "none"
            },
            "Review": "4"
        },
        {
            "index": "35",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c9d3d4c6-7bec-4556-ba39-9da4a259f9aa/%EC%97%90%EC%96%B4-%EC%A4%8C-%ED%94%8C%EB%9D%BC%EC%9D%B4%ED%8A%B8-95-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-vm83YLa0.png",
            "alt": "나이키 에어 줌 플라이트 95",
            "name": "나이키 에어 줌 플라이트 95",
            "info": "남성 신발",
            "price": "189,000원",
            "Gender": "Men",
            "href": "/Men",
            "star": {
                "first": "currentColor",
                "second": "currentColor",
                "third": "currentColor",
                "four": "currentColor",
                "five": "none"
            },
            "Review": "4"
        },
        {
            "index": "11",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de408f27-294e-4ea8-94f1-bf4ddceacb21/%EC%A1%B0%EB%8D%98-%EB%A7%A5%EC%8A%A4-%EC%95%84%EC%9A%B0%EB%9D%BC-4-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-o9fvckTu.png",
            "alt": "조던 맥스 아우라 4",
            "name": "조던 맥스 아우라 4",
            "info": "남성 신발",
            "price": "149,000원",
            "Gender": "Men",
            "href": "/Men",
            "star": {
                "first": "currentColor",
                "second": "currentColor",
                "third": "currentColor",
                "four": "currentColor",
                "five": "none"
            },
            "Review": "4"
        },
    ]
}

export default function Stuff(): JSX.Element {
    const router = useRouter()

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
                <h2 className='mb-10 top-4 sm:top-3 absolute text-2xl sm:text-3xl dark:text-white z-50'>Popular Men Shoes</h2>
                {
                    product.detail.map(function (a, i: number) {
                        return (
                            <>
                                <SwiperSlide className="pt-20 pb-10" key={i} onClick={() => router.push(`/view/${a.index}`)}>
                                    <div className="rounded-xl sm:ml-1 dark:hover:shadow-slate-700 transform duration-500 text-left">
                                        <div className='ImgBox'>
                                            <img src={a.src} alt={a.alt} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="pt-5 px-2 flex flex-col gap-2">

                                            <h2 className="tracking-tighter text-base md:text-xl overflow-ellipsis overflow-hidden whitespace-nowrap -mb-1 md:mb-0" title="Best Headphone Ever">
                                                {a.name}
                                            </h2>

                                            <div className='tracking-tighter'>
                                                <p className='pb-1 md:pb-2 text-sm text-gray-600 dark:text-white'>{a.info}</p>
                                                <span className="text-base md:text-xl absolute right-3 -translate-y-16 mt-3 md:mt-0">{a.price}</span>
                                            </div>

                                        </div>
                                        <div className="block md:flex pl-2 pb-2">
                                            <span className="flex items-center my-3 md:my-0">
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
                                                <span className="bg-blue-100 text-blue-800 text-sm font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{a.Review} Reviews</span>
                                            </span>
                                            <span className="hidden md:flex md:ml-3 md:pl-3 md:py-2 md:border-l-2 border-gray-200 space-x-2s gap-1 md:gap-3">
                                                <a href='https://ko-kr.facebook.com/' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                    </svg>
                                                </a>
                                                <a href='https://twitter.com/home' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                    </svg>
                                                </a>
                                                <a href='https://www.kakaocorp.com/page/service/service/KakaoTalk' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })
                }
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
            <style jsx>{SlideStyled}</style>
        </div>
    )
}
