import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Navigation } from "swiper";
import SlideStyled from "../styles/SlideStyled";

const product = {
    detail: [
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6352-079/4004d669-0cdf-4e97-a7b4-893a480e3218_primary.jpg?gallery",
            "name": "조던 1 미드 ALT",
            "section": "베이비 신발",
            "price": "65,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH3157-107/a6c6d8e4-b0c7-44e4-898e-5e5396394fb0_primary.jpg?gallery",
            "name": "나이키 에어맥스 던",
            "section": "주니어 신발",
            "price": "119,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH3438-500/6c27ac0d-c1c4-43e4-ab59-9c76012abf65_primary.jpg?gallery",
            "name": "나이키 다이나모 고",
            "section": "베이비 이지 온/ 오프 신발",
            "price": "65,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/CD6867-022/2ea6d4db-ef04-4e5e-ab14-776115c59f87_primary.jpg?gallery",
            "name": "나이키 에어맥스 90 LTR",
            "section": "리틀키즈 신발",
            "price": "95,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DN6155-430/e383f88d-58d9-4e81-aa2d-36e9cc3fca96_primary.jpg?gallery",
            "name": "에어 조던 36 루카",
            "section": "주니어 신발",
            "price": "169,000원",
        },
        {
            "img": "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/CZ5361-113/7c1d8566-3889-4cfd-80c7-5de119c7da8e_primary.jpg?gallery",
            "name": "나이키 에어맥스 SC",
            "section": "베이비 신발",
            "price": "59,000원",
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
                <h2 className='mb-10 top-4 sm:top-3 absolute text-2xl sm:text-3xl dark:text-white z-50'>Popular Kids Shoes</h2>
                {
                    product.detail.map(function (a, i: number) {
                        return (
                            <>
                                <SwiperSlide className="pt-20 pb-10" key={i}>
                                    <a href='#void' className='text-left tracking-tighter'>
                                        <img className="max-h-full transition" src={a.img} alt={a.name} />
                                        <h2 className='dark:text-white mt-4 text-xl'>{a.name}</h2>
                                        <p className="text-base text-gray-600 dark:text-white mt-0 sm:mt-1">{a.section}</p>
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
