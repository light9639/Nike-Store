import css from 'styled-jsx/css';

export default css`
    .swiper-button-prev,
    .swiper-button-next {
        background-color: #fff;
        padding: 22.5px;
        border-radius: 50%;
        transition: 0.5s;
        box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 4px 8px 0 rgb(0 0 0 / 20%);
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
        background-color: rgb(59 130 246);
    }

    .swiper-button-prev:hover::after,
    .swiper-button-next:hover::after {
        color: white;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
        color: #333;
        font-size: 16px;
        font-weight: 600;
    }

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

    @media screen and (max-width: 640px) {
        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 14px;
        }

        .Banner_text {
            transform: translate(-50%, 35%);
        }
    }`