import css from 'styled-jsx/css';

export const Trending_style = css`
.showcase--grid {
    height: 850px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    grid-auto-rows: repeat(1, 1fr);
    grid-gap: 2rem;
    grid-template-areas: "a b";
}

.showcase--item__big {
    grid-area: a;
    background-image: url("https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F05%2Fnike-x-travis-scott-x-fragment-air-jordan-low-og-dm7866-140-info-onfeet-2021-10.jpg?q=75&w=800&cbr=1&fit=max");
}

.showcase--item__big2 {
    grid-area: b;
    background-image: url("https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220913_hp_p4_bg2.jpg");
}

.showcase--item__overlay {
    background: rgba(255, 255, 255, 0.7);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgba(0, 0, 0, 0.8) 100%);
}

.section--feature {
    background-image: url("https://images.unsplash.com/photo-1562184760-a11b3cf7c169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
}

.bg-white-transparent {
    background-color: rgba(255, 255, 255, 0.9);
}

.section--contact {
    min-height: 400px;
    height: 500px;
}

.contact--item-map {
    background-image: url("https://images.unsplash.com/photo-1563558603156-1e0f5d0592a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
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

    .showcase--item__big2 {
    height: 16rem;
    grid-column: 1 / -1;
    grid-row: 2;
    }

    .section--feature {
    height: 100%;
    }
}
`