import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Navigation } from "swiper";
import SlideStyled from "../styles/SlideStyled";

const product = {
    detail: [
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/CT1904-100/b51f434e-8ae2-4e80-8109-61110016e846_primary.jpg?gallery",
            "name": "나이키 에어맥스 97",
            "section": "여성 신발",
            "price": "189,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DV1143-800/84e52cf7-51f6-4007-8f0b-3609991e8fa0_primary.jpg?gallery",
            "name": "나이키 덩크 하이 1985",
            "section": "여성 신발",
            "price": "159,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH1042-091/668d8883-ae64-42e0-a335-ec332fa9e9bb_primary.jpg?gallery",
            "name": "나이키코트 줌 라이트 3",
            "section": "여성 테니스화",
            "price": "79,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM8259-600/0b7afce3-80b1-4353-916f-e97c79f170e2_primary.jpg?gallery",
            "name": "나이키 에어맥스 PRE- DAY",
            "section": "여성 신발",
            "price": "169,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/CZ0222-400/7c462879-a704-4002-9898-1d238fb68a46_primary.jpg?gallery",
            "name": "나이키코트 에어 줌 베이퍼 프로",
            "section": "여성 하드 코트 테니스화",
            "price": "139,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DC3431-500/da794a33-e89f-4677-91bf-5ab5d59c8d5d_primary.jpg?gallery",
            "name": "나이키코트 베이퍼 라이트",
            "section": "여성 하드 코트 테니스화",
            "price": "99,000원",
        },
    ]
}

export default function Stuff(): JSX.Element {
    return (
        <div className='max-w-screen-2xl my-24 m-auto p-6 lg:p-0'>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    540: {
                        slidesPerView: 1,  //브라우저가 540보다 클 때
                    },
                    768: {
                        slidesPerView: 2,  //브라우저가 768보다 클 때
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
                {
                    product.detail.map(function (a, i: number) {
                        return (
                            <>
                                <SwiperSlide className="pt-20 pb-10" key={i}>
                                    <a href='#void' className='text-left tracking-tighter'>
                                        <img className="max-h-full" src={a.img} alt={a.name} />
                                        <h2 className='dark:text-white mt-4 text-xl'>{a.name}</h2>
                                        <p className="text-base text-gray-600 dark:text-whit mt-0 sm:mt-1">{a.section}</p>
                                        <span className='relative xl:absolute right-0 translate-y-0 lg:mt-0 lg:-translate-y-14'>{a.price}</span>
                                    </a>
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
