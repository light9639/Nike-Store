import React from 'react'
import Head from 'next/head'

interface HeadInfoProps {
    title: string;
    contents: string;
}

const HeadInfo: React.FC<HeadInfoProps> = ({ title, contents }) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="description" content={contents} />
            <meta id="f_title" name="f_title" property="og:title" content="나이키" />
            <meta name="description" content="나이키의 모든 것, 나이키 공식 온라인스토어" />
            <meta id="f_description" name="f_description" property="og:description" content="나이키의 모든 것, 나이키 공식 온라인스토어" />
        </Head>
    )
}

// HeadInfo.defaultProps = {
//     title: '나이키. Just Do It. Nike.com',
//     contents: "Nike next js",
// }

export default HeadInfo