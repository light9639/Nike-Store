import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Navigation } from "swiper";
import css from 'styled-jsx/css';

const style = css`
    .swiper-button-prev,
    .swiper-button-next {
        background-color: #ccc;
        padding: 22.5px;
        border-radius: 50%;
        top: 5%;
        right: 0%;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        color: #333;
        font-size: 20px;
    }
    .swiper-button-prev {
        left: auto;
        transform: translateX(-125%);
    }
`;

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
                <h2 className='mb-10 top-3 absolute text-3xl dark:text-white z-50'>Women Shoes</h2>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (a, i: number) {
                        return (
                            <>
                                <SwiperSlide className="pt-20 pb-10">
                                    <a href='#void' className='text-left tracking-tighter'>
                                        <img className="max-h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.7/w_599,c_limit/445f83ed-9c01-4af8-bd2c-9127001afc47/air-max-270-womens-shoes-Pgb94t.png" alt="ecommerce" />
                                        <h2 className='dark:text-white mt-4 text-xl '>Adidas x Atmos Adimatic OG Shoebox</h2>
                                        <p>Men's Shoes</p>
                                        <span className='relative xl:absolute right-0 translate-y-0 lg:mt-1 lg:-translate-y-14'>171,000원</span>
                                    </a>
                                </SwiperSlide>
                            </>
                        )
                    })
                }
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
            <style jsx>{style}</style>
        </div>
    )
}
