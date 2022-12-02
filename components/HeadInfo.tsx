import React from 'react'
import Head from 'next/head'

interface HeadInfoProps {
    title: string;
    contents: string;
}

const HeadInfo: React.FC<HeadInfoProps> = ({ title, contents }) => {
    return (
        <Head>
            <link rel="icon" href="/S_logo1.png" />
            <title>{title}</title>
            <meta name="description" content={contents} />
            <meta id="f_title" name="f_title" property="og:title" content="Shoes" />
            <meta name="description" content="신발의 모든 것, Shoe-Store 공식 온라인스토어" />
            <meta id="f_description" name="f_description" property="og:description" content="신발의 모든 것, Shoe-Store 온라인스토어" />
        </Head>
    )
}

export default HeadInfo