import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Navigation } from "swiper";
import css from 'styled-jsx/css';
import SlideData from "../pages/data/SlideData";

const product = {
    detail: [
        {
            "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.3/w_523,c_limit/65e0820b-6fbc-4fef-8370-c8db89329ce5/dunk-low-womens-shoes-7K2zPb.png",
            "name": "Nike Dunk Low",
            "section": "Women's Shoes",
            "price": "$110",
        },
        {
            "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.3/w_523,c_limit/8465a5df-f728-4a89-939d-2fff4c7b5e83/dunk-high-retro-mens-shoe-dTVTCk.png",
            "name": "Nike Dunk High Retro",
            "section": "Men's Shoe",
            "price": "$125",
        },
        {
            "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.3/w_523,c_limit/ade50969-6aa7-4855-92e9-c056985e663b/air-jordan-1-low-mens-shoes-kT68wc.png",
            "name": "Air Jordan 1 Low",
            "section": "Men's Shoes",
            "price": "$110",
        },
        {
            "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.3/w_523,c_limit/2016a636-2953-41b4-b496-55263f2b26bc/air-jordan-1-mid-shoes-PCCmCV.png",
            "name": "Air Jordan 1 Mid",
            "section": "Shoes",
            "price": "$125",
        },
        {
            "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.3/w_523,c_limit/b2d8aa4a-92db-46cf-bd09-61f17dedb1db/air-max-95-mens-shoes-4Nzc1w.png",
            "name": "Nike Air Max 95",
            "section": "Men's Shoes",
            "price": "$175",
        },
        {
            "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.3/w_523,c_limit/4129b325-4a39-4dd3-82a2-01e88264167c/air-more-uptempo-big-kids-shoes-XXS2f0.png",
            "name": "Nike Air More Uptempo",
            "section": "Big Kids' Shoes",
            "price": "$140",
        },
    ]
}

const style = css`
    .swiper-button-prev,
    .swiper-button-next {
        background-color: #333;
        padding: 22.5px;
        border-radius: 50%;
        top: 5%;
        right: 0%;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
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
                <h2 className='mb-10 top-3 absolute text-3xl dark:text-white z-50'>Popular Men Shoes</h2>
                {
                    SlideData.map(function (a, i: number) {
                        return (
                            <>
                                <SwiperSlide className="pt-20 pb-10">
                                    <a href='#void' className='text-left tracking-tighter'>
                                        <img className="max-h-full" src={a.img} alt={a.name} />
                                        <h2 className='dark:text-white mt-4 text-xl '>{a.name}</h2>
                                        <p>{a.section}</p>
                                        <span className='relative xl:absolute right-0 translate-y-0 lg:mt-1 lg:-translate-y-14'>{a.price}</span>
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
