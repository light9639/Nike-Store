export interface status {
    statusCode: any
}

export interface Res {
    res: any,
    err: any
}

export interface GreetingsProps {
    name: string;
}

export interface RouteType {
    router: any
}

export interface ShoeType {
    name: string;
    img: string;
    href: string;
    text: string;
}

export interface providerType {
    name: string;
    content: string;
    color: string;
    svg: string;
}

export interface ShoeViewType {
    index: number;
    src: {
        first: string;
        second: string;
        third: string;
        four: string;
        five: string;
        six: string;
    },
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
    },
    Review: number;
}
export interface SlideType {
    index: number;
    src: string;
    alt: string;
    name: string;
    info: string;
    price: string;
    Gender: string;
    href: string;
    color: string;
    star: {
        first: string;
        second: string;
        third: string;
        four: string;
        five: string;
    };
    Review: number;
}

export interface DetailType {
    index: number;
    src: string;
    alt: string;
    h2: string;
    p1: string;
    p2: string;
    date: string;
}

export interface HeaderType {
    href: string;
    svg: string;
    p1: string;
    p2: string;
}

export interface HeaderMobileType {
    href: string;
    svg: string;
    p1: string;
}

export interface AboutType {
    src: string;
    p1: string;
    p2: string;
}

export interface LoginType {
    name: string;
    content: string;
    class: string;
    svg: string;
}

export interface BannerType {
    src: string;
    alt: string;
    h2: string;
    p1: string;
    p2: string;
}

export interface productColors {
    name: string;
    class: string;
    selectedClass: string;
    inStock: boolean;
}

export interface productSize {
    name: string;
    inStock: boolean;
}

export interface ServiceType {
    svg1: string;
    svg2: string;
    svg3: string;
    color: string;
    title: string;
    content: string;
}

export interface MainSideType {
    name: string;
    svg: string;
    svg2: string;
}