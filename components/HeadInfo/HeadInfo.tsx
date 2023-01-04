import React from 'react'
import Head from 'next/head'

interface HeadInfoProps {
    title: string;
    contents: string;
}

const HeadInfo: React.FC<HeadInfoProps> = ({ title, contents }) => {
    return (
        <Head>
            <link rel="icon" href="https://raw.githubusercontent.com/light9639/ImgStorage/29aaaa251306588ff953a2d746ae02bfcf58a288/shoestore/index/Logo_NIKE.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <title>{title}</title>
            <meta name="description" content={contents} />
            <meta id="f_title" name="f_title" property="og:title" content="Shoes" />
            <meta name="description" content="신발의 모든 것, Nike 공식 온라인스토어" />
            <meta id="f_description" name="f_description" property="og:description" content="신발의 모든 것, Nike 온라인스토어" />
        </Head>
    )
}

export default HeadInfo