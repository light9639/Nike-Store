import css from 'styled-jsx/css';

export default css`
    .ImgBox {
        position: relative;
    }
    .ImgBox::before {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        display: block;
        content: '';
        width: 0;
        height: 0;
        background: rgba(255,255,255,.2);
        border-radius: 100%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 0;
    }
    .ImgBox:hover::before {
        -webkit-animation: circle .75s;
        animation: circle .75s;
    }
    @keyframes circle {
        0% {
            opacity: 1;
        }
        40% {
            opacity: 1;
        }
        100% {
            width: 150%;
            height: 150%;
            opacity: 0;
        }
    }
`