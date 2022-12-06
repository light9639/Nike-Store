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

export interface SlideType {
    index: string;
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
    Review: string;
}

export interface DetailType {
    index: string;
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