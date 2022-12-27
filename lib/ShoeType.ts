export type CommonType = {
    index: number;
    alt: string;
    name: string;
    info: string;
    price: string;
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