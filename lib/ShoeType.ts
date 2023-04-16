export type CommonType = {
    index: number;
    alt: string;
    name: string;
    info: string;
    price: number;
    Gender: string;
    href: string;
    star: {
        first: string;
        second: string;
        third: string;
        four: string;
        five: string;
    };
    Review: number;
    count: number;
}

export type SlideType = CommonType & {
    src: string;
    color: string;
}

export type ShoeViewType = CommonType & {
    src: {
        first: string;
        second: string;
        third: string;
        four: string;
        five: string;
        six: string;
    }
}

export type StarType = {
    first: string;
    second: string;
    third: string;
    four: string;
    five: string;
}