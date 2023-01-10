import css from 'styled-jsx/css';

export default css`
    .swiper-button-prev,
    .swiper-button-next {
        background-color: #222;
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
    @media screen and (max-width: 640px) {
        .swiper-button-prev,
        .swiper-button-next {
            padding: 20px;
            width: 33.75px;
            height: 33.75px;
            top: 5.5%;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 12px;
        }
    }
    img:hover {
        opacity: 1;
        -webkit-animation: flash 1.5s;
        animation: flash 1.5s;
    }
    @keyframes flash {
        0% {
            opacity: .4;
        }
        100% {
            opacity: 1;
        }
    }
`;