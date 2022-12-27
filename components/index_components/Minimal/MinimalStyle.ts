import css from "styled-jsx/css";

export const Minimal_style = css`
    .showcase--grid {
        height: 850px;
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, minmax(250px, 1fr));
        grid-auto-rows: repeat(2, 1fr);
        grid-gap: 2rem;
        grid-template-areas: "a b"
        "a c";
    }

    .showcase--item__big {
        grid-area: a;
        background-image: url("https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Nike_Soccer.jpg");
    }

    .showcase--item__small_top {
        grid-area: b;
        background-image: url("https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Nike_Running.jpg");
        background-position: 0% 25%;
    }

    .showcase--item__small_bottom {
        grid-area: c;
        background-image: url("https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Nike_White_Shoes.jpg");
    }

    .showcase--item__overlay {
        background: rgba(255, 255, 255, 0.7);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgba(0, 0, 0, 0.8) 100%);
    }

    .bg-white-transparent {
        background-color: rgba(255, 255, 255, 0.9);
    }

    .section--contact {
        min-height: 400px;
        height: 500px;
    }

    .contact-icon {
        width: 100px;
        height: auto;
    }

    @media (max-width: 1024px) {
        .showcase--grid {
            overflow: hidden;
            height: 100%;
            width: 100%;
            grid-template-rows: auto;
            grid-template-areas: none;
        }

        .showcase--item__big {
            height: 16rem;
            grid-column: 1 / -1;
            grid-row: 1;
        }

        .showcase--item__small_top {
            height: 16rem;
            grid-column: 1 / -1;
            grid-row: 2;
        }

        .showcase--item__small_bottom {
            height: 16rem;
            grid-column: 1 / -1;
            grid-row: 3;
        }

    }
`